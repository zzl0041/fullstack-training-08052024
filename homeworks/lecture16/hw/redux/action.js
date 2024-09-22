import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  UNCHECK_ALL_TODOS,
} from './types';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const toggleAllTodos = () => ({
  type: TOGGLE_ALL_TODOS,
});

export const uncheckAllTodos = () => ({
  type: UNCHECK_ALL_TODOS,
});
