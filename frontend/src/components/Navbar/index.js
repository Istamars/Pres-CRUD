import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Component extends React.Component {
  state = { activeItem: window.location.pathname };

  handleItemClick = (event, { to }) => {
    this.setState({ activeItem: to });
    this.props.onNavClick(this.state.activeItem);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === '/'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/add"
          name="Add Book"
          active={activeItem === '/add'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/ui-doc"
          name="UI Documentation"
          active={activeItem === '/ui-doc'}
          onClick={this.handleItemClick}
        />
        '
      </Menu>
    );
  }
}
