import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import ragnaros from '../media/ragnaros.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image src={ragnaros} centered fluid />
      </div>
    );
  }
}

export default HomePage;
