import {keys} from 'lodash';

const thread = (state={}, action) => {
  switch(action.type){
    case 'SET_THREADS':
      return {
        messages: keys(state.messages).map((key) => {
          return {
            id: key,
            ...state.messages[key]
          };
        }),
        participants: keys(state.participants).map((key) => {
          return {
            id: key,
            ...state.participants[key]
          };
        })
      };
    default:
      return state;
  }
}

export default thread;