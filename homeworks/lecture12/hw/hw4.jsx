import React, { Component } from 'react';
import './styles.css';

export default class HW4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      displayInput: '',
    };
  }

  convertion = (arg) => {
    const lastDigit = parseInt(arg) % (10 * arg.length);
    if (lastDigit === 1) {
      return arg + 'st';
    } else if (lastDigit === 2) {
      return arg + 'nd';
    } else if (lastDigit === 3) {
      return arg + 'rd';
    } else {
      return arg + 'th';
    }
  };

  handleChange = (e) => {
    const val = e.target.value;
    // console.log(`val: ${val}`);
    // console.log(`is NaN: ${!isNaN(parseInt(val))}`);
    this.setState({
      userInput: val,
    });
    let displayVal = val;
    if (!isNaN(parseInt(val))) {
      displayVal = this.convertion(val);
    }

    this.setState({
      displayInput: displayVal,
    });
  };

  render() {
    return (
      <div className='hw4-container'>
        <input
          className='user-input'
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <input
          className='input-display'
          type='text'
          value={this.state.displayInput}
        />
      </div>
    );
  }
}
