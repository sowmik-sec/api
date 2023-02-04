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

function deleteAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function PatchAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
