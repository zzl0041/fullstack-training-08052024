# Todo List

Requirements:

- [ ] Add a new todo
- [ ] Mark a todo as completed / uncompleted
- [ ] Mark all todos as completed
- [ ] Clear all completed todos
- [ ] Display the number of active todos

![Todo List](./todo-list.gif)

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",  
      data: [],   
      count: 0    
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { value, data } = this.state;
    const newArray = [...data, { content: value, completed: false }];
    this.setState({
      data: newArray,
      value: '',
      count: newArray.filter(item => !item.completed).length
    });
  };

  handleToggle = (index) => {
    const newArray = [...this.state.data];
    newArray[index].completed = !newArray[index].completed;
    this.setState({
      data: newArray,
      count: newArray.filter(item => !item.completed).length
    });
  };

  handleButton = (value) => {
    const newArray = this.state.data.map(item => ({ ...item, completed: value }));
    this.setState({
      data: newArray,
      count: value ? 0 : newArray.length
    });
  };


  render() {
    const { value, data, count } = this.state;

    return (
      <div>
        <h1>Todos - ReactJS (Class Component)</h1>
        <form>
          <input onChange={this.handleChange} value={value} />
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </form>
        <div>{count} remaining</div>
        <button onClick={() => this.handleButton(false)}>Clear Completed Todos</button>
        <button onClick={() => this.handleButton(true)}>Mark All Done</button>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => this.handleToggle(index)}
              />
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
