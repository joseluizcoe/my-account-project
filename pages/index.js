import { Component } from 'react';
import storeConnect from '../redux/container-connect';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Layout from '../layouts/default';

class index extends Component {
  render() {
    return (
      <Layout>
        <Grid
          textAlign='center'
          style={{ height: '70vh' }}
          verticalAlign='middle'
        >
        <Grid.Column style={{ maxWidth: 300 }}>
          <Form size='large'>
              <Button color='teal'
                fluid size='massive'
                href='/profile'
              >
                Let's go to My Account Project
              </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Layout>
    )
  }
}

export default storeConnect(index);
