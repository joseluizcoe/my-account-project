import { Component } from 'react';
import Layout from '../layouts/default';
import { Segment, Icon } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    return (
      <Layout>
        <h1>
          <Icon name='heart' /> Wishlist
        </h1>
      </Layout>
    )
  }
}

export default Profile;
