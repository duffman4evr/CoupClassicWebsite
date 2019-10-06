import React, { Component } from 'react';
import styled from "styled-components";
import warrior from '../media/warrioricon.png'
import priest from '../media/priesticon.png'
import mage from '../media/mageicon.png'
import warlock from '../media/warlockicon.png'
import rogue from '../media/rogueicon.png'
import druid from '../media/druidicon.png'
import paladin from '../media/paladinicon.png'
import hunter from '../media/huntericon.png'

const RecruitmentContainer = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        color: blue;
    }
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

const RecruitmentIcons = styled.div`
background-repeat: no-repeat;    
display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .box {
        border: 1px solid white;
        margin: 2vw;
        padding: 2vw;
    }
    h1 {
        margin-top: 2vh;
    }
    .high {
        background-color: green;
    }
    .low {
        background-color: yellow;
        color: black;
    }
    .closed {
        background-color: red;
    }
`

const RecruitmentSection = styled.div`
display: flex;
margin: 1vh 0 1vh 0;
flex-direction: row;
width: 50%;
align-items: center;
justify-content: space-evenly;

`

class Recruitment extends Component {
    render() {
        return (
            <RecruitmentContainer>
                <div className="recruitContent">
                <h3>Current Recruitment Needs:
                </h3>

                <RecruitmentIcons>
                <h1>High</h1><br/>
                <RecruitmentSection>
                <div style={{ backgroundImage: `url(${paladin})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Paladin</div>
                </RecruitmentSection>
                <h1>Low</h1>
                <RecruitmentSection>
                <div style={{ backgroundImage: `url(${druid})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Druid</div>
                <div style={{ backgroundImage: `url(${warrior})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box">Warrior</div>

                </RecruitmentSection>
                <h1>Closed</h1>
                <RecruitmentSection>
                <div style={{ backgroundImage: `url(${hunter})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Hunter</div>
                <div style={{ backgroundImage: `url(${warlock})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Warlock</div>
                <div style={{ backgroundImage: `url(${mage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Mage</div>
                <div style={{ backgroundImage: `url(${rogue})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Rogue</div>
                <div style={{ backgroundImage: `url(${priest})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="box ">Priest</div>
                    
                </RecruitmentSection>
                </RecruitmentIcons>

                <p>For more details on our recruitment process click <a href="https://docs.google.com/document/d/1fyi17yMVqoKDlBcIsfhcvyWeAQJbnvhCO0x3MTtrrvo/edit" target="_blank">here</a>
                </p>
                </div>
            </RecruitmentContainer>
        );
    }
}

export default Recruitment;