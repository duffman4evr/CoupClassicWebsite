import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import CoupLogo from '../media/coup.png';

export default class Logo extends Component {
  render() {
    return (
      <Image
        src={CoupLogo}
        style={{ position: 'relative', left: '0', top: '0', height: '50px' }}
      />
    );
  }
}
