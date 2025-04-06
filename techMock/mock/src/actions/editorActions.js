export const UPDATE_ITEM = 'UPDATE_ITEM';

export const updateItem = (id, updates) => ({
  type: UPDATE_ITEM,
  payload: { id, updates },
});