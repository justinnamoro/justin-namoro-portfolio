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
                    <p style={{fontWeight:'bold'}}>Date developed: September 2020 - December 2020</p>

                    </div>


                <div>
                    <img src='leagueworks.png'/>
                </div>
                </ProjectInfo>

                <ProjectDesc>
                    <p style={{maxWidth:'800px'}}> 
                    BCIT Term 3 Project. LeagueWorks is an all-in-one sport league management app catered towards atheletes and sports administrators. This app took
                    lots of research and planning to develop. Tools such as Figma were used for designing the app and during the development phase, we used tools such as Visual Studio Code, Android Studio and Xcode.
                    </p>

                    <h2>App Demo</h2>
                    <iframe width="100%" height="700" src="https://www.youtube.com/embed/cO6DOqB6DvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        
        </>
    );
}