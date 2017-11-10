import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';

import Layout from '../layouts/default';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import data from '../data/profile';

class Profile extends Component {
  render() {
    return (
      <Layout iconName='user' title='Profile'>
        <Card fluid>
          <Image src={data.image} />
          <Card.Content>
            <Card.Header>
              {data.name}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                {data.birthday}
              </span>
            </Card.Meta>
            <Card.Description>
              {data.email}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Edit</Button>
            <Button basic color='red'>Delete</Button>
          </div>
        </Card.Content>
        </Card>
      </Layout>
    )
  }
}


const mapStateToProps = (state) => {
  const { loading, activeLink, cartItems }  = state;
  return {
    showLoading,
    activeLink,
    cartItems
  };
}

export default withRedux(store, mapStateToProps)(Profile);
