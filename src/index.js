import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Needs to be require because we want ALL the reducers.
const reducers = require('./reducers');
import Login from './containers/login';
import App from './containers/app';
import Threads from './containers/threads';
import Contacts from './containers/contacts';
import Thread from './containers/thread';
import {watchLogin, watchCreateThread, watchWatchThreads, watchSetAuthFromCookies, watchCreateMessageInThread} from './sagas';
import { watchThreads, setAuthFromCookies } from './actions';

let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(
      createSagaMiddleware(watchLogin, watchCreateThread, watchWatchThreads, watchSetAuthFromCookies, watchCreateMessageInThread)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch(setAuthFromCookies());
store.dispatch(watchThreads());

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Threads}/>
        <Route path='/thread/:threadId' component={Thread}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
