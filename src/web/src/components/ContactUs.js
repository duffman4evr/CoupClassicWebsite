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
`

class ContactUs extends Component {
    render() {
        return (
            <ContactUsContainer>
                <div>
                    Contact us in game:
                    <p>For any questions or concerns, whisper Evilmonstar, Helt, Hooligan, Nae, Dotdotdot, or Switch in game.</p>
                    <br/><br/>
                    Or chat with us in our <a href="https://discord.gg/TVcKDtJ" target="_blank">Discord</a> server

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