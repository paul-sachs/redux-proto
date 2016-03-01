import React, { Component } from 'react';

const Login = ({onClick}) => (
  <div>
    <button onClick={onClick}>Login</button>
  </div>
)

Login.propTypes = {
  onClick: React.PropTypes.func.isRequired
}


export default Login
