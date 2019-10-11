import React, { Component } from 'react';
import { Image, Container } from 'semantic-ui-react';
import values from '../media/item_values.jpg';

const wowhead = '$WowheadPower';

export default class ItemValues extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.id = 'tooltip-api';
    script.src = 'https://wow.zamimg.com/widgets/power.js';

    document.body.appendChild(script);

    if (window[wowhead]) {
      window[wowhead].init();
    }
  }

  componentWillUnmount() {
    const tooltipApi = document.getElementById('tooltip-api');

    if (tooltipApi) {
      tooltipApi.remove();
    }
  }

  render() {
    return (
      <Container>
        <Image src={values} centered />
      </Container>
    );
  }
}
