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
    font-size: 3rem;
    p {
        font-size: 25px
    }
`

class ContactUs extends Component {
    render() {
        return (
            <ContactUsContainer>
                <div>
                    <h1>Contact Us</h1>
                    <p>Please seek Evilmonstar in game for an invite or to have a conversation</p>
                </div>
            </ContactUsContainer>
        );
    }
}

export default ContactUs;