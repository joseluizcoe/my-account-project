import { Component } from 'react';
import Layout from '../layouts/default';
import { Card, Icon, Image } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    return (
      <Layout>
        <h1><Icon name='user' /> Profile</h1>
      </Layout>
    )
  }
}

export default Profile;
