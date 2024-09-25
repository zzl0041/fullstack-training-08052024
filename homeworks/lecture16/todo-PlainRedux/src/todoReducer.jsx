const initialState = {
    todos: [],
    markAll: false
  };
  
  function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { text: action.payload, completed: false }]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
        case 'CLEAR_COMPLETED':
          return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed),
            markAll: false,
          };
      case 'MARK_ALL':
        return {
          ...state,
          markAll: !state.markAll,
          todos: state.todos.map(todo => ({ ...todo, completed: !state.markAll }))
        };
      default:
        return state;
    }
  }
  
  export default todoReducer;
