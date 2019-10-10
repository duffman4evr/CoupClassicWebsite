import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

export default class GridContainer extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <NavBar />
        </Grid.Column>
      </Grid>
    );
  }
}
