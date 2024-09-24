async function handleDelete(ele) {
  const id = ele.dataset.id;
  const res = await fetch(`/api/todos/${id}`, {
    method: 'DELETE'
  })
  if (res.ok) {
      // Remove the todo item from the DOM
      const todoItem = ele.closest('.todo-item');
      if (todoItem) {
         todoItem.remove();
      }
  } else {
      console.error('Failed to delete todo');
  }
}

async function handleCheck(ele) {
  const id = ele.dataset.id;
  await fetch(`/api/todos/${id}`, {
    method: 'PUT'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

async function handleSubmit() {
  const todo = document.querySelector('#todo').value;
  if (!todo) return alert('Please enter a todo');
  await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.reload();
    });
}

document.querySelector('#todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});
