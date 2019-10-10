import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted size={'massive'} fixed={'top'}>
        <Menu
          inverted
          fixed={'top'}
          size={'massive'}
          style={{ width: '50%', left: '25%' }}
        >
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/contact"
            name="contact"
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/apply"
              name="recruitment"
              active={activeItem === 'recruitment'}
              onClick={this.handleItemClick}
            >
              Recruitment
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/loot"
              name="loot"
              active={activeItem === 'loot'}
              onClick={this.handleItemClick}
            >
              Loot Policy
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/prices"
              name="items"
              active={activeItem === 'items'}
              onClick={this.handleItemClick}
            >
              Item Prices
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Menu>
    );
  }
}
