import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ragnaros from '../media/ragnaros.jpg';
import Recruitment from './Recruitment';
import ScrollableAnchor from 'react-scrollable-anchor';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image src={ragnaros} centered fluid />

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
