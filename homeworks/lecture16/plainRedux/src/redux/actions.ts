export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: text,
});

export const toggleTodo = (index: number) => ({
  type: 'TOGGLE_TODO',
  payload: index,
});

export const markAllCompleted = (completed: boolean) => ({
  type: 'MARK_ALL_COMPLETED',
  payload: completed,
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED',
});
