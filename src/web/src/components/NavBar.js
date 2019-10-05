import React, { Component } from 'react';
import styled from "styled-components";

const NavBarStyles = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  font-size: 2rem;
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
  }
  .right {
    margin-right: 2vw;
    width: 40vw;
    display: flex;
    justify-content: space-around;
  }
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavBarStyles>
                    <div className="left">
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                    <div className="right">
                    <a href="https://docs.google.com/spreadsheets/d/1QPzP9xd6_rnbZXht0RYR2lM5co1n8fCYLz_y5VfqH_c/edit?usp=sharing">Recruitment</a>
                        <a href="https://docs.google.com/spreadsheets/d/1QPzP9xd6_rnbZXht0RYR2lM5co1n8fCYLz_y5VfqH_c/edit?usp=sharing">Current DKP</a>
                        <a href="https://docs.google.com/spreadsheets/d/1j-WYZj_PZVQ6KXo3r-FiLrqwNbJHyvv2dWE2Hsipk3E/edit?usp=sharing">Item Values</a>
                    </div>
                </NavBarStyles>
            </div>
        );
    }
}

export default NavBar;