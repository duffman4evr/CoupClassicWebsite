import React from 'react';
import {
  Container,
  Divider,
  Header,
  Grid,
  Image,
  Popup,
  Responsive
} from 'semantic-ui-react';
import Warrior from '../media/warrioricon.png';
import Priest from '../media/priesticon.png';
import Mage from '../media/mageicon.png';
import Warlock from '../media/warlockicon.png';
import Rogue from '../media/rogueicon.png';
import Druid from '../media/druidicon.png';
import Paladin from '../media/paladinicon.png';
import Hunter from '../media/huntericon.png';

const high = { Paladin };
const low = { Druid, Warrior };
const closed = { Priest, Mage, Warlock, Rogue, Hunter };
const totalClasses =
  Object.keys(high).length +
  Object.keys(low).length +
  Object.keys(closed).length;
const breakPoint = 900;

const displayClasses = obj => (
  <Container>
    <Responsive as={Grid} columns={totalClasses / 2} maxWidth={breakPoint - 1}>
      {Object.entries(obj).map(([key, value]) => (
        <Grid.Column key={key}>
          <Popup content={key} trigger={<Image src={value} ui={false} />} />
        </Grid.Column>
      ))}
    </Responsive>
    <Responsive as={Grid} columns={totalClasses} minWidth={breakPoint}>
      {Object.entries(obj).map(([key, value]) => (
        <Grid.Column key={key}>
          <Popup content={key} trigger={<Image src={value} ui={false} />} />
        </Grid.Column>
      ))}
    </Responsive>
  </Container>
);

const Recruitment = () => (
  <Container
    style={{
      backgroundColor: '#DEDEDE',
      minHeight: 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>Current Recruitment Needs</Header>
    <Divider />
    <Container text style={{ paddingBottom: '50px' }}>
      <Header as='h2'>High</Header>
      <Divider />
      {displayClasses(high)}
      <Header as='h2'>Low</Header>
      <Divider />
      {displayClasses(low)}
      <Header as='h2'>Closed</Header>
      <Divider />
      {displayClasses(closed)}
    </Container>
    <Divider />
    <p>
      Interested? Fill out our recruitment form{' '}
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSd5faLI7non7Xvp9L9rGu1hfLUV4wWHLmrj4RhY0mUpIkB98A/viewform?usp=sf_link'>
        here
      </a>
      .
    </p>
  </Container>
);

export default Recruitment;
