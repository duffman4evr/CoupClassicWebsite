import React, { Component } from 'react';
import styled from "styled-components";

const OurHistoryContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 5rem;
`

class OurHistory extends Component {
    render() {
        return (
            <OurHistoryContainer>
            <div>
                Welcome to Our History
            </div>
            </OurHistoryContainer>
        );
    }
}

export default OurHistory;