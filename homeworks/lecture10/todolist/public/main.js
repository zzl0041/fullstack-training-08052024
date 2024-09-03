function handleCheck(elm) {
  const id = elm.dataset.id;
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

document.querySelector('#todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});
