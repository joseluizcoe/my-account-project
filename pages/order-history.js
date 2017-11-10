import { Component } from 'react';
import storeConnect from '../redux/container-connect';

import Layout from '../layouts/default';
import { Button, Image, Icon, Item, Label, List } from 'semantic-ui-react';
import data from '../data/order-history';


class OrderHistory extends Component {

  render() {
    return(
      <Layout
        iconName='shopping basket'
        title='Order History'
        loading={this.props.showLoading}
        >
        {data.orders.map(
          order =>
            <Item.Group unstackable divided key={order.id}>
              <Item key={order.id}>
                <Item.Image src={order.products[0].image} />
                <Item.Content>
                  <Item.Meta>
                    {order.status=='delivered' &&
                      <Icon name="calendar check" />
                    }
                    {order.status=='canceled' &&
                      <Icon name="delete calendar" />
                    }
                    {order.status=='waiting' &&
                      <Icon name="calendar outline" />
                    }
                    {order.date} - Order Id: {order.id} [{order.status}] </Item.Meta>
                  <Item.Meta>
                  <List>
                  {order.products.map( (product)=>
                    <List.Item as='a'>
                      <Icon name='right triangle' />
                      <List.Content>
                        <List.Header>{product.title}</List.Header>
                        <List.Description>
                          R$ {product.price}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    )}
                  </List>
                  </Item.Meta>
                </Item.Content>
              </Item>
          </Item.Group>
        )
        }
      </Layout>
    )
  }
}

export default storeConnect(OrderHistory);
