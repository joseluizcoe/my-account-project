import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';

import Layout from '../layouts/default';
import { Segment, Icon, Item, Button } from 'semantic-ui-react';
import data from '../data/wishlist';

class Wishlist extends Component {
  handleAddToCart = () => {
    const { dispatch, cartItems } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      cartItems,
    });
    return false;
  }

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
                  <Button color='teal' onClick={this.handleAddToCart}>
                    <Icon name='cart' size='large'/> Add to cart
                  </Button>
                </Item.Meta>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading, activeLink, cartItems }  = state;
  return {
    loading,
    activeLink,
    cartItems
  };
}

export default withRedux(store, mapStateToProps)(Wishlist);
