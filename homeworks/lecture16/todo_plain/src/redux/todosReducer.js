const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const MARK_ALL_COMPLETE = 'MARK_ALL_COMPLETE'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
})

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: { index },
})

export const markAllComplete = () => ({
  type: MARK_ALL_COMPLETE,
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
})

const initialState = []

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload.text, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo, idx) =>
        idx === action.payload.index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case MARK_ALL_COMPLETE:
      return state.map((todo) => ({ ...todo, completed: true }))
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed)
    default:
      return state
  }
}
