import React, { Component } from 'react';
import { Menu, Responsive, Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import AllianceLogo from './Alliance';

const breakPoint = 900;
const sidebarId = 'mobile-menu';
const menuButtonId = 'mobile-menu-toggle';
const menuItems = {
  left: [
    { path: '/', name: 'home', text: 'Home' },
    { path: '/about', name: 'about', text: 'About' },
    { path: '/contact', name: 'contact', text: 'Contact' }
  ],
  right: [
    { path: '/apply', name: 'recruitment', text: 'Recruitment' },
    { path: '/loot', name: 'loot', text: 'Loot Policy' },
    { path: '/prices', name: 'prices', text: 'Item Prices' },
    { path: '/dkp', name: 'dkp', text: 'DKP' }
  ]
};

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({ ...this.state, activeItem: name });

  clickCatcher = e => {
    if (this.state.sidebarVisible) {
      const sidebar = document.getElementById(sidebarId);
      const toggleButton = document.getElementById(menuButtonId);

      if (
        e.target !== sidebar &&
        !sidebar.contains(e.target) &&
        e.target !== toggleButton &&
        !toggleButton.contains(e.target)
      ) {
        this.handleMobileMenuToggle();
      }
    }
  };

  componentDidMount() {
    window.addEventListener('click', this.clickCatcher);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.clickCatcher);
  }

  handleMobileMenuToggle = e =>
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
          id={menuButtonId}
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
          id={sidebarId}
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
