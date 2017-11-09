import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { Top, Submenu } from '../components';

class LayoutDefault extends Component {
  constructor({ children, actions, nav }) {
    super();
    this.children = children;
  }
  render() {
    return (
      <div style={{ marginTop: '5em' }}>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <Top />
        <Submenu />
        <Container fluid>
          {this.children}
        </Container>
      </div>
    )
  }
}

export default LayoutDefault
