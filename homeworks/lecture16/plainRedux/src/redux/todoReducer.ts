interface Todo {
  text: string;
  completed: boolean;
}

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  payload: number;
}

interface MarkAllCompletedAction {
  type: 'MARK_ALL_COMPLETED';
  payload: boolean;
}

interface ClearCompletedAction {
  type: 'CLEAR_COMPLETED';
}

type ActionType =
  | AddTodoAction
  | ToggleTodoAction
  | MarkAllCompletedAction
  | ClearCompletedAction;

const initialState: Todo[] = [];

const todoReducer = (state = initialState, action: ActionType): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'MARK_ALL_COMPLETED':
      return state.map((todo) => ({ ...todo, completed: action.payload }));
    case 'CLEAR_COMPLETED':
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;
