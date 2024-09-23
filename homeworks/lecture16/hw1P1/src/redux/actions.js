import {
  ADD_TODO,
  TOGGLE_TODO,
  UNCHECK_ALL_TODOS,
  TOGGLE_ALL_TODOS,
} from './actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: { index },
});

export const uncheckAllTodos = () => ({
  type: UNCHECK_ALL_TODOS,
});

export const toggleAllTodos = (checked) => ({
  type: TOGGLE_ALL_TODOS,
  payload: { checked },
});
