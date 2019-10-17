import React from 'react';
import { Container, Header, Grid, Divider, List } from 'semantic-ui-react';

const contactInfo = {
  Evilmonstar: 'Evilmonstar#7541',
  Helt: 'kennega#3578',
  Hooligan: 'monkey#4660',
  Nae: 'Nae#3276',
  Dotdotdot: 'Dot^3#9640',
  Switch: 'Switch#6366'
};

const ContactUs = () => (
  <Container
    style={{
      backgroundColor: '#DEDEDE',
      minHeight: 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>Contact Us</Header>
    <Divider />
    <Container textAlign='left'>
      <Grid columns={2} centered>
        <Grid.Column>
          <Header as='h2'>
            Find us in game or in{' '}
            <a
              href='https://discord.gg/TVcKDtJ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Discord
            </a>
          </Header>
          <List>
            {Object.entries(contactInfo).map(([inGame, inDisc], index) => (
              <List.Item key={index}>
                <Grid columns='equal' relaxed='very'>
                  <Grid.Column>{inGame}</Grid.Column>
                  <Grid.Column>{inDisc}</Grid.Column>
                </Grid>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  </Container>
);

export default ContactUs;
