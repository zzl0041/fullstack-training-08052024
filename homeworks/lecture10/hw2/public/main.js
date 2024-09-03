function handleCheck(ele) {
  const id = ele.dataset.id;
  const checked = ele.checked;
  fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isComplete: checked }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(checked);
      console.log(id);
      console.log(data);
    });
}

function handleSubmit() {
  const todo = document.querySelector("#todo").value;
  if (!todo) return alert("Please enter a todo");
  fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todoItem: todo }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
}

document.querySelector("#todo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSubmit();
  }
});
