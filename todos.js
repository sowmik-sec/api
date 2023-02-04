function displayTodos(todos) {
  const todoList = document.getElementById("todo-container");
  for (const todo of todos) {
    console.log(todo);
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `<h4>completed: ${
      todo.completed === true ? "completed" : "not completed"
    }</h4> 
     <h4>id: ${todo.id}</h4>
     <h3>Title: ${todo.title}</h3>
     <h4>userId: ${todo.userId}</h4>
     `;
    todoList.appendChild(todoDiv);
  }
}

function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

loadTodos();
