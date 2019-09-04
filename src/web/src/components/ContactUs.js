import React, { Component } from 'react';
import styled from "styled-components";

const ContactUsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 5rem;
`

class ContactUs extends Component {
    render() {
        return (
            <ContactUsContainer>
            <div>
                <h1>Contact Us</h1>
                <h5>Please seek Evilmonster in game for an invite and to have a conversation</h5>
            </div>
            </ContactUsContainer>
        );
    }
}

export default ContactUs;