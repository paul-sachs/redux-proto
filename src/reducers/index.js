import { combineReducers } from 'redux'
import login from './login';
import rooms from './rooms';

const app = combineReducers({
  login,
  rooms
})

export default app;
