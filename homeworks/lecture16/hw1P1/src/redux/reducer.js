import {
  ADD_TODO,
  TOGGLE_TODO,
  UNCHECK_ALL_TODOS,
  TOGGLE_ALL_TODOS,
} from './actionTypes';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload.text, checked: false }],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.index
            ? { ...todo, checked: !todo.checked }
            : todo
        ),
      };

    case UNCHECK_ALL_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, checked: false })),
      };

    case TOGGLE_ALL_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          checked: action.payload.checked,
        })),
      };

    default:
      return state;
  }
};

export default reducer;
