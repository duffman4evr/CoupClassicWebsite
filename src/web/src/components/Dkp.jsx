import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';

const cobalt = '#0050AB';

const Dkp = () => (
  <Container
    style={{
      backgroundColor: '#DEDEDE',
      minHeight: 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>DKP History</Header>
    <Divider />
    <Container text textAlign='left' style={{ paddingBottom: '50px' }}>
      <Header as='h2'>Hello</Header>
      <a href="https://discordapp.com/api/oauth2/authorize?client_id=633045419605229571&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdkp&response_type=token&scope=identify%20guilds">Login with Discord</a>
    </Container>
  </Container>


);

export default Dkp;
