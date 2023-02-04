function photoGenerator(photos) {
  const photoSection = document.getElementById("photo-add");
  for (const photo of photos) {
    const photoDiv = document.createElement("div");
    photoDiv.innerHTML = `<img src='${photo.url}'>`;
    photoSection.appendChild(photoDiv);
  }
}

function photoAPI() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => photoGenerator(data));
}

photoAPI();

console.log("fuck");
