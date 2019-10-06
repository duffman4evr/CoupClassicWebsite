import React, { Component } from 'react';
import styled from "styled-components";

const NavBarStyles = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  font-size: 1rem;
  background-color: #1A090D;
  font-family: "Raleway";
  text-transform: uppercase;
  z-index: 2;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: white;
    &:hover {
      color: #6B6570;
    }
  }
  .left {
    display: flex;
    flex-direction: row;
    width: 35vw;
    @media screen and (min-width: 350px) {
      font-size: 8px;
      width: 40vw;
    }
    @media screen and (min-width: 750px) {
      font-size: 15px; 
      width: 45vw;
    }
    @media screen and (min-width: 1020px) {
      font-size: 20px; 
      width: 45vw;
    }
  }
  .right {
    margin-right: 2vw;
    width: 30vw;
    display: flex;
    justify-content: space-around;
    @media screen and (min-width: 350px) {
      font-size: 9px; 
      width: 55vw;
    }
    @media screen and (min-width: 750px) {
      font-size: 15px; 
      width: 45vw;
    }
    @media screen and (min-width: 1020px) {
      font-size: 20px; 
      width: 45vw;
    }
  }
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavBarStyles>
                    <div className="left">
                        <a href="/">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                    <div className="right">
                        <a href="#recruitment">Recruitment</a>
                        <a href="/loot-policy">Loot Policy</a>
                        <a href="https://docs.google.com/spreadsheets/d/1j-WYZj_PZVQ6KXo3r-FiLrqwNbJHyvv2dWE2Hsipk3E/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Item Prices</a>
                    </div>
                </NavBarStyles>
            </div>
        );
    }
}

export default NavBar;