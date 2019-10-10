import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import ragnaros from '../media/ragnaros.jpg';
import classic from '../media/classic.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image src={ragnaros} centered fluid />
        <Image
          src={classic}
          style={{
            position: 'fixed',
            top: '50px',
            left: '0',
            width: '25%',
            'max-width': '25%'
          }}
        />
      </div>
    );
  }
}

export default HomePage;
