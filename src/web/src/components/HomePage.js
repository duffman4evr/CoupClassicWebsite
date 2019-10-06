import React, { Component } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ragnaros from '../media/ragnaros2019.jpg'
import Recruitment from './Recruitment';
import ScrollableAnchor from "react-scrollable-anchor";
import styled from "styled-components";

const ImageContainer = styled.div`
@media screen and (max-width: 1025px) {
    img {
    width: 100%;
    }
}    
// @media screen and (max-width: 820px) {
//         img {
//         width: 100%;
//         margin-right: 15vw;
//         }
//     }
//     @media screen and (max-width: 670px) {
//         img {
//         width: 100%;
//         margin-right: 0vw;
//         }
//     }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <ImageContainer>
                {/* <header className="App-header"> */}
                    <img src={ragnaros} alt="ragnaros" />
                {/* </header> */}
                </ImageContainer>

                <ScrollableAnchor id={"about"}>
                    <AboutUs />
                </ScrollableAnchor>
                
                <ScrollableAnchor id={"recruitment"}>
                    <Recruitment />
                </ScrollableAnchor>

                <ScrollableAnchor id={"contact"}>
                    <ContactUs />
                </ScrollableAnchor>


                {/* This page will integrate with the app (hopefully) and be locked behind OAuth
                <ScrollableAnchor id={"dkp"}>
                    <CurrentDkp />
                </ScrollableAnchor> */}
            </div>
        );
    }
}

export default HomePage;