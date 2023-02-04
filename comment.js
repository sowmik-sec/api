function commentGenerator(comments) {
  const addComment = document.getElementById("add-comment");
  for (const comment of comments) {
    const commentDiv = document.createElement("div");
    commentDiv.innerHTML = `PostId: <h3>${comment.postId}</h3>
        <h3>id: ${comment.id}</h3>
        <h2>name: ${comment.name}</h2>
        <p>email: ${comment.email}</p>
        <p>Comment: ${comment.body}</p>
        `;
    addComment.appendChild(commentDiv);
  }
}

function commentAPI() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => commentGenerator(data));
}

commentAPI();
