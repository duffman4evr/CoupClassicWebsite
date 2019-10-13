import React from 'react';
import { Container } from 'semantic-ui-react';
import Welcome from '../media/ragnaros.jpg';
import ClassicLogo from '../media/classic.png';

const assets = [Welcome, ClassicLogo];

const PreloadAssets = () => (
  <Container>
    {assets.map((asset, index) => (
      <img key={index} src={asset} hidden alt='#' />
    ))}
  </Container>
);

export default PreloadAssets;
