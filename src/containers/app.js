import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Login from './login';

function App({ pushPath, children, authData }) {
  return <div>
    { !authData &&
      (
        <Login/>
      )
    }
    { children }

    This is my app
  </div>
};

const mapStateToProps = (state) => {
  return {
    authData: state.authData
  };
};

export default connect(
  mapStateToProps
)(App);
