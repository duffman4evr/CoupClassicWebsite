import React, { Component } from 'react';
import { Menu, Responsive, Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import AllianceLogo from './Alliance';

const breakPoint = 900;

const menuItems = {
  left: [
    { path: '/', name: 'home', text: 'Home' },
    { path: '/about', name: 'about', text: 'About' },
    { path: '/contact', name: 'contact', text: 'Contact' }
  ],
  right: [
    { path: '/apply', name: 'recruitment', text: 'Recruitment' },
    { path: '/loot', name: 'loot', text: 'Loot Policy' },
    { path: '/prices', name: 'prices', text: 'Item Prices' }
  ]
};

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({ ...this.state, activeItem: name });

  handleMobileMenuToggle = () =>
    this.setState({
      ...this.state,
      sidebarVisible: !this.state.sidebarVisible
    });

  render() {
    const { activeItem, sidebarVisible } = this.state;

    return (
      <Menu inverted size={'massive'} fixed={'top'}>
        <Logo />
        <AllianceLogo />
        <Responsive
          as={Button}
          maxWidth={breakPoint - 1}
          icon='align justify'
          inverted
          active={sidebarVisible}
          toggle
          style={{ position: 'fixed', right: '10px', top: '10px' }}
          onClick={this.handleMobileMenuToggle}
          onUpdate={() => {
            if (window.innerWidth >= breakPoint && sidebarVisible) {
              this.setState({
                ...this.state,
                sidebarVisible: false
              });
            }
          }}
        />
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={sidebarVisible}
          width='thin'
        >
          {menuItems.left.map((entry, index) => (
            <Menu.Item
              key={index}
              as={Link}
              to={entry.path}
              name={entry.name}
              active={activeItem === entry.name}
              onClick={this.handleItemClick}
            >
              {entry.text}
            </Menu.Item>
          ))}
          {menuItems.right.map((entry, index) => (
            <Menu.Item
              key={index}
              as={Link}
              to={entry.path}
              name={entry.name}
              active={activeItem === entry.name}
              onClick={this.handleItemClick}
            >
              {entry.text}
            </Menu.Item>
          ))}
        </Sidebar>

        <Responsive
          as={Menu}
          minWidth={breakPoint}
          inverted
          fixed={'top'}
          size={'massive'}
          style={{ width: '50%', left: '25%' }}
        >
          {menuItems.left.map((entry, index) => (
            <Menu.Item
              key={index}
              as={Link}
              to={entry.path}
              name={entry.name}
              active={activeItem === entry.name}
              onClick={this.handleItemClick}
            >
              {entry.text}
            </Menu.Item>
          ))}

          <Menu.Menu position='right'>
            {menuItems.right.map((entry, index) => (
              <Menu.Item
                key={index}
                as={Link}
                to={entry.path}
                name={entry.name}
                active={activeItem === entry.name}
                onClick={this.handleItemClick}
              >
                {entry.text}
              </Menu.Item>
            ))}
          </Menu.Menu>
        </Responsive>
      </Menu>
    );
  }
}
