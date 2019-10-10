import React, { Component } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ragnaros from '../media/ragnaros2019.jpg';
import Recruitment from './Recruitment';
import ScrollableAnchor from 'react-scrollable-anchor';
import styled from 'styled-components';

const ImageContainer = styled.div`
  @media screen and (min-width: 350px) {
    img {
      width: 100%;
    }
  }
`;

class HomePage extends Component {
  render() {
    return (
      <div>
        <ImageContainer>
          {/* <header className="App-header"> */}
          <img src={ragnaros} alt="ragnaros" />
          {/* </header> */}
        </ImageContainer>

        <ScrollableAnchor id={'about'}>
          <AboutUs />
        </ScrollableAnchor>

        <ScrollableAnchor id={'recruitment'}>
          <Recruitment />
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
          <ContactUs />
        </ScrollableAnchor>

        {/* This page will integrate with the app (hopefully) and be locked behind OAuth
                <ScrollableAnchor id={"dkp"}>
                    <CurrentDkp />
                </ScrollableAnchor> */}
      </div>
    );
  }
}

export default HomePage;
