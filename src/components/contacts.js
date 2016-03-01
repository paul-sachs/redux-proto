import React, { Component } from 'react';
import Contact from './contact';

export default class Contacts extends Component {
  static props = {
    componentDidMount: React.PropTypes.func.isRequired,
    contacts:          React.PropTypes.array,
    onChange:          React.PropTypes.func.isRequired,
    onClick:           React.PropTypes.func,
    inputValue:        React.PropTypes.string
  }

  static defaultProps = {
    contacts: [],
    onClick:  () => {},
    inputValue: ''
  }

  componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const {onChange, inputValue, onClick} = this.props;
    return <div>
      {this.props.contacts.map((contact, index)=>{
        return <Contact key={index} contact={contact}/>
      })}
      <input type='text' onChange={onChange} value={inputValue} placeholder='enter contact email'/>
      <button onClick={onClick.bind(null, inputValue)}>Add</button>
    </div>
  }
}
