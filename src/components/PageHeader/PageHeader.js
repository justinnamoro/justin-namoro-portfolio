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
`;

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <img src='/siteicon@1x.png' 
          style=
          {{width:'185px', 
          height:'180px',
          borderRadius:'30px',
          marginTop:'150px',
          marginBottom:'50px'
        }}
          />

          <HiThere>Hi there 👋</HiThere>
          <Desc>
            My name is Justin Namoro. I’m a Graphic Designer, Digital Communications Specialist, and UI/UX Designer based in Vancouver, BC. I create clear, visually engaging, and user‑focused digital and print experiences across web, social media, publications, and brand communications.
          </Desc>

          <Button color='primary' href='/#basic-elements' style={{minWidth:180}}>View Projects</Button>


        </div>
      </Container>
    </div>
  );
}
