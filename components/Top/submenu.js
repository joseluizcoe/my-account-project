import { Component } from 'react';
import componentConnect from '../../redux/component-connect';

import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';

class Submenu extends Component {
  handleShowLoading = () => {
    const { dispatch, showLoading } = this.props;
    dispatch({
      type: 'UPDATE_LOADING',
      showLoading: true,
    });
    return false;
  }

  handleHideLoading = () => {
    const { dispatch, showLoading } = this.props;
    dispatch({
      type: 'UPDATE_LOADING',
      showLoading: false,
    });
    return false;
  }

  render() {
    return (
      <Menu
        fluid
        widths={4}
        as="nav"
        fixed="bottom"
        pointing
        borderless
        >
        <Menu.Item name='user'>
          <Link key='user'
            href="/profile"
            prefetch>
            <Icon name='user' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='address' name='address card outline'>
          <Link
            href="/address-list"
            prefetch>
            <Icon name='address card outline' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='order-history' name='shopping basket'>
          <Link
            href="/order-history"
            prefetch>
            <Icon name='shopping basket' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='wishlist' name='heart'>
          <Link
            href="/wishlist"
            prefetch>
            <Icon name='heart' size='large'/>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const Connected = componentConnect(Submenu);

export { Connected as Submenu};
