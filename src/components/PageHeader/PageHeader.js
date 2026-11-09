import React from "react";
import styled from 'styled-components';

// reactstrap components
import { Container, Button } from "reactstrap";

const HiThere = styled.h1`
  font-weight: 600;
  font-size:50px;
@media (max-width:760px){
    font-size: 30px;
    font-weight: 600;

}
@media (max-width:320px){
    font-size: 25px;
    font-weight: 600;
}
`;

const Desc = styled.h4`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 1.35;
    margin-bottom: 16px;
    padding: 0 8px;
  }
`;

const ProfileImage = styled.img`
  width: 185px;
  height: 180px;
  border-radius: 30px;
  margin-top: 150px;
  margin-bottom: 50px;

  @media (max-width: 760px) {
    width: 140px;
    height: 140px;
    margin-top: 40px;
    margin-bottom: 24px;
  }
`;

const ProjectsButton = styled(Button)`
  @media (max-width: 760px) {
    display: none;
  }
`;

const SquareFour = styled.div`
  @media (max-width: 760px) {
    display: none;
  }
`;

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <SquareFour className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <ProfileImage src='/siteicon@1x.png' alt="Justin Namoro" />

          <HiThere>Justin Namoro</HiThere>
          <Desc>
            Vancouver-based UI/UX, web, and graphic designer creating intuitive digital experiences, engaging visual content, and user centered design solutions.
          </Desc>

          <ProjectsButton
            color='primary'
            href='/#basic-elements'

          >
            View Projects
          </ProjectsButton>


        </div>
      </Container>
    </div>
  );
}
