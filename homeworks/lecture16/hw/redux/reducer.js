import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  UNCHECK_ALL_TODOS,
} from './types';

const initialState = {
  todos: [
    { id: 1, text: 'watch react tutorial 1', isDone: false },
    { id: 2, text: 'watch react tutorial 2', isDone: false },
    { id: 3, text: 'watch react tutorial 3', isDone: false },
  ],
};

let nextId = 4;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.payload.text, isDone: false },
        ],
      };

    case TOGGLE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };

    case TOGGLE_ALL_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, isDone: true })),
      };

    case UNCHECK_ALL_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, isDone: false })),
      };

    default:
      return state;
  }
}
