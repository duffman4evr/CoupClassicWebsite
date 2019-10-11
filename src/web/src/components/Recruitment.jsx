import React from 'react';
import {
  Container,
  Divider,
  Header,
  Grid,
  Image,
  Popup
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

const displayClasses = obj => (
  <Grid columns={totalClasses}>
    {Object.entries(obj).map(([key, value]) => (
      <Grid.Column>
        <Popup content={key} trigger={<Image src={value} />} />
      </Grid.Column>
    ))}
  </Grid>
);

const Recruitment = () => (
  <Container
    style={{
      'background-color': '#DEDEDE',
      'min-height': 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>Current Recruitment Needs</Header>
    <Divider />
    <Container text style={{ 'padding-bottom': '50px' }}>
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
  </Container>
);

export default Recruitment;
