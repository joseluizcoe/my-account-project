import { Component } from 'react';
import storeConnect from '../redux/container-connect';

import Layout from '../layouts/default';
import { Icon, Item, Card, Button, Image } from 'semantic-ui-react';
import data from '../data/address-list';

class AddressList extends Component {
  render() {
    return (
      <Layout iconName='address card outline' title='Address List'>
        <Card.Group doubling itemsPerRow="2">
        {data.addressList.map( (address) =>
          <Card fluid>
            <Card.Content>
              <Icon
                size='big'
                name={address.type}
                style={{ float: 'right'}}
              />
              <Card.Header>
                {address.title}
              </Card.Header>
              <Card.Meta>
                CEP: {address.cep}
              </Card.Meta>
              <Card.Description>
                {address.address}.
                {address.city}/{address.state}.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Edit</Button>
                <Button basic color='red'>Delete</Button>
              </div>
            </Card.Content>
          </Card>
          )
        }
        </Card.Group>
      </Layout>
    )
  }
}

export default storeConnect(AddressList);
