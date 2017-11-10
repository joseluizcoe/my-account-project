import { Component } from 'react';
import { Menu, Icon, Label } from 'semantic-ui-react';

export class Top extends Component {
  constructor({ children, actions, nav }) {
    super();
    this.children = children;
  }
  render() {
    return (
      <Menu as='nav' fixed='top' borderless fluid>
        <Menu.Item>
          {this.children}
        </Menu.Item>
        <Menu.Item position='right'>
          <Icon name='cart' size='large' fitted />
          <Label
            color='red'
            size='small'
            floating
            circular
            style={{
              top: '.4em',
              left: '4.2em',
            }}
            >5
          </Label>
        </Menu.Item>
      </Menu>
    )
  }
}
