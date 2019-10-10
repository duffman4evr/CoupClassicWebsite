import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Recruitment from './components/Recruitment';
import Loot from './components/LootPolicy';
import ItemPrices from './components/ItemValues';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Raleway');
  * {
    margin: 0;
    padding: 0;
    body {
      font-family: 'PT Sans';
    }
  }
`;

function App() {
  return (
    <Router>
      <Global />
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/apply" component={Recruitment} />
          <Route path="/loot" component={Loot} />
          <Route path="/prices" component={ItemPrices} />
          <Route component={<p>temp 404</p>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
