import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import ragnaros from '../media/nefarian.jpg';
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
    <Header as='h1' style={{ color: 'white' }}>
      Atiesh - US West - Alliance
    </Header>
  </div>
);

export default HomePage;
