import './Counter.css';

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (value) => {
    this.setState((prevState) => ({ count: prevState.count + value }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className='counter-container'>
        <div className='buttons-container'>
          <button onClick={() => this.increment(1)}>+1</button>
          <button onClick={() => this.increment(10)}>+10</button>
          <button onClick={() => this.increment(100)}>+100</button>
          <button onClick={() => this.increment(1000)}>+1000</button>
        </div>
        <label className='count-label'>{this.state.count}</label>
        <button onClick={this.reset} className='reset-button'>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
