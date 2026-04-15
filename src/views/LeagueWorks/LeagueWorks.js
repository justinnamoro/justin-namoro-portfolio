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


export default function LeagueWorks(){
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
                <h1 style={{fontWeight:600}}>LeagueWorks</h1>
        </div>

        <ProjectContent>
                
                <ProjectInfo>
                    <div style={{margin:'50px'}}>
                    <h2 style={{marginTop:'25px'}}>Team Members:</h2>
                        <p>Noah Mah (Project Manager & Designer)</p>
                        <p>Kozy Tamai (Lead Designer)</p>
                        <p>Justin Namoro (Front-end Developer & Designer)</p>
                        <p>Herman Cheng (Front-end Developer & Designer)</p>
                        <p style={{marginBottom:'25px'}}>Justin Yee (Full-stack Developer)</p>
        

                    </div>


                <div>
                    <img src='leagueworks.png'/>
                </div>
                </ProjectInfo>

                <ProjectDesc>
                    <p style={{maxWidth:'800px', marginBottom:50}}> 
                   LeagueWorks is an all‑in‑one sports league management app designed for athletes, coaches, and league administrators. The goal of the project was to simplify team organization, scheduling, and communication through a clean, mobile‑first experience.

This project required extensive research, planning, and collaboration across design and development teams. We focused on creating a product that could support multiple user types while keeping the interface intuitive and easy to navigate.
                    </p>
                    <h2 style={{maxWidth:'800px', marginBottom:50}}>My Role</h2>
<p style={{maxWidth:'800px', marginBottom:50}}> 
                  As a Front‑end Developer and Designer, I contributed to both the UI design and React Native implementation of the app. My work centered on:

refining user flows and improving layout clarity

designing and building responsive, mobile‑friendly components

ensuring visual consistency across screens and interactions

collaborating with designers to translate wireframes into functional UI

debugging layout issues and optimizing interaction behavior

This project strengthened my ability to work across UX, UI, and development, especially within a mobile environment.
                    </p>
                                        <h2 style={{maxWidth:'800px', marginBottom:50}}>What I Worked On</h2>
<p style={{maxWidth:'800px', marginBottom:50}}> 
                  Designed key screens in Figma with a focus on hierarchy, readability, and intuitive navigation

Implemented front‑end components in React Native, ensuring smooth interactions and responsive layouts

Helped refine the onboarding and scheduling flows for better clarity and ease of use

Conducted informal UX reviews to identify friction points and improve usability

Collaborated closely with the design team to maintain consistency across the app

Tested the app across iOS and Android simulators to ensure reliable performance
                    </p>
                    <h2 style={{maxWidth:'800px', marginBottom:50}}>Outcome</h2>
<p style={{maxWidth:'800px', marginBottom:50}}> 
                  LeagueWorks resulted in a functional mobile prototype that demonstrated clear user flows, consistent UI patterns, and a strong foundation for future development. My contributions helped improve the usability of the app and ensured the interface behaved predictably across devices.
                    </p>
                    <h2>UI Design</h2>
                    <iframe style={{border:'1px solid rgba(0, 0, 0, 0.1)', borderRadius:15,marginBottom:50}} width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FfA15NfYJoI2EkmPxSf19kH%2FHigh-Fidelity%3Fnode-id%3D10%253A108" allowfullscreen></iframe>

                    <h2>App Demo</h2>
                    <iframe style={{borderRadius:15}} width="100%" height="700" src="https://www.youtube.com/embed/cO6DOqB6DvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        
        </>
    );
}