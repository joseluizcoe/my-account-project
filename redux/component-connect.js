import { connect } from 'react-redux';
import  mapStateToProps from './map-state-props';

export default (Component) => connect(mapStateToProps)(Component);
