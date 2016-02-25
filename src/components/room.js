import React, { Component } from 'react';

export default class Room extends Component {
  props = {
    id: React.PropTypes.string,
    name: React.PropTypes.string
  }
  render() {
    const {name} = this.props;
    return (
      <p>Room: {name}</p>
    );
  }
}
