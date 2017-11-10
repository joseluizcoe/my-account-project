import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import  mapStateToProps from './map-state-props';

export default (Component) => withRedux(store, mapStateToProps)(Component);
