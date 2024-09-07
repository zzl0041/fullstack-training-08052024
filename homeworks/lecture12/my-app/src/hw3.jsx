import React from "react";
import "./hw3.css";

class HW3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  clickCount = (n) => {
    this.setState((prevState) => ({ 
      count: prevState.count + n
    }));
  }

  clickReset = () => {
    this.setState({count: 0});
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickCount(1)}>+1</button>
        <button onClick={() => this.clickCount(10)}>+10</button>
        <button onClick={() => this.clickCount(100)}>+100</button>
        <button onClick={() => this.clickCount(1000)}>+1000</button>
        <button onClick={this.clickReset}>reset</button>
        <p>count: {this.state.count}</p>
      </div>
    );
  }
}

export default HW3;
