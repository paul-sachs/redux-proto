import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chatApp from './reducers'
import Login from './containers/login'

let store = createStore(chatApp)

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
)
