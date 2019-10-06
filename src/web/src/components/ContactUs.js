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
    a {
        text-decoration: none;
        color: blue;
    }
    h6 {
        margin: 0;
    }
    @media screen and (min-width: 350px) {
        h1, h6, a {
            font-size: 10px;
            margin-top: 0vh;
        }
        p {
            font-size: 8px;
        }
      }
      @media screen and (min-height: 810px) {

      }
      @media screen and (min-width: 410px) {

      }
      @media screen and (min-width: 750px) {

      }
      @media screen and (min-width: 1020px) {

      }
`

class ContactUs extends Component {
    render() {
        return (
            <ContactUsContainer>
                <div>
                    <h1>Contact us in game:</h1>
                    <p>For any questions or concerns, whisper Evilmonstar, Helt, Hooligan, Nae, Dotdotdot, or Switch in game.</p>
                    <br/><br/>
                    <h1>Or chat with us in our <a href="https://discord.gg/TVcKDtJ" target="_blank" rel="noopener noreferrer">Discord</a> server</h1>

                    <br/><br/>
                    <h6>Or PM Us:</h6>
                    <div className="discordHandles">
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
                </div>
            </ContactUsContainer>
        );
    }
}

export default ContactUs;