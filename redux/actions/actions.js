import {
  ADD_TO_CART,
  UPDATE_LOADING,
  UPDATE_ACTIVE_LINK,
} from './';

export function addToCart(totalItems) {
  const cartItems = totalItems + 1;
  return {
    type: ADD_TO_CART,
    cartItems,
  };
}

export function updateLoading(showLoading) {
  return {
    type: UPDATE_LOADING,
    loading: showLoading,
  };
}

export function updateActiveLink() {
  return {
    type: UPDATE_ACTIVE_LINK,
  };
}
