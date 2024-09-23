// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos, deleteTodo } from "../actions/todoActions";

// const TodoList = () => {
//   const dispatch = useDispatch();
//   const { todos, loading, error } = useSelector((state) => state.todos);

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo._id}>
//               {todo.title}
//               <button onClick={() => handleDelete(todo._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!Array.isArray(todos)) {
    return <p>No todos available</p>; // Handle if todos is not an array
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
