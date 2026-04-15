import React from 'react';
import styled from 'styled-components';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const ProjectContent = styled.div`
background-color: rgb(23,25,34);
justify-content: center;
align-items: center;
padding: 50px;

`;

const ProjectInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;

@media (max-width:767px){
    flex-direction: column;
}
`;

const ProjectDesc = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export default function Visie(){
    return(
        <>
        <IndexNavbar/>
        <div className='dev-header'
            style={{
                display: 'flex',
                justifyContent:'center',
                paddingTop:'250px',
                paddingBottom:'70px',
                backgroundColor:'rgb(23,25,45)'
            }}
            >
                <h1 style={{fontWeight:600}}>Visie</h1>
        </div>

        <ProjectContent>
                
                <ProjectInfo>
                    <div style={{margin:'50px'}}>
                    <h2 style={{marginTop:'25px'}}>Team Members:</h2>
                        <p>Kaden Kopas (Project Manager)</p>
                        <p>Philip Hansen (Lead Developer)</p>
                        <p>Justin Namoro (Designer & Developer)</p>
                        <p>Ban Qaddoori (Developer)</p>
                        <p  style={{marginBottom:'25px'}}>Sahil Sian (Developer)</p>
                    

                    </div>


                <div>
                    <img src='visie.png'/>
                </div>
                </ProjectInfo>

                <ProjectDesc>
                    <p style={{maxWidth:'800px', marginBottom:50}}> 
                    Visie is a web application built for the fashion and photography industry. The platform helps photographers, models, and creative teams collaborate more efficiently by centralizing communication, project details, and scheduling.

This was my first project with StayShure, and it introduced me to building structured, user‑facing workflows inside Bubble.io while working closely with both design and development teams.
                    <br></br>Link to website: <a href='https://visie.io/'>Visie</a>
                    </p>
                    <h2 style={{marginTop:'25px'}}>My Role</h2>
                    <p style={{maxWidth:'800px', marginBottom:50}}>I contributed to both the design refinement and front‑end implementation of the platform. My work focused on: improving layout clarity and simplifying user flows building responsive components within Bubble.io ensuring consistency across screens and interactions supporting the team with UI adjustments and usability improvements debugging layout issues and refining interaction behavior This project strengthened my ability to work within an existing product structure while applying UX thinking to improve clarity and usability.</p>

                    <h2 style={{marginTop:'25px'}}>What I Worked On</h2>
                    <p style={{maxWidth:'800px', marginBottom:50}}>Collaborated with the designer to translate wireframes into functional UI components

Refined the onboarding and project‑creation flows for better clarity

Improved spacing, hierarchy, and visual consistency across key screens

Conducted informal UX reviews to identify friction points

Implemented responsive layouts and interaction logic in Bubble.io

Worked closely with the lead developer to ensure smooth handoff and implementation</p>

<h2 style={{marginTop:'25px'}}>Outcome</h2>
                    <p style={{maxWidth:'800px', marginBottom:50}}>By the end of the project, the team delivered a functional MVP with clearer flows, more consistent UI patterns, and a more intuitive experience for photographers and models. My contributions helped strengthen the usability of the platform and ensured the interface behaved predictably across devices.</p>

                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        
        </>
    );
}