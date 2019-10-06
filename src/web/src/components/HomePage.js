import React, { Component } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ragnaros from '../media/ragnaros2019.jpg'
import Recruitment from './Recruitment';
// This page will integrate with the app (hopefully) and be locked behind OAuth
// import CurrentDkp from './CurrentDkp'
import ScrollableAnchor from "react-scrollable-anchor";

class HomePage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={ragnaros} alt="gif" />
                </header>

                <ScrollableAnchor id={"about"}>
                    <AboutUs />
                </ScrollableAnchor>
                
                <ScrollableAnchor id={"recruitment"}>
                    <Recruitment />
                </ScrollableAnchor>

                <ScrollableAnchor id={"contact"}>
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