import React from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";
import AboutUs from './components/AboutUs';
import OurHistory from './components/OurHistory';
import ContactUs from './components/ContactUs';
import CurrentDkp from './components/CurrentDkp';
import ItemValues from './components/ItemValues';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Raleway');
  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans';
  }
`

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
    width: 30vw;
    display: flex;
    justify-content: space-around;
  }
`

function App() {
  return (
    <div className="App">
      <Global />
      <NavBarStyles>
        <div className="left">
          <a href="#about">About Us</a>
          <a href="#history">Our History</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="right">
          <a href="#dkp">Current DKP</a>
          <a href="https://docs.google.com/spreadsheets/d/1j-WYZj_PZVQ6KXo3r-FiLrqwNbJHyvv2dWE2Hsipk3E/edit?usp=sharing">Item Values</a>
        </div>
      </NavBarStyles>
      <header className="App-header">
        <img src={"https://media.giphy.com/media/3oAt21Fnr4i54uK8vK/giphy.gif"} alt="gif" />
        <h1>Welcome to Coup</h1>
        <p>An alliance guild on Atiesh</p>
      </header>
      
      <ScrollableAnchor id={"about"}>
      <AboutUs />
      </ScrollableAnchor>

      <ScrollableAnchor id={"history"}>
      <OurHistory />
      </ScrollableAnchor>

      <ScrollableAnchor id={"contact"}>
      <ContactUs />
      </ScrollableAnchor>

      <ScrollableAnchor id={"dkp"}>
      <CurrentDkp />
      </ScrollableAnchor>

      {/* Saving for later */}
      {/* <ScrollableAnchor id={"value"}>
      <ItemValues />
      </ScrollableAnchor> */}

    </div>
  );
}

export default App;