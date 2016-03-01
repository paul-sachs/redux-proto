import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Login from './login'

function App({ pushPath, children }) {
  return (
    <div>

      <Login/>

      { children }

      This is my app
    </div>

  );
};

module.exports = connect(
  null
)(App)
