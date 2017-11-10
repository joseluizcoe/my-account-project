import {
  ADD_TO_CART,
  UPDATE_LOADING,
  UPDATE_ACTIVE_LINK } from '../actions';
import initialStates from '../states';

export default function (state = initialStates, action) {
  const { type,
    cartItems,
    activeLink,
    loading } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: cartItems+1,
      };

    case UPDATE_LOADING:
      return {
        ...state,
        loading,
      };

    case UPDATE_ACTIVE_LINK:
      return {
        ...state,
        activeLink,
      };
    default:
      return state;
  }
}
