import React, { Component } from 'react';
import styled from "styled-components";

const RecruitmentContainer = styled.div`
    margin: 0;
    width: 100%;
    height: 50vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .recruitContent {
        width: 90%;
        h3 {
            font-size: 4rem;
            margin-top: 8vh;
        }
        p {
            font-size: 2rem;
        }
    }
`

class Recruitment extends Component {
    render() {
        return (
            <RecruitmentContainer>
                <div className="recruitContent">
                <h3>Current Recruitment Needs:
                </h3>
                <p>For more details on our recruitment process click here <a href="https://docs.google.com/document/d/1fyi17yMVqoKDlBcIsfhcvyWeAQJbnvhCO0x3MTtrrvo/edit" target="_blank">here</a>
                </p>
                </div>
            </RecruitmentContainer>
        );
    }
}

export default Recruitment;