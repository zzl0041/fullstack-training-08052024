function handleCheck(ele) {
  const id = ele.id;
  const checked = ele.checked;

  fetch(`/api/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ checked }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function handleSubmit() {
  const item = document.querySelector('#item').value;
  if (!item) return alert('Please enter a todo item');
  fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description: item }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
}

document.querySelector('#todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});
