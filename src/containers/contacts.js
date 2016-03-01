import { connect } from 'react-redux';
import Contacts from '../components/contacts';
import { listenToContactChanges, addContact, contactInputChange } from '../actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    contacts: state.constacts,
    inputValue: state.contactInput
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(listenToContactChanges());
    },
    onClick: (value) => {
      dispatch(addContact(value));
    },
    onChange: (event) => {
      console.log("boop"+event.target.value);
      dispatch(contactInputChange(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
