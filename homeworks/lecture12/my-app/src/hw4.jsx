import React from "react";
import "./hw4.css";

class HW4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  convertText = (text) => {
    let newText = text;
    if (text !== "" && !Number.isNaN(Number(text))) {
        if (Number(text) % 10 === 3) {
            newText += "rd";
        }
        else if (Number(text) % 10 === 2) {
            newText += "nd";
        }
        else if (Number(text) % 10 === 1) {
            newText += "st";
        }
        else {
            newText += "th";
        }
    }    
    this.setState({text: newText});
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.convertText(e.target.value)} />
        <input unselectable="True" value={this.state.text}/>
      </div>
    );
  }
}

export default HW4;
