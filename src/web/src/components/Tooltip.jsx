import React from 'react';
import { Container } from 'semantic-ui-react';

const Tooltip = ({ itemId, dkp }) => (
  <Container>
    <a
      href={`https://classic.wowhead.com/item=${itemId}`}
      data-wowhead={`item=${itemId}&domain=classic`}
      target='_blank'
    />

    <span style={{ color: '#FFFFFF' }}>
      {' : '}
      {dkp || '???'}
      {' DKP'}
    </span>
  </Container>
);

export default Tooltip;
