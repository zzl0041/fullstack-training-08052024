import react from "react";

class App extends react.Component {
  state = {
    data: [],
    value: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim()) {
      this.setState((prevState) => ({
        data: [
          ...prevState.data,
          { content: prevState.value, completed: false },
        ],
        value: "",
      }));
    }
  };

  handleComplete = (value) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item) => ({ ...item, completed: value })),
    }));
  };

  handleToggle = (i) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item, index) =>
        i === index ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  render() {
    const count = this.state.data.filter(
      (item) => item.completed != true
    ).length;
    return (
      <div>
        <h2>todos - ReactJS</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button type="submit">submit</button>
          <p> {count} remaining </p>
          <button onClick={() => this.handleComplete(false)}>
            clear all completed tasks
          </button>
        </form>
        <button onClick={() => this.handleComplete(true)}>mark all done</button>
        <ul>
          {this.state.data.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onClick={() => this.handleToggle(index)}
              />
              <span> {item.content} </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
