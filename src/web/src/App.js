import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Recruitment from './components/Recruitment';
import Loot from './components/LootPolicy';
import ItemPrices from './components/ItemValues';
import PageNotFound from './components/PageNotFound';
import PreloadAssets from './components/Preload';
import Dkp from './components/Dkp';

function App() {

  return (
    <Router>
      <PreloadAssets />
      <NavBar />
      <div className='App'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/apply' component={Recruitment} />
          <Route path='/loot' component={Loot} />
          <Route path='/prices' component={ItemPrices} />
          <Route path='/dkp' component={Dkp} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
