import { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link'

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
        <Menu.Item name='user'>
          <Link href="/profile" prefetch>
            <Icon name='user' />
          </Link>
        </Menu.Item>

        <Menu.Item name='address card outline'>
          <Link href="/address-list" prefetch>
            <Icon name='address card outline'/>
          </Link>
        </Menu.Item>

        <Menu.Item name='shopping basket'>
          <Link href="/order-history" prefetch>
            <Icon name='shopping basket' />
          </Link>
        </Menu.Item>

        <Menu.Item name='heart'>
          <Link href="/wishlist" prefetch>
            <Icon name='heart' />
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
