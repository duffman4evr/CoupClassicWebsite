import React, { Component } from 'react';
import styled from "styled-components";

const ContactUsContainer = styled.div`
    width: 100%;
    height: 60vh;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3rem;
    p {
        font-size: 25px;
        margin: 2vh 0;
    }
    h1, h6 {
        font-size: 35px;
    }
    a {
        text-decoration: none;
        color: blue;
    }
    h6 {
        margin: 0;
    }
    @media screen and (max-width: 420px) {
        height: 40vh;
        .contentBox {
            height: 30vh;
            justify-content: none;
        }
        h1, h6 {
            font-size: 12px;
            padding: 0;
            margin: 0;
        }
        p {
            font-size: 10px;
            margin: 2vh 5vw 2vh 5vw;
        }
    }
    @media screen and (max-width: 770px) {
        height: 60vh;
        p {
            margin: 2vh 5vh;
        }
    }
    @media screen and (max-width: 1030px) {
        height: 50vh;
        p {
            margin: 2vh 5vh;
        }
    }
`

class ContactUs extends Component {
    render() {
        return (
            <ContactUsContainer>
                <div className="contentBox">
                    <h1>Contact us in game:</h1>
                    <p>For any questions or concerns, whisper Evilmonstar, Helt, Hooligan, Nae, Dotdotdot, or Switch in game.</p>
                    <h1>Or chat with us in our <a href="https://discord.gg/TVcKDtJ" target="_blank" rel="noopener noreferrer">Discord</a> server</h1>
                    <h6>Or PM Us:</h6>
                        <p>Evilmonstar - Evilmonstar#7541
                        <br />
                        Helt - kennega#3578
                        <br />
                        Hooligan - monkey#4660
                        <br />
                        Nae - Nae#3276
                        <br />
                        Dotdotdot - Dot^3#9640
                        <br />
                        Switch - Switch#6366
                        </p>
                </div>
            </ContactUsContainer>
        );
    }
}

export default ContactUs;