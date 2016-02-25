import { connect } from 'react-redux';
import Login from '../components/login';
import { changeUserInput, changeCurrentUser } from '../actions';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.login.currentUserId,
    inputValue: state.login.loginInput
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInputChange: (event) => {
      dispatch(changeUserInput(event.target.value))
    },
    onClick: (inputValue) => {
      dispatch(changeCurrentUser(inputValue))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default App;
