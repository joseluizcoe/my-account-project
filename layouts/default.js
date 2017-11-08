import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Top, Submenu } from '../components';

class LayoutDefault extends Component {
  constructor({ children, actions, nav }) {
    super();
    this.children = children;
  }
  render() {
    return (
      <div style={{ marginTop: '4em' }}>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
        />
        <Top />
        <Submenu />
        {this.children}
      </div>
    )
  }
}

export default LayoutDefault
