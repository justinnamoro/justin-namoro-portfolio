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

export default function BeatShare(){
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
                <h1 style={{fontWeight:600}}>BeatShare</h1>

            </div>

            <ProjectContent>
                
                <ProjectInfo>
                    <div style={{margin:'50px'}}>
                    <h2 style={{marginTop:'25px'}}>Team Members:</h2>
                        <p>Joe Le (Full Stack Developer & Overseer)</p>
                        <p>Justin Namoro (Front-end Developer, Designer & Project Manager)</p>
                        <p>Rocky Malubay (Front-end Developer & UI Designer)</p>
                        <p style={{marginBottom:'25px'}}>Kai Erfle (Lead Designer)</p>

                    </div>


                <div>
                    <img src='beatshare.png'/>
                </div>
                </ProjectInfo>

                <ProjectDesc>
                    <p style={{maxWidth:'800px', marginBottom:50}}> 
BeatShare is a social media app designed to help users share and discover music through a simple, engaging interface. Built as a BCIT Term 4 project, the app combines social features with personalized music sharing to create a fun, community‑driven experience.

Our team designed and developed the app from the ground up, focusing on clean UI patterns, intuitive navigation, and smooth interaction flows.
                    </p>
                    <h2 style={{maxWidth:'800px', marginBottom:50}}>My Role</h2>
<p style={{maxWidth:'800px', marginBottom:50}}> 
                  As the Front‑end Developer, Designer, and Project Manager, I contributed to both the technical implementation and the overall direction of the project. My responsibilities included:

connecting the front‑end to the back‑end server

building and styling reusable UI components

adding interactivity and handling user actions

refining layout clarity and improving user flows

managing weekly team meetings and coordinating tasks

This role allowed me to combine UX thinking with hands‑on development while guiding the team through a fast, collaborative build.
                    </p>
                    <h2 style={{maxWidth:'800px', marginBottom:50}}>What I Worked On</h2>
<p style={{maxWidth:'800px', marginBottom:50}}> 
                  Implemented front‑end features in React JS, including dynamic components and interactive UI behavior

Connected the app to the back‑end API, handling data flow and state management

Designed and refined key screens with a focus on hierarchy, readability, and smooth interactions

Improved usability across core flows such as posting, browsing, and profile interactions

Led weekly team meetings, organized tasks, and ensured consistent progress

Collaborated with designers to translate wireframes into functional, responsive UI
                    </p>
                    <h2 style={{maxWidth:'800px', marginBottom:50}}>Outcome</h2>
<p style={{maxWidth:'800px', marginBottom:50}}> 
                  BeatShare was completed within a six‑week sprint, with two weeks dedicated to design and four weeks to development. The final product delivered a clean, functional prototype with intuitive flows, consistent UI patterns, and a strong foundation for future features. My contributions helped ensure the app was both visually clear and technically reliable.
                    </p>


                    <h2>App Demo</h2>
                    <iframe style={{borderRadius:15}} width="100%" height="700" src="https://www.youtube.com/embed/T8fmZkj9FK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        </>
    );
}