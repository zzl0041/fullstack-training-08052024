![demo](https://flaviocopes.com/images/react-example-counter/output.gif)

Implement the counter shown above in React.

## Requirements

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleChange = (number) => {
    this.setState({ count: this.state.count + number });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleChange(1)}>add 1</button>
        <button onClick={() => this.handleChange(10)}>add 10</button>
        <button onClick={() => this.handleChange(100)}>add 100</button>
        <button onClick={() => this.handleChange(1000)}>add 1000</button>
      </div>
    );
  }
}

export default App;



- four buttons to increment 1, 10, 100, and 1,000, respectively
- one label to display the count
- (optional) one button to reset the count
- (optional) apply styles to make it look good