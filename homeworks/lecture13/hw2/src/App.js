import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    count: "",
  };

  handleClick = (value) => {
    this.setState({ count: this.state.count + value.toString() });
  };

  render() {
    const numbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
      <div>
        <h2>{this.state.count == "" ? "status bar" : this.state.count}</h2>
        <ul className="grid-list">
          {numbers.map((item) => (
            <li key={item}>
              <button onClick={() => this.handleClick(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;