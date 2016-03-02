import { combineReducers } from 'redux'
import login from './login';
import contacts from './contacts';
const contactInput = (state='', action) => {
  switch (action.type) {
    case 'CONTACT_INPUT_CHANGE':
      return action.value;
    default:
      return state;
  }
};

export default combineReducers( {
  login: login,
  contacts: contacts,
  contactInput: contactInput
});
