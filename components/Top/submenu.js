import { Component } from 'react';
import { connect } from 'react-redux';

import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';

class Submenu extends Component {
  handleShowLoading = () => {
    console.log('handleShowLoading');
    const { dispatch, showLoading } = this.props;

    dispatch({
      type: 'UPDATE_LOADING',
      showLoading: true,
    });
    return false;
  }

  handleHideLoading = () => {
    console.log('handleHideLoading');
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
            onClick={this.handleShowLoading}
            onStop={this.handleHideLoading}
            href="/profile"
            prefetch>
            <Icon name='user' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='address' name='address card outline'>
          <Link
            onClick={this.handleShowLoading}
            onStop={this.handleHideLoading}
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
            onClick={this.handleShowLoading}
            onStop={this.handleHideLoading}
            href="/wishlist"
            prefetch>
            <Icon name='heart' size='large'/>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(`TOPO STATE: ${state}`);
  const { showLoading } = state;
  return {
    showLoading,
  }
}

const Connected = connect(mapStateToProps)(Submenu);

export { Connected as Submenu};
