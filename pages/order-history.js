import { Component } from 'react';
import Layout from '../layouts/default';
import { Icon } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    return (
      <Layout>
        <h1>
          <Icon name='shopping basket' /> Order history
        </h1>

      </Layout>
    )
  }
}

export default Profile;
