import { Component } from 'react';
import {
  Container,
  Grid,
} from 'semantic-ui-react';

export default class LayoutDefault extends Component {
  constructor({ children, actions, nav }) {
    super();
    this.children = children;
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
        />
        <Container fluid>
          {this.children}
        </Container>
      </div>
    )
  }
}
