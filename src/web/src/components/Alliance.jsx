import React from 'react';
import { Image } from 'semantic-ui-react';
import Alliance from '../media/alliance.png';

const AllianceLogo = () => (
  <Image
    src={Alliance}
    style={{ position: 'relative', left: '10px', top: '0', height: '50px' }}
  />
);

export default AllianceLogo;
