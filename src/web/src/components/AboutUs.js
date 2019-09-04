import React, { Component } from 'react';
import styled from "styled-components";

const AboutUsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 5rem;
`

class AboutUs extends Component {
    render() {
        return (
            <AboutUsContainer>
            <div>
                Welcome to About Us
            </div>
            </AboutUsContainer>
        );
    }
}

export default AboutUs;