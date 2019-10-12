import React from 'react';
import { Container } from 'semantic-ui-react';

const Tooltip = ({ itemId, dkp, itemName }) => (
  <Container>
    <span
      style={{
        color: '#FFFFFF',
        textAlign: 'left',
        position: 'absolute',
        right: '20px',
        top: '15px'
      }}
    >
      <b>&nbsp;{dkp || '???'}</b>
    </span>
    <a
      href={`https://classic.wowhead.com/item=${itemId}`}
      data-wowhead={`item=${itemId}&domain=classic`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {itemName}
    </a>
  </Container>
);

export default Tooltip;
