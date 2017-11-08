import { Component } from 'react';
import { Menu, Icon, } from 'semantic-ui-react';

export class Top extends Component {
  render() {
    return (
      <Menu as="nav" color="grey" fixed="top" borderless fluid inverted>
        <Menu.Item as="a" href="/">
          <Icon name="globe" size="big" /> Site name
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name='cart' size='large'/>
        </Menu.Item>
      </Menu>
    )
  }
}
