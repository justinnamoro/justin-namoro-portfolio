
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const LinkHover = styled(NavLink)`
  display: inline-block;
  position: relative;
  color: #fff;


&:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

&:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`;

const TopNavbar = styled(Navbar)`
  border-radius: 14px;

  @media (min-width: 768px) {
    border-bottom-left-radius: ${({ $isScrolled }) => ($isScrolled ? "14px" : "0")};
    border-bottom-right-radius: ${({ $isScrolled }) => ($isScrolled ? "14px" : "0")};
  }
`;

const MobileBottomNav = styled.nav`
  position: fixed;
  z-index: 1029;
  top: 85px;
  right: 7px;
  left: 7px;
  display: flex;
  justify-content: space-around;
  padding: 8px 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  background: rgba(17, 24, 39, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);

  @media (min-width: 768px) {
    button[aria-label="Back to top"] {
      display: none;
    }

    &.at-top {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 4px;
    width: calc((100% - 8px) / 5);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
    transform: translateX(calc(var(--active-index, 0) * 100%));
    transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    &::before {
      width: calc((100% - 8px) / 4);
      transform: translateX(calc(max(0, var(--active-index, 0) - 1) * 100%));
    }
  }

  button {
    position: relative;
    z-index: 1;
    flex: 1;
    min-width: 0;
    padding: 6px 2px;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    font: inherit;
    font-size: 13px;
    line-height: 1.2;
    text-align: center;
    cursor: pointer;
    transition: background 0.2s ease, box-shadow 0.2s ease;
  }

  button[aria-current="location"] {
    background: transparent;
    box-shadow: none;
  }

  button:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 767.98px) {
    top: auto;
    z-index: 1030;
    right: 7px;
    bottom: max(7px, env(safe-area-inset-bottom));
    left: 7px;
    border-radius: 14px;
    font-size: 11px;

    @media (prefers-reduced-motion: reduce) {
      &::before {
        transition: none;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }
  }
`;

export default function IndexNavbar() {
  const location = useLocation();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [activeProject, setActiveProject] = React.useState("");
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  React.useEffect(() => {
    const projectIds = [
      "graphic-design-communications",
      "web-migration-cms",
      "short-film",
      "web-dev-ui-ux",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY <= 100) {
          setActiveProject("");
          return;
        }
        const visibleProjects = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visibleProjects.length) {
          setActiveProject(visibleProjects[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );
    const resetAtTop = () => {
      if (window.scrollY <= 100) setActiveProject("");
    };
    window.addEventListener("scroll", resetAtTop);
    resetAtTop();
    projectIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", resetAtTop);
    };
  }, []);
  const changeColor = () => {
    setIsScrolled(window.scrollY > 99);
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = (id) => {
    setActiveProject(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <TopNavbar
      className={"fixed-top " + color}
      $isScrolled={isScrolled}
      color-on-scroll="100"
      expand="lg"
      style={{
        margin: "7px",
        width: "calc(100% - 14px)",
        background: "rgba(17, 24, 39, 0.35)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.2)",
      }}
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            to="/"
            tag={Link}
            id="navbar-brand"
            onClick={(event) => {
              if (location.pathname === "/" || location.pathname === "") {
                event.preventDefault();
                setActiveProject("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span>Namoro • </span>
            JS
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Namoro.JS
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/namorojustin/"
                rel="noopener noreferrer"
                target="_blank"
                title="Linkedin"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://github.com/justinnamoro"
                rel="noopener noreferrer"
                target="_blank"
                title="Facebook"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">Github</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/namoro.js/"
                rel="noopener noreferrer"
                target="_blank"
                title="Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <LinkHover tag={Link} to='/About'>About</LinkHover>
            </NavItem>
            <NavItem>
                <LinkHover tag={Link} to='/Contact'>Contact</LinkHover>
            </NavItem>
            {/* {(location.pathname === "/" || location.pathname === "") && <UncontrolledDropdown nav className="d-none d-lg-block">
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                
                Projects
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">

                <DropdownItem href="#graphic-design-communications" onClick={(e) => { e.preventDefault(); document.getElementById("graphic-design-communications")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Graphic Design & Communications
                </DropdownItem>
                <DropdownItem href="#web-migration-cms" onClick={(e) => { e.preventDefault(); document.getElementById("web-migration-cms")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Website Migration & CMS Implementation
                </DropdownItem>
                <DropdownItem href="#short-film" onClick={(e) => { e.preventDefault(); document.getElementById("short-film")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Media Production
                </DropdownItem>
                <DropdownItem href="#web-dev-ui-ux" onClick={(e) => { e.preventDefault(); document.getElementById("web-dev-ui-ux")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Web Development & UI/UX
                </DropdownItem>




               
                
              </DropdownMenu>
            </UncontrolledDropdown>} */}

          </Nav>
        </Collapse>
      </Container>
    </TopNavbar>
    {(location.pathname === "/" || location.pathname === "") && <MobileBottomNav className={isScrolled ? "" : "at-top"} aria-label="Project sections" style={{ "--active-index": Math.max(0, ["", "graphic-design-communications", "web-migration-cms", "short-film", "web-dev-ui-ux"].indexOf(activeProject)) }}>
      <button type="button" aria-label="Back to top" aria-current={activeProject === "" ? "location" : undefined} onClick={() => { setActiveProject(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <i className="fas fa-home" aria-hidden="true" />
      </button>
      <button type="button" aria-current={activeProject === "graphic-design-communications" ? "location" : undefined} onClick={() => scrollToProject("graphic-design-communications")}>
        Graphics & Comms
      </button>
      <button type="button" aria-current={activeProject === "web-migration-cms" ? "location" : undefined} onClick={() => scrollToProject("web-migration-cms")}>
        Migration &amp; CMS
      </button>
      <button type="button" aria-current={activeProject === "short-film" ? "location" : undefined} onClick={() => scrollToProject("short-film")}>
        Media
      </button>
      <button type="button" aria-current={activeProject === "web-dev-ui-ux" ? "location" : undefined} onClick={() => scrollToProject("web-dev-ui-ux")}>
        Web &amp; UI/UX
      </button>
    </MobileBottomNav>}
    </>
  );
}
