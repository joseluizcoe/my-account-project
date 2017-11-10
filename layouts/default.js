import React, { Component } from 'react';
import componentConnect from '../redux/component-connect';

import { Menu, Icon, Container, Header, Divider, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { Top, Submenu } from '../components';

class LayoutDefault extends Component {
  constructor({ children }) {
    super();
    this.children = children;
  }

  render() {
    const {showLoading, menu } = this.props;
    return (
      <div style={{ marginTop: '5em', marginBottom: '5em' }}>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'
        />
        <Submenu menu={menu} />
        <Container fluid>
          { this.props.title && this.props.iconName &&
            <Top>
              <Icon name={this.props.iconName} /> {this.props.title}
            </Top>
          }
          {showLoading &&
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>
          }
          {this.children}
        </Container>
      </div>
    )
  }
}

export default componentConnect(LayoutDefault);
