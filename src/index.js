import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

// Needs to be require because we want ALL the reducers.
const reducers = require('./reducers');
debugger;
import App from './containers/app'
import Login from './containers/login'
import Contacts from './containers/contacts'
import {watchLogin} from './sagas'
import {setAuthFromCookies} from './actions'

let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(
      createSagaMiddleware(watchLogin),
      routerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch(setAuthFromCookies());

// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Contacts}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
