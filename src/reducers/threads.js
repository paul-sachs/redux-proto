import thread from './thread';
import {keys} from 'lodash';

const threads = (state=[], action) => {
  switch (action.type) {
    case 'SET_THREADS':
      return keys(action.threads).map((key) => {
        return {
          id: key,
          ...thread(action.threads[key],action)
        };
      });
      return values(action.threads);
    default:
      return state
  }
}

export default threads;
