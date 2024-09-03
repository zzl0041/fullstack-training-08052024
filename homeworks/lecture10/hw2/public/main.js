function handleCheck(ele) {
  const id = ele.dataset.id;
  fetch(`/api/todos/${id}`, {
    method: 'PUT'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

function handleSubmit() {
  const todo = document.querySelector('#todo').value;
  if (!todo) return alert('Please enter a todo');
  fetch('/api/todos', {
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

function handleDelete(id) {
  if (confirm('Are you sure you want to delete this todo?')) {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 204) {
          const todoElement = document.getElementById(`todo-${id}`);
          if (todoElement) {
            todoElement.remove();
          }
        } else {
          return res.json();
        }
      })
      .catch(error => console.error('Error:', error));
  }
}


document.querySelector('#todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});
