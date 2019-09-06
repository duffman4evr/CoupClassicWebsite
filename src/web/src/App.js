import React from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import OurHistory from './components/OurHistory';
import ContactUs from './components/ContactUs';
import CurrentDkp from './components/CurrentDkp';
// import ItemValues from './components/ItemValues';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Raleway');
  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans';
  }
`

function App() {
  return (
    <div className="App">
      <Global />
      <NavBar />
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