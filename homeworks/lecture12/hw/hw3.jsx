import React, { Component } from 'react';

export default class HW3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (val) => {
    this.setState({
      count: this.state.count + val,
    });
  };

  render() {
    return (
      <div className='hw3-container'>
        <div className='btns'>
          <button onClick={() => this.increment(1)}>+1</button>
          <button onClick={() => this.increment(10)}>+10</button>
          <button onClick={() => this.increment(100)}>+100</button>
          <button onClick={() => this.increment(1000)}>+1000</button>
        </div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
