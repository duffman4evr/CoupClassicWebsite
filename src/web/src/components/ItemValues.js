import React, { Component } from 'react';
import { Container, Grid, Header, Divider, Input } from 'semantic-ui-react';
import Tooltip from './Tooltip';
import refreshTooltips from '../util/tooltip-loader';
import items from '../data/items.json';

export default class ItemValues extends Component {
  state = {
    current: items
  };

  componentDidMount() {
    refreshTooltips();
  }

  filterByName(data) {
    if (data.value) {
      const filtered = {};

      Object.entries(items).forEach(([key, value]) => {
        if (key.toLowerCase().includes(data.value.toLowerCase())) {
          filtered[key] = { ...value };
        }
      });

      return filtered;
    } else {
      return items;
    }
  }

  render() {
    return (
      <Container
        style={{
          minHeight: 'calc(100vh - 50px)'
        }}
      >
        <Container
          style={{
            backgroundColor: '#DEDEDE'
          }}
        >
          <Header as='h1'>Item Prices</Header>
          <Divider />

          <Container text textAlign='left' style={{ paddingBottom: '50px' }}>
            <Header as='h2' textAlign='left'>
              Filters
            </Header>
            <Divider />
            <Input
              icon='search'
              placeholder='Filter by name...'
              onChange={(e, data) => {
                const newList = this.filterByName(data);
                this.setState({ current: newList }, refreshTooltips);
              }}
            />
          </Container>
        </Container>
        <Grid columns={4} centered inverted divided>
          {Object.entries(this.state.current).map(([key, value]) => (
            <Grid.Column key={key}>
              <Tooltip itemId={value.id} dkp={value.dkp} itemName={key} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}
