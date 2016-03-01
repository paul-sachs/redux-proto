import { connect } from 'react-redux';
import Login from '../components/login';
import { login } from '../actions';
import { browserHistory } from 'react-router'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(login());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
