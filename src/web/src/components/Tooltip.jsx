import React from 'react';
import { Container } from 'semantic-ui-react';

const Tooltip = ({ itemId, dkp, itemName }) => (
  <Container>
    <a
      href={`https://classic.wowhead.com/item=${itemId}`}
      data-wowhead={`item=${itemId}&domain=classic`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {itemName}
    </a>
    <span style={{ color: '#FFFFFF' }}>&nbsp;{dkp || '???'}</span>
  </Container>
);

export default Tooltip;
