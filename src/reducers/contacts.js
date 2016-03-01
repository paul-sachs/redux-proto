const contacts = (state=[], action) => {
  switch (action.type) {
    case 'REPLACE_CONTACTS':
      return action.value;
    default:
      return state;
  }
};

export default contacts;
