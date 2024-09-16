![demo](./hw4.gif)

Implement the converter shown above in React.
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "100",
    };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <input onChange={(e) => this.handleChange(e)} />
        <input value={this.state.value + "th"} />
      </div>
    );
  }
}

export default App;
