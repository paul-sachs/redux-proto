export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const loginFailed = (reason) => {
  return {
    type: 'LOGIN_FAILED',
    reason: reason
  }
};


export const setLogin = (authData) =>{
  return {
    type: 'SET_LOGIN',
    authData: authData
  };
};

export const replaceContacts = (contacts) => {
  return {
    type: 'REPLACE_CONTACTS',
    value: contacts
  };
};

export const contactInputChange = (value) => {
  return {
    type: 'CONTACT_INPUT_CHANGE',
    value: value
  };
};


export const listenToContactChanges = () => {
  return {
    type: 'LISTEN_TO_CONTACT_CHANGES'
  };
};


export const addContact = (name) => {
  API.addContact(name);
  return {
    type: 'ADD_CONTACT',
    name: name
  };
};

export const setAuthFromCookies = () =>{
  return {
    type: 'SET_AUTH_FROM_COOKIES'
  };
};

export const createThread = (username) => {
  return {
    type: 'CREATE_THREAD'
  };
};

export const createThreadSucceeded = () => {
  return {
    type: 'CREATE_THREAD_SUCCEEDED'
  };
};

export const createThreadFailed = () => {
  return {
    type: 'CREATE_THREAD_FAILED'
  };
};


export const setThreads = (threads) => {
  return {
    type: 'SET_THREADS',
    threads: threads
  };
};

export const watchThreads = () => {
  return {
    type: 'WATCH_THREADS'
  };
};

export const createMessageInThread = (message, threadId) => {
  return {
    type: 'CREATE_MESSAGE_IN_THREAD',
    message: message,
    threadId: threadId
  }
};

export const createMessageInThreadSucceeded = () => {
  return {
    type: 'CREATE_MESSAGE_IN_THREAD_SUCCEEDED'
  }
};

export const createMessageInThreadFailed = () => {
  return {
    type: 'CREATE_MESSAGE_IN_THREAD_FAILED'
  }
};

export const messageInputChange = (value) => {
  return {
    type: 'MESSAGE_INPUT_CHANGE',
    value: value
  };
};