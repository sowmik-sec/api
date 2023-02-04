function userList() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => listName(data));
}

function listName(data) {
  const list = document.getElementById("users-list");
  for (const item of data) {
    const li = document.createElement("li");
    li.innerText = item.name;
    list.appendChild(li);
  }
}
