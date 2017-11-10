import withRedux from 'next-redux-wrapper';
import store from '../redux/store';

const mapStateToProps = (state) => {
  const { showLoading, activeLink, cartItems }  = state;
  return {
    showLoading,
    activeLink,
    cartItems,
  };
}

export default (Component) => withRedux(store, mapStateToProps)(Component);
