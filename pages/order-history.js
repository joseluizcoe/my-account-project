import { Component } from 'react';
import Layout from '../layouts/default';
import { Button, Image, Icon, Item, Label, Header, Divider } from 'semantic-ui-react';
import data from '../data/order-history';


class OrderHistory extends Component {
  render() {
    console.log(data);
    return(
      <Layout>
        <Header as='h5'>
          <Icon name='shopping basket' /> Order History
        </Header>
        <Divider />
        {data.orders.map(
          order =>
            <Item.Group unstackable divided key={order.id}>
              { order.products.map( (product)=>
                <Item key={product.sku}>
                  <Item.Image floated='left' size='tiny' src={product.image} />
                  <Item.Content>
                    <Item.Header>{product.title}</Item.Header>
                    <Item.Meta>
                    <Button color='teal'>Details</Button>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              )}
          </Item.Group>
        )
        }
      </Layout>
    )
  }
}

export default OrderHistory;
