import { Component } from 'react';
import Layout from '../layouts/default';
import { Button, Image, Icon, Item, Label } from 'semantic-ui-react';
import data from '../data/order-history';


class OrderHistory extends Component {


  render() {
    console.log(data);
    return(
      <Layout iconName='shopping basket' title='Order History'>
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
                    {order.date}
                  </Item.Meta>
                  <Item.Meta>Order Id: {order.id}</Item.Meta>
                  <Item.Meta>Itens: {order.products.length}</Item.Meta>
                  <Item.Meta>
                    <Button color='teal'>Details</Button>
                  </Item.Meta>
                </Item.Content>
              </Item>

              { this.props.showDetails && order.products.map( (product)=>
                <Item key={product.sku}>
                  <Item.Content>
                    <Item.Meta>{product.date}</Item.Meta>
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
