import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { authWithGoogle, watchContacts, get} from '../api';
import { login, loginFailed, setLogin, getCurrentLogin } from '../actions';


function* attemptLogin() {
  try {
    const authData = yield authWithGoogle();
    console.log("Got authData"+authData);
    yield put(setLogin(authData));
    console.log("After...");
  } catch (error) {
    yield put(loginFailed(error));
  }
}

// Our watcher Saga: spawn a new attemptLogin task on the latest LOGIN
export function* watchLogin() {
  yield* takeLatest(login().type, attemptLogin);
}
