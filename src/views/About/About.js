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
                    <p style={{marginBottom:25}}>I’m a Graphic Designer, Digital Communications Specialist, and UI/UX Designer based in Vancouver, BC. I create clear, visually engaging, and user‑focused digital and print experiences across web, social media, publications, and brand communications.

I studied Digital Design and Development at the British Columbia Institute of Technology, where I built a strong foundation in front‑end development, UI design, and responsive web technologies. Over time, my work expanded beyond web development into graphic design, digital storytelling, and cross‑platform communications.

Today, I design digital and print materials, build accessible and user‑friendly web experiences, create social media content, and contribute to publication layouts and event‑related media. My work includes magazine design, promotional graphics, photography, and basic video editing.
                    </p>

                    <Button href='/justin_namoro_resume.pdf'>View Resume</Button>

                    
                </motion.div>

                <div>
                    <img src='/coding.gif'/>
                </div>

          </SplitDiv>

          {/* <SplitDiv>
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
          </SplitDiv> */}
          




      </Container>
      
    </div>
    <Footer/>
    </>
  );
}