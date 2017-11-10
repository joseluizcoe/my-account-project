import { Component } from 'react';
import { Menu, Icon, Label, Transition } from 'semantic-ui-react';
import componentConnect from '../../redux/component-connect';

class Top extends Component {
  constructor({ children, actions, nav }) {
    super();
    this.children = children;
  }
  render() {
    const {cartItems} = this.props;

    return (
      <Menu as='nav' fixed='top' borderless fluid>
        <Menu.Item>
          {this.children}
        </Menu.Item>
        <Menu.Item position='right'>
          <Icon name='cart' size='large' fitted />
            <Transition
              visible={cartItems > 0}
              animation='browse'
              duration={300}>
              <Label
                color='red'
                size='small'
                floating
                circular
                style={{
                  top: '.4em',
                  left: '3.5em',
                }}
                >{cartItems}
              </Label>
            </Transition>
        </Menu.Item>
      </Menu>
    )
  }
}

const ConnectedTop = componentConnect(Top);

export { ConnectedTop as Top };
