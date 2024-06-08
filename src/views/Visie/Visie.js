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
                        <p>Justin Namoro (Developer)</p>
                        <p>Ban Qaddoori (Developer)</p>
                        <p  style={{marginBottom:'25px'}}>Sahil Sian (Developer & Designer)</p>
                    <p style={{fontWeight:'bold'}}>Date developed: September 2021 - December 2021</p>

                    </div>


                <div>
                    <img src='visie.png'/>
                </div>
                </ProjectInfo>

                <ProjectDesc>
                    <p style={{maxWidth:'800px', marginBottom:50}}> 
                    Visie is my first project with StayShure. Bubble.io was the primary tool that was used to develop this web app.
                    Link to website: <a href='https://visie.io/'>Visie</a>
                    </p>

                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        
        </>
    );
}