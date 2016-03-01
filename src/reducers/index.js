const contactInput = (state='', action) => {
  console.log("boop3")
  switch (action.type) {
    case 'CONTACT_INPUT_CHANGE':
      return action.value;
    default:
      return state;
  }
};

export login from './login';
export contacts from './contacts';
export {contactInput};
