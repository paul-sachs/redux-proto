import React, { Component } from 'react';

const Login = ({currentUserId, inputValue, onInputChange, onClick}) => (
  <div>
    <h1>Hello, world.</h1>
    <p>{currentUserId}</p>
    <input type='text' value={inputValue} onChange={onInputChange} placeholder='user'/>
    <button onClick={onClick.bind(this, inputValue)}>Login</button>
  </div>
)

Login.propTypes = {
  currentUserId: React.PropTypes.string,
  inputValue: React.PropTypes.string,
  onInputChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
}


export default Login
