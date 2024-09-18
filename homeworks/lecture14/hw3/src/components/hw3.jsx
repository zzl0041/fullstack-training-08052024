import React from 'react';

// already write in function component in Lecture13 hw1
// this is writen in React class component
class Title extends React.Component {
  render() {
    return <h1 className='title'>Todos - ReactJs</h1>;
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleKeyDown = (event) => {
    const { setTodos } = this.props;
    if (event.key === 'Enter' && this.state.inputValue.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: this.state.inputValue, checked: false },
      ]);
      this.setState({
        inputValue: '',
      });
    }
  };

  render() {
    return (
      <input
        className='input-box'
        value={this.state.inputValue}
        onChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder='Type a todo and hit Enter'
      />
    );
  }
}

class RemainingTodos extends React.Component {
  render() {
    const { todos } = this.props;
    const remainingTodos = todos.filter((todo) => !todo.checked).length;
    return <p className='remaining-todos'>{remainingTodos}</p>;
  }
}

class ClearAllCompleteBtn extends React.Component {
  handleClearAllComplete = () => {
    const { setIsAllDoneChecked, setTodos } = this.props;
    setIsAllDoneChecked(false);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, checked: false }))
    );
  };

  render() {
    return (
      <button onClick={this.handleClearAllComplete}>
        Clear Completed Todos
      </button>
    );
  }
}

class MarkAllDoneBtn extends React.Component {
  handleMarkAllDone = (event) => {
    const allChecked = event.target.checked;
    const { setIsAllDoneChecked, setTodos } = this.props;
    setIsAllDoneChecked(allChecked);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, checked: allChecked }))
    );
  };

  render() {
    const { isAllDoneChecked } = this.props;
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={isAllDoneChecked}
            onChange={this.handleMarkAllDone}
          />
          Mark All Done
        </label>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    const { todo, onChange } = this.props;

    return (
      <li className='todo-item'>
        <input type='checkbox' checked={todo.checked} onChange={onChange} />
        {todo.text}
      </li>
    );
  }
}

class Todos extends React.Component {
  handleTodoCheckboxChange = (index) => {
    const { setTodos } = this.props;
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  render() {
    const { todos } = this.props;
    return (
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onChange={() => this.handleTodoCheckboxChange(index)}
          />
        ))}
      </ul>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isAllDoneChecked: false,
    };
  }

  setTodos = (newTodo) => {
    if (typeof newTodo === 'function') {
      this.setState((prevState) => ({ todos: newTodo(prevState.todos) }));
    } else {
      this.setState({ todos: newTodo });
    }
  };

  setIsAllDoneChecked = (checked) => {
    this.setState({ isAllDoneChecked: checked });
  };

  render() {
    return (
      <div className='container'>
        <form className='todoForm' onSubmit={(e) => e.preventDefault()}>
          <Title />
          <Input setTodos={(newTodo) => this.setTodos(newTodo)} />
          <div className='reaminingTodos-clearAllBtn'>
            <RemainingTodos todos={this.state.todos} />
            <ClearAllCompleteBtn
              setIsAllDoneChecked={(checked) =>
                this.setIsAllDoneChecked(checked)
              }
              setTodos={(newTodo) => this.setTodos(newTodo)}
            />
          </div>
          <MarkAllDoneBtn
            isAllDoneChecked={this.state.isAllDoneChecked}
            setIsAllDoneChecked={(checked) => this.setIsAllDoneChecked(checked)}
            setTodos={(newTodo) => this.setTodos(newTodo)}
          />
          <Todos
            todos={this.state.todos}
            setTodos={(newTodo) => this.setTodos(newTodo)}
          />
        </form>
      </div>
    );
  }
}

export default App;
