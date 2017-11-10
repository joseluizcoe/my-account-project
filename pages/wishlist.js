import { Component } from 'react';
import Layout from '../layouts/default';
import { Segment, Icon, Item, Button } from 'semantic-ui-react';
import data from '../data/wishlist';

class Wishlist extends Component {
  render() {
    return (
      <Layout iconName='heart' title='Wishlist'>
        <Item.Group unstackable divided >
          {data.products.map( (product)=>
            <Item key={product.sku}>
              <Item.Image src={product.image} />
              <Item.Content>
                <Item.Header>{product.title}</Item.Header>
                <Item.Meta>R$ {product.price}</Item.Meta>
                <Item.Meta>
                  <Button color='teal'><Icon name='cart' size='large'/> Add to cart</Button>
                </Item.Meta>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
      </Layout>
    )
  }
}

export default Wishlist;
