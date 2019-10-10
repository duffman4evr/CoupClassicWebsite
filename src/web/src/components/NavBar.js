import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="about"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name="contact"
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="recruitment"
            active={activeItem === 'recruitment'}
            onClick={this.handleItemClick}
          >
            Recruitment
          </Menu.Item>

          <Menu.Item
            name="loot"
            active={activeItem === 'loot'}
            onClick={this.handleItemClick}
          >
            Loot Policy
          </Menu.Item>

          <Menu.Item
            name="items"
            active={activeItem === 'items'}
            onClick={this.handleItemClick}
          >
            Item Prices
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
