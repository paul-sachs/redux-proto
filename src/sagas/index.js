import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { authWithGoogle } from '../api';
import { login, loginFailed, loginSucceeded } from '../actions';

// an utility function: return a Promise that will resolve after 1 second
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Our worker Saga: will perform the async increment task
function* attemptLogin(args) {
  try {
    const authData = yield authWithGoogle();
    //const data = yield call(Api.fetchUser, action.payload.url);
    yield put(loginSucceeded(authData));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

// Our watcher Saga: spawn a new attemptLogin task on the latest LOGIN
export function* watchLogin() {
  yield* takeLatest(login().type, attemptLogin);
}
