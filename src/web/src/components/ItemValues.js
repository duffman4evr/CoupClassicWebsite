import React, { Component } from 'react';
import { Image, Container } from 'semantic-ui-react';
import values from '../media/item_values.jpg';
import Tooltip from './Tooltip';
import loadTooltips from '../util/tooltip-loader';

export default class ItemValues extends Component {
  componentDidMount() {
    loadTooltips();
  }

  render() {
    return (
      <Container>
        <Image src={values} centered />
        <Tooltip itemId={18814} dkp={9001} />
      </Container>
    );
  }
}
