import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { createGlobalStyle } from "styled-components";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Raleway');
  * {
    margin: 0;
    padding: 0;
    body {
      font-family: 'PT Sans';
    }
  }
`

function App() {
  return (
    <Router>
        <Global />
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;