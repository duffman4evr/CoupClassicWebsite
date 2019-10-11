import React, { Component } from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import values from '../media/item_values.jpg';
import Tooltip from './Tooltip';
import loadTooltips from '../util/tooltip-loader';
import moltenCore from '../data/molten-core.json';

export default class ItemValues extends Component {
  componentDidMount() {
    loadTooltips();
  }

  render() {
    return (
      <Container>
        <Image src={values} centered />
        <Grid columns={4} centered>
          {moltenCore.map(entry => (
            <Grid.Column key={entry.id}>
              <Tooltip itemId={entry.id} dkp={entry.dkp} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}
