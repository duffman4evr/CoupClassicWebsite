import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Recruitment from './components/Recruitment';
import Loot from './components/LootPolicy';
import PageNotFound from './components/PageNotFound';
import PreloadAssets from './components/Preload';

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
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
