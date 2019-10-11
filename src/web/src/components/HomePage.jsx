import React from 'react';
import { Image } from 'semantic-ui-react';
import ragnaros from '../media/ragnaros.jpg';
import classic from '../media/classic.png';

const HomePage = () => (
  <div>
    <Image src={ragnaros} centered fluid />
    <Image
      src={classic}
      style={{
        position: 'fixed',
        top: '50px',
        left: '0',
        width: '25%',
        maxWidth: '25%'
      }}
    />
  </div>
);

export default HomePage;
