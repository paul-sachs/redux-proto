import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Needs to be require because we want ALL the reducers.
import reducers from './reducers';

import App from './containers/app'
import Login from './containers/login'
import Contacts from './containers/contacts'
import {watchLogin} from './sagas'
import {setAuthFromCookies} from './actions'

console.log(reducers);
debugger;
let store = createStore(
  reducers,
  compose(
    applyMiddleware(
      createSagaMiddleware(watchLogin)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

//store.dispatch(setAuthFromCookies());

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Contacts}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
