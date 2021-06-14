import React from "react";
import styled from "styled-components";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const Main = styled.div`
background-color:${props=>props.bgcolor ? props.bgcolor : '#272a66'};
/* -webkit-box-shadow: 0px 11px 14px 1px rgba(0,0,0,0.51); 
box-shadow: 0px 11px 14px 1px rgba(0,0,0,0.51); */
width: 100%;
height: 300px;
border-radius: 50px;
margin:25px;
padding:50px;
`

export default function Skills({skillname, desc, bgcolor, img}) {
  return (
    <Main bgcolor={bgcolor}>
      <h1 style={{fontWeight:600}}>{skillname}</h1>
      <p>{desc}</p>


    </Main>
  );
}

Skills.defaultProps = {
    skillname:'Skill Name',
    desc:'description'
}
