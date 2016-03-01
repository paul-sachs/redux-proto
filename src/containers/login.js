import { connect } from 'react-redux';
import Login from '../components/login';
import { login } from '../actions';

import { authWithGoogle } from '../api';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(login());
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
