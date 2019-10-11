import React from 'react';
import { Container, Header, Grid, Divider } from 'semantic-ui-react';

const ContactUs = () => (
  <Container
    style={{
      'background-color': '#DEDEDE',
      'min-height': 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>Contact Us</Header>
    <Divider />
    <Container text textAlign='left'>
      <Grid columns={3} centered>
        <Grid.Column>
          <Header as='h2' textAlign='left'>
            Find Us In Game
          </Header>
          <ul>
            <li>Evilmonstar</li>
            <li>Helt</li>
            <li>Hooligan</li>
            <li>Nae</li>
            <li>Dotdotdot</li>
            <li>Switch</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' textAlign='left'>
            <a
              href='https://discord.gg/TVcKDtJ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Join Us In Discord
            </a>
          </Header>
          <ul>
            <li>Evilmonstar#7541</li>
            <li>kennega#3578</li>
            <li>monkey#4660</li>
            <li>Nae#3276</li>
            <li>Dot^3#9640</li>
            <li>Switch#6366</li>
          </ul>
        </Grid.Column>
      </Grid>
    </Container>
  </Container>
);

export default ContactUs;
