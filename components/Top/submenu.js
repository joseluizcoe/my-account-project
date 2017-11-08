import { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export class Submenu extends Component {
  render() {
    return (
      <Menu
        fluid
        widths={4}
        icon='labeled'
        as="nav"
        fixed="bottom"
        pointing
        borderless
        >
        <Menu.Item name='user' as="a" href="/profile">
          <Icon name='user' /> Profile
        </Menu.Item>

        <Menu.Item name='address card outline' as="a" href="/address-list">
          <Icon name='address card outline' /> Address List
        </Menu.Item>

        <Menu.Item name='shopping basket' as="a" href="/order-history">
          <Icon name='shopping basket' /> Order history
        </Menu.Item>

        <Menu.Item name='heart' as="a" href="/wishlist">
          <Icon name='heart' />
          Wishlist
        </Menu.Item>
      </Menu>
    );
  }
}
