import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import Login from './containers/login'
import Rooms from './containers/rooms'

import { watchFetchRooms } from './sagas'

let store = createStore(
  reducers,
  applyMiddleware(createSagaMiddleware(watchFetchRooms))
)

render(
  <Provider store={store}>
    <div>
      <Login />
      <Rooms />
    </div>
  </Provider>,
  document.getElementById('root')
)
