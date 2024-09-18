import React, { Component } from 'react';
import './styles-hw3.css';

let initialTodos = [
  {
    text: 'watch react tutorial',
    isDone: false,
  },
  {
    text: 'watch react tutorial1',
    isDone: false,
  },
  {
    text: 'watch react tutorial2',
    isDone: false,
  },
];

class Title extends Component {
  render() {
    return <h1 className='hw3-title'>Todos - ReactJs</h1>;
  }
}

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  render() {
    const { handleKeyDown } = this.props;
    return (
      <input
        className='todo-input'
        placeholder='Type a todo and hit Enter'
        value={this.state.input}
        onChange={(e) => this.setState({ input: e.target.value.trim() })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (this.state.input !== '') {
              handleKeyDown(this.state.input);
              this.setState({ input: '' });
            }
          }
        }}
      />
    );
  }
}

class Remaining extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count } = this.props;
    return <div> {count} remaining</div>;
  }
}

class Btn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { btnLable, handleChange } = this.props;
    return <button onClick={handleChange}>{btnLable}</button>;
  }
}

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { areAllChecked, CheckboxLable, handleChange } = this.props;
    return (
      <>
        <input
          type='checkbox'
          checked={areAllChecked}
          onChange={handleChange}
        />
        <label htmlFor=''>{CheckboxLable}</label>
      </>
    );
  }
}

class Todo extends Component {
  render() {
    const { todo, idx, handleChange } = this.props;
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={todo.isDone}
          onChange={() => handleChange(idx)}
        />
        <label htmlFor=''>{todo.text}</label>
      </div>
    );
  }
}

class Todos extends Component {
  render() {
    const { todos, handleChange } = this.props;
    return (
      <div className='todos-list'>
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            todo={todo}
            idx={idx}
            handleChange={handleChange}
          />
        ))}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: initialTodos };
  }

  handleAddTodo = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: newTodo, isDone: false }],
    }));
  };

  handleCheckBox = (idx) => {
    const newTodos = this.state.todos;
    newTodos[idx].isDone = !newTodos[idx].isDone;
    this.setState(newTodos);
  };

  handleClearCompletedTodos = () => {
    const tempTodos = this.state.todos.map((todo) => (todo.isDone = false));
    this.setState(tempTodos);
    // this.setState({ todos: tempTodos });
  };

  handleMarkAllDone = () => {
    const tempTodos = this.state.todos.map((todo) => (todo.isDone = true));
    this.setState(tempTodos);
  };

  render() {
    return (
      <div>
        <Title />
        <TodoInput handleKeyDown={this.handleAddTodo} />
        <div className='remaining-and-clear-all-completed-todos'>
          <Remaining
            count={this.state.todos.filter((todo) => !todo.isDone).length}
          />
          <Btn
            btnLable={'Clear Completed Todos'}
            handleChange={this.handleClearCompletedTodos}
          />
        </div>
        <Checkbox
          CheckboxLable={'Mark All Done'}
          areAllChecked={this.state.todos.every((todo) => todo.isDone === true)}
          handleChange={this.handleMarkAllDone}
        />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckBox}
        />
      </div>
    );
  }
}

export default App;
