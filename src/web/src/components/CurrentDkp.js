import React, { Component } from 'react';
import styled from "styled-components";

const CurrentDkpContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 5rem;
`

class CurrentDkp extends Component {
    render() {
        return (
            <CurrentDkpContainer>
            <div>
                Welcome to Current DKP
            </div>
            </CurrentDkpContainer>
        );
    }
}

export default CurrentDkp;