import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { fetchRooms, fetchRoomsFailed, fetchRoomsSucceeded } from '../actions';

// an utility function: return a Promise that will resolve after 1 second
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Our worker Saga: will perform the async increment task
function* waitAndFillRooms(args) {
  try {
    yield delay(1000);
    const fakeRooms = [
      {name: 'Room1', id: '1', users:{}},
      {name: 'Room2', id: '2', users:{}},
      {name: 'Room3', id: '3', users:{}}
    ];
    //const data = yield call(Api.fetchUser, action.payload.url);
     yield put(fetchRoomsSucceeded(fakeRooms));
  } catch (error) {
     yield put(fetchRoomsFailed(error));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchFetchRooms() {
  yield* takeLatest(fetchRooms().type, waitAndFillRooms);
}
