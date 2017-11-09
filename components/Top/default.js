import { Component } from 'react';
import { Menu, Icon, } from 'semantic-ui-react';

export class Top extends Component {
  constructor({ children, actions, nav }) {
    super();
    this.children = children;
  }
  render() {
    return (
      <Menu as="nav" fixed="top" borderless fluid>
        <Menu.Item as="a" href="/">
          {this.children}
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name='cart' size='large'/>
        </Menu.Item>
      </Menu>
    )
  }
}
