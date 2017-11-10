import { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link'
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log('Loading Done');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log('Error');
  NProgress.done();
};

export class Submenu extends Component {
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
            onClick={this.startLoading}
            onStop={this.stopLoading}
            href="/profile"
            prefetch>
            <Icon name='user' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='address' name='address card outline'>
          <Link
            onClick={this.startLoading}
            onStop={this.stopLoading}
            href="/address-list"
            prefetch>
            <Icon name='address card outline' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='order-history' name='shopping basket'>
          <Link
            onClick={this.startLoading}
            onStop={this.stopLoading}
            href="/order-history"
            prefetch>
            <Icon name='shopping basket' size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item key='wishlist' name='heart'>
          <Link
            onClick={this.startLoading}
            onStop={this.stopLoading}
            href="/wishlist"
            prefetch>
            <Icon name='heart' size='large'/>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
