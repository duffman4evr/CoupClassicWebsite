import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  Divider,
  Input,
  Dropdown,
  Responsive
} from 'semantic-ui-react';
import Tooltip from './Tooltip';
import refreshTooltips from '../util/tooltip-loader';
import items from '../data/items.json';

const itemColumns = 4;
const breakPoint = 900;

const filterOptions = [
  { text: 'DKP Low-High', value: 'dkp-ascending' },
  { text: 'DKP High-Low', value: 'dkp-descending' },
  { text: 'Name A-Z', value: 'name-ascending' },
  { text: 'Name Z-A', value: 'name-descending' }
];

export default class ItemValues extends Component {
  state = {
    current: items
  };

  componentDidMount() {
    refreshTooltips();
    window.addEventListener('resize', refreshTooltips);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', refreshTooltips);
  }

  filterByName(data) {
    if (data.value) {
      return items.filter(entry =>
        entry.name.toLowerCase().includes(data.value.toLowerCase())
      );
    } else {
      return items;
    }
  }

  orderBy(data) {
    const currentItems = Object.assign([], this.state.current);
    let sortMethod = () => 0;

    switch (data.value) {
      case 'name-ascending':
        sortMethod = (a, b) => (a.name < b.name ? -1 : 1);
        break;
      case 'name-descending':
        sortMethod = (a, b) => (b.name < a.name ? -1 : 1);
        break;
      case 'dkp-ascending':
        sortMethod = (a, b) => a.dkp - b.dkp;
        break;
      case 'dkp-descending':
        sortMethod = (a, b) => b.dkp - a.dkp;
        break;
      default:
        break;
    }

    /**
     * side effect
     * if we want the name filter to work after order
     * we need to also sort the original list
     */
    items.sort(sortMethod);

    return currentItems.sort(sortMethod);
  }

  displayItems(data, hasBorder) {
    if (data) {
      return data.map((entry, index) => (
        <Grid.Column key={index}>
          <Container
            style={hasBorder && { border: '1px solid grey', padding: '10px' }}
          >
            <Tooltip itemId={entry.id} dkp={entry.dkp} itemName={entry.name} />
          </Container>
        </Grid.Column>
      ));
    } else {
      return <div />;
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
          <Container text textAlign='right'>
            <Responsive as={Grid} columns={3} centered minWidth={breakPoint}>
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
                  placeholder='Order by...'
                  search
                  selection
                  options={filterOptions}
                  onChange={(e, data) => {
                    const orderedList = this.orderBy(data);
                    this.setState({ current: orderedList }, refreshTooltips);
                  }}
                ></Dropdown>
              </Grid.Column>
            </Responsive>
            <Responsive
              as={Grid}
              rows={2}
              centered
              divided
              maxWidth={breakPoint - 1}
            >
              <Grid.Row>
                <Input
                  icon='search'
                  placeholder='Filter by name...'
                  onChange={(e, data) => {
                    const newList = this.filterByName(data);
                    this.setState({ current: newList }, refreshTooltips);
                  }}
                />
              </Grid.Row>
              <Grid.Row>
                <Dropdown
                  placeholder='Order by...'
                  search
                  selection
                  options={filterOptions}
                  onChange={(e, data) => {
                    const orderedList = this.orderBy(data);
                    this.setState({ current: orderedList }, refreshTooltips);
                  }}
                ></Dropdown>
              </Grid.Row>
            </Responsive>
          </Container>
          <i>{this.state.current.length} Items</i>
        </Container>
        <Responsive
          as={Grid}
          columns={itemColumns}
          centered
          inverted
          stretched
          celled
          divided
          minWidth={breakPoint}
        >
          {this.displayItems(this.state.current, true)}
        </Responsive>
        <Responsive
          as={Grid}
          columns={1}
          centered
          inverted
          stretched
          celled
          divided
          maxWidth={breakPoint - 1}
        >
          {this.displayItems(this.state.current)}
        </Responsive>
      </Container>
    );
  }
}
