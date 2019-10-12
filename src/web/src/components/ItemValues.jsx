import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  Divider,
  Input,
  Dropdown
} from 'semantic-ui-react';
import Tooltip from './Tooltip';
import refreshTooltips from '../util/tooltip-loader';
import items from '../data/items.json';

const itemColumns = 4;

const filterOptions = [
  { text: 'A-Z', value: 'name-ascending' },
  { text: 'Z-A', value: 'name-descending' },
  { text: 'DKP Low-High', value: 'dkp-ascending' },
  { text: 'DKP High-Low', value: 'dkp-descending' }
];

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

  displayItems(data) {
    if (data) {
      return Object.entries(data).map(([key, value]) => (
        <Grid.Column key={key}>
          <Tooltip itemId={value.id} dkp={value.dkp} itemName={key} />
        </Grid.Column>
      ));
    } else {
      return <div></div>;
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
            <Grid columns={2}>
              <Grid.Column>
                <Input
                  icon='search'
                  placeholder='Filter by name...'
                  onChange={(e, data) => {
                    const newList = this.filterByName(data);
                    this.setState({ current: newList }, refreshTooltips);
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder='test'
                  search
                  selection
                  options={filterOptions}
                ></Dropdown>
              </Grid.Column>
            </Grid>
          </Container>
        </Container>
        <Grid columns={itemColumns} centered inverted>
          {this.displayItems(this.state.current)}
        </Grid>
      </Container>
    );
  }
}
