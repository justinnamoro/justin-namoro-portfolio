import React, {useEffect, useRef} from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer.js";
import Skills from "components/Skills/Skills.js";
import {motion} from 'framer-motion';
import {useForm} from '@formspree/react';

import styled from 'styled-components';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// styling

const SplitDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
@media (max-width:767px){
    flex-direction: column;
}
`;

// styling

const pageTransition = {
    in:{
        opacity: 1,
        y:0
    },
    out:{
        opacity: 0,
        y:-100
    }
}

export default function About() {

  return (
    <>
    <div className="section section-signup">
      <IndexNavbar/>

      <Container>

          <SplitDiv>
                <motion.div style={{display:'flex', flexDirection:'column', alignItems: 'center',maxWidth:570, margin:20, justifyContent:'center'}} initial='out' animate='in' exit='out' variants={pageTransition}>
                    <p style={{marginBottom:25}}>I studied Digital Design and Development at the British Columbia Institute of Technology for two years, where I built a strong foundation in front-end development, UI design, and responsive web technologies. I specialize in creating user-friendly websites and mobile applications using modern tools such as HTML, CSS, JavaScript, and React.

For every project, I focus on building intuitive interfaces and seamless user experiences. I care deeply about accessibility, performance, and clean design, ensuring that the final product is both visually engaging and easy to use.
                    </p>

                    <Button href='/justinnamoro_resume.pdf'>View Resume</Button>

                    
                </motion.div>

                <div>
                    <img src='/coding.gif'/>
                </div>

          </SplitDiv>

          <SplitDiv>
              <Skills skillname='Front-End Developer'
              desc='I can create clean and organized code using my knowledge of HTML, CSS, and Javascript.
              One of my favourite tools in development is React. 
              '
              />
              <Skills skillname='UI/UX Designer'
              desc='I am able to come up with clean, modern, and user friendly interface designs. 
              Figma and Adobe XD are my ideal tools when coming up with user interface design concepts.
              '
              bgcolor='#4d3287'
              />
          </SplitDiv>
          




      </Container>
      
    </div>
    <Footer/>
    </>
  );
}