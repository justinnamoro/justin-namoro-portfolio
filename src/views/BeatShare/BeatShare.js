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
                        <p>Justin Namoro (Front-end Developer & Project Manager)</p>
                        <p>Rocky Malubay (Front-end Developer & UI Designer)</p>
                        <p style={{marginBottom:'25px'}}>Kai Erfle (Lead Designer)</p>
                    <p style={{fontWeight:'bold'}}>Date developed: March 2021</p>

                    </div>


                <div>
                    <img src='beatshare.png'/>
                </div>
                </ProjectInfo>

                <ProjectDesc>
                    <p style={{maxWidth:'800px', marginBottom:50}}> 
                    BCIT Term 4 Project. We were able to design and develop a social media app where users can share their taste in music. 
                    This app was developed using React JS. As a Front-End Developer and Project Manager, I was in charge of connecting the app to 
                    the back-end server, adding interactivity to the app, creating and styling components, as well as conducting weekly team meetings.
                    It took about half a month to design and a month to develop.
                    We are happy with the end results of this project!
                    </p>

                    <h2>App Demo</h2>
                    <iframe style={{borderRadius:15}} width="100%" height="700" src="https://www.youtube.com/embed/T8fmZkj9FK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        </>
    );
}