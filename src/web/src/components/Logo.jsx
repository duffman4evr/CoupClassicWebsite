import React from 'react';
import { Image } from 'semantic-ui-react';
import CoupLogo from '../media/coup.png';

const Logo = () => (
  <Image
    src={CoupLogo}
    style={{ position: 'relative', left: '0', top: '0', height: '50px' }}
  />
);

export default Logo;
