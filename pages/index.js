import { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Layout from '../layouts/default';

class index extends Component {
  render() {
    return (
    <Layout className='login-form'>
      <Grid
        textAlign='center'
        style={{ height: '70vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large' href="/profile">Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Layout>
    )
  }
}

export default index
