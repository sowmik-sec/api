function addPost(data) {
  const postContainer = document.getElementById("posts-container");
  for (const post of data) {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h4>userId - ${post.userId}</h4> <h4>id - ${post.id}</h4>  <h3>Title ${post.title}</h3>
     <p>${post.body}</p>
     `;
    postContainer.appendChild(postDiv);
  }
  console.log("hey there");
}

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => addPost(data));
}

loadPosts();
