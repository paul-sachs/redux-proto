import { takeLatest, takeEvery } from 'redux-saga';
import { put, call, take, fork, select } from 'redux-saga/effects';

import * as api from '../api';

import { login, loginFailed, setLogin, getCurrentLogin, createThread, createThreadSucceeded, createThreadFailed,
         watchThreads, watchContacts, setThreads, setAuthFromCookies, createMessageInThread,
         createMessageInThreadSucceeded, createMessageInThreadFailed } from '../actions';


function* attemptLogin() {
  try {
    const authData = yield api.authWithGoogle();
    yield put(setLogin(authData));

  } catch (error) {
    yield put(loginFailed(error));
  }
}

// Our watcher Saga: spawn a new attemptLogin task on the latest LOGIN
export function* watchLogin() {
  yield* takeLatest(login().type, attemptLogin);
}

function* attemptSetAuthFromCookies() {
  try {
    const authData = yield api.getAuth();
    yield put(setLogin(authData));

  } catch (error) {
    yield put(loginFailed(error));
  }
}


export function* watchSetAuthFromCookies() {
  yield* takeLatest(setAuthFromCookies().type, attemptSetAuthFromCookies)
}

function* attemptingCreateThread(action) {
  try {
    const state = yield select();
    yield api.createThread(state.login.authData.uid);
    yield put(createThreadSucceeded());
  } catch (error) {
    console.error(error);
    yield put(createThreadFailed(error));
  }
}

export function* watchCreateThread() {
  yield* takeEvery(createThread().type, attemptingCreateThread);
}

function* attemptingCreateMessageInThread(action) {
  try {
    const state = yield select();
    yield api.createMessageInThread(action.message, action.threadId, state.login.authData.uid);
    yield put(createMessageInThreadSucceeded());
  } catch (error) {
    console.error(error);
    yield put(createMessageInThreadFailed(error));
  }
}

export function* watchCreateMessageInThread() {
  yield* takeEvery(createMessageInThread().type, attemptingCreateMessageInThread);
}

// This one is a little different because it sets up a continual watch for events
// from firebase.

export function* watchWatchThreads() {
  yield take(watchThreads().type);
  const msgSource = yield call(api.watchThreads);
  yield fork(watchMessages, msgSource, (data) => {
    return setThreads(data);
  });
}

// This is a generic function that can be used to watch any message source.
// msgSource: Where the messages come from.
// action: A method to call that will return an action to execute
function* watchMessages(msgSource, action) {
  let msg = yield call(msgSource.nextMessage)
  while(msg) {
    yield put(action(msg))
    msg = yield call(msgSource.nextMessage)
  } 
}

