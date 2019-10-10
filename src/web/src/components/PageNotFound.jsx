import React, { Component } from 'react';
import { Image, Message } from 'semantic-ui-react';
import Azeroth from '../media/map.jpg';

export default class PageNotFound extends Component {
  render() {
    return (
      <Image
        src={Azeroth}
        fluid
        centered
        style={{
          filter: "blur('5px')",
          '-webkit-filter': 'blur(5px)',
          position: 'fixed'
        }}
      />
    );
  }
}
