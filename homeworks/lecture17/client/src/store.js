import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";

const API_URL = "/api/todos";

// Helper function to fetch todos
const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  if (!response.ok) throw new Error("Failed to fetch todos");
  return data; // returns the list of todos
};

export const getTodos = createAsyncThunk("todos/getTodos", fetchTodos);

export const createTodo = createAsyncThunk("todos/createTodo", async (todo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error(await response.json());
  // get updated todos
  return await fetchTodos();
});

export const markAllDone = createAsyncThunk("todos/markAllDone", async () => {
  const todos = await fetchTodos();
  console.log(todos);
  const promises = todos.map((todo) =>
    fetch(`${API_URL}/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: true }),
    })
  );
  await Promise.all(promises);
  // get updated todos
  return await fetchTodos();
});

export const clearDoneTodos = createAsyncThunk(
  "todos/clearDoneTodos",
  async () => {
    const todos = await fetchTodos();
    const promises = todos.filter((todo) => todo.done).map(
      (todo) =>
        fetch(`${API_URL}/${todo._id}`, {
          method: "DELETE",
        })
    );
    await Promise.all(promises);
    // get updated todos
    return await fetchTodos();
  }
);

export const checkTodo = createAsyncThunk("todos/checkTodo", async (todo) => {
  const response = await fetch(`${API_URL}/${todo._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ done: !todo.done }),
  });
  if (!response.ok) throw new Error(await response.json());
  // get updated todos
  return await fetchTodos();
});

// Helper function to handle status
const handlePending = (state) => {
  state.status = "loading";
};

const handleFulfilled = (state, action) => {
  state.status = "succeeded";
  state.todos = action.payload;
};

const handleRejected = (state, action) => {
  state.status = "failed";
  state.error = action.error.message;
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: "succeeded",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, handlePending)
      .addCase(getTodos.fulfilled, handleFulfilled)
      .addCase(getTodos.rejected, handleRejected)
      .addCase(createTodo.pending, handlePending)
      .addCase(createTodo.fulfilled, handleFulfilled)
      .addCase(createTodo.rejected, handleRejected)
      .addCase(markAllDone.pending, handlePending)
      .addCase(markAllDone.fulfilled, handleFulfilled)
      .addCase(markAllDone.rejected, handleRejected)
      .addCase(clearDoneTodos.pending, handlePending)
      .addCase(clearDoneTodos.fulfilled, handleFulfilled)
      .addCase(clearDoneTodos.rejected, handleRejected)
      .addCase(checkTodo.pending, handlePending)
      .addCase(checkTodo.fulfilled, handleFulfilled)
      .addCase(checkTodo.rejected, handleRejected);
  },
});

// Create the store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
