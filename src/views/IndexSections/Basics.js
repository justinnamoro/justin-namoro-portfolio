/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect} from "react";
import styled from 'styled-components';
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
import {Link} from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {


  const {ref, inView} = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();


  useEffect(()=>{
    console.log('use effect hook, inView = ', inView)
    if(inView){
      animation1.start({
        x:0,
        transition: {
          type: 'spring', duration:1, bounce:0.3
        }
      
      })
      animation2.start({
        x:0,
        transition: {
          type: 'spring', duration:1, bounce:0.3
        }
      })
    }
    if(!inView){
      animation1.start({x:'-100vw'})
      animation2.start({x:'100vw'})
    }

  },[inView])

  return (
    <div id="basic-elements" style={{ paddingTop: "15px" }}>
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />

      <Container
        style={{
          textAlign: "center",
          margin: "0 auto 36px",
          padding: "28px 24px 24px",
          borderRadius: "18px",
          background: "#f7f9fc",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.03)",
          border: "1px solid rgba(15, 23, 42, 0.04)",
          color: "#171940",
        }}
      >
        <h1 style={{ fontWeight: 600, marginBottom: "18px", color: "#171940"}}>
          Graphic Design & Communications Work
        </h1>
        <div className="parent-animate" ref={ref}>
          <p style={{ marginBottom: "30px" , color: "#171940"}}>
            A selection of digital and print design work including publication
            layouts, social media graphics, and photography created for campus
            publications, nonprofit organizations, and community events.
          </p>

          <Row>
            <Col md="4" xs="12" style={{ padding: "10px" }}>
              <a
                href="https://issuu.com/marshillonline/docs/_volume_30_-_issue_07_hyacinth"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img
                  src="mhill_spread.png"
                  alt="Mars' Hill Magazine spread"
                  style={{
                    width: "100%",
                    borderRadius: 15,
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontSize: "16px" , color: "#171940"}}>
                  Publication Layout – Mars’ Hill Magazine
                </p>
              </a>
            </Col>

            <Col md="4" xs="12" style={{ padding: "10px" }}>
              <a
                href="/social_graphic.png"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
              <img
                src="social_graphic.png"
                alt="Social media graphic"
                style={{
                  width: "100%",
                  borderRadius: 15,
                  marginBottom: "10px",
                }}
              />
              <p style={{ fontSize: "16px" , color: "#171940"}}>
                Social Media Graphic – Event Promotion
              </p>
            </a>
            </Col>

            <Col md="4" xs="12" style={{ padding: "10px" }}>
              <a
                href="https://www.flickr.com/photos/90179179@N05/albums/72177720320522711/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img
                  src="photo_sample.png"
                  alt="Photography event coverage album"
                  style={{
                    width: "100%",
                    borderRadius: 15,
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontSize: "16px" , color: "#171940"}}>
                  Photography – Event Coverage
                </p>
              </a>
            </Col>
          </Row>
        </div>
      </Container>

      <Container
        style={{
          textAlign: "center",
          margin: "0 auto 36px",
          padding: "28px 24px 24px",
          borderRadius: "18px",
          background: "#f3f7f1",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.03)",
          border: "1px solid rgba(15, 23, 42, 0.04)",
          color: "#171940",
        }}
      >
        <h1 style={{ fontWeight: 600, marginBottom: "18px" , color: "#171940"}}>
          Short Film – Creative Direction & Media Production (2026)
        </h1>
        <div className="parent-animate" ref={ref}>
          <p style={{ marginBottom: "30px" , color: "#171940"}}>
            I directed and produced a short film for a young adult conference,
            overseeing concept development, shot planning, visual storytelling,
            and on-site production. I collaborated with talent, managed
            logistics, and worked with editors to shape the final narrative and
            pacing. This project strengthened my skills in creative direction,
            photography, video editing, and event-related media creation. Tools
            used: Adobe Premiere Pro, Davinci Resolve, DSLR photography
          </p>

          <Row>
            <Col md="6" xs="12" style={{ padding: "10px" }}>
              <div style={{ height: 700 }}>
                <iframe
                  style={{
                    border: "none",
                    borderRadius: 15,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/TfTAGZBP29M?si=DQFJfXrCpFUITywk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col md="6" xs="12" style={{ padding: "10px" }}>
              <div style={{ height: 700 }}>
                <iframe
                  style={{
                    border: "none",
                    borderRadius: 15,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/EZKnYUOT3cM?si=t0uswN4GuwDGvBcv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container
        style={{
          textAlign: "center",
          margin: "0 auto 36px",
          padding: "28px 24px 24px",
          borderRadius: "18px",
          background: "#f9f3f7",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.03)",
          border: "1px solid rgba(15, 23, 42, 0.04)",
          color: "#171940",
        }}
      >
        <h1 style={{ fontWeight: 600, marginBottom: "18px" , color: "#171940"}}>
          Event Promotion – Facebook Banner Design
        </h1>
        <div className="parent-animate" ref={ref}>
          <p style={{ marginBottom: "30px" , color: "#171940"}}>
            Designed a promotional Facebook banner for a large community concert,
            focusing on clear visual hierarchy, strong typography, and
            brand-aligned graphics. Created a layout optimized for social media
            visibility and audience engagement, ensuring the design remained
            readable and visually appealing across desktop and mobile formats.
          </p>

          <Row>
            <Col md="6" xs="12" style={{ padding: "10px" }}>
                          <a
                href="/1.png"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
              <img
                src="1.png"
                alt="Event promo banner 1"
                style={{ width: "100%", borderRadius: 15 }}
              />
              </a>
            </Col>
            <Col md="6" xs="12" style={{ padding: "10px" }}>
                                 <a
                href="/2.png"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
              <img
                src="2.png"
                alt="Event promo banner 2"
                style={{ width: "100%", borderRadius: 15 }}
              />
              </a>
            </Col>
          </Row>
        </div>
      </Container>

      <Container
        style={{
          textAlign: "center",
          margin: "0 auto 36px",
          padding: "28px 24px 24px",
          borderRadius: "18px",
          background: "#eef5fb",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.03)",
          border: "1px solid rgba(15, 23, 42, 0.04)",
          color: "#171940",
        }}
      >
        <h1 style={{ fontWeight: 600, marginBottom: "18px" , color: "#171940"}}>
          Web Development & UI/UX Projects
        </h1>
        <div className="parent-animate" ref={ref}>
          <Row
            tag={Link}
            to="/MarsHill"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col md="6" xs="12" style={{ padding: "0" }}>
              <img
                src="mars_hill_logo.png"
                alt="Mars' Hill"
                style={{
                  width: "100%",
                  padding: "25px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, border-radius 0.3s ease",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.borderRadius = "0px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.borderRadius = "8px";
                }}
              />
              <p style={{ fontSize: "18px",
          color: "#171940" }}>Mars' Hill</p>
            </Col>
            <Col
              tag={Link}
              to="/Visie"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              md="6"
              xs="12"
              style={{ padding: "0" }}
            >
              <img
                src="visie.png"
                alt="Visie"
                style={{
                  width: "100%",
                  padding: "25px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, border-radius 0.3s ease",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.borderRadius = "0px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.borderRadius = "8px";
                }}
              />
              <p style={{ fontSize: "18px",
          color: "#171940" }}>Visie</p>
            </Col>
            <Col
              tag={Link}
              to="/BeatShare"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              md="6"
              xs="12"
              style={{ padding: "0" }}
            >
              <img
                src="beatshare.png"
                alt="BeatShare"
                style={{
                  width: "100%",
                  padding: "25px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, border-radius 0.3s ease",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.borderRadius = "0px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.borderRadius = "8px";
                }}
              />
              <p style={{ fontSize: "18px",
          color: "#171940" }}>BeatShare</p>
            </Col>
            <Col
              tag={Link}
              to="/LeagueWorks"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              md="6"
              xs="12"
              style={{ padding: "0" }}
            >
              <img
                src="leagueworks.png"
                alt="LeagueWorks"
                style={{
                  width: "100%",
                  padding: "25px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, border-radius 0.3s ease",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.borderRadius = "0px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.borderRadius = "8px";
                }}
              />
              <p style={{ fontSize: "18px",
          color: "#171940" }}>LeagueWorks</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
