import React, { Component } from 'react';
import AboutUs from './AboutUs';
import OurHistory from './OurHistory';
import ContactUs from './ContactUs';
// This page will integrate with the app (hopefully) and be locked behind OAuth
// import CurrentDkp from './CurrentDkp'
import ScrollableAnchor from "react-scrollable-anchor";

class HomePage extends Component {
    render() {
        return (
            <div>
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

                {/* This page will integrate with the app (hopefully) and be locked behind OAuth
                <ScrollableAnchor id={"dkp"}>
                    <CurrentDkp />
                </ScrollableAnchor> */}
            </div>
        );
    }
}

export default HomePage;