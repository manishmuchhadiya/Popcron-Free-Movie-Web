const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const el = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("h2");
        const dis = document.createElement("p");
        const ratting = document.createElement("h3");

        text.innerHTML = `${element.title}`;
        dis.innerHTML = `${element.overview}`;
        ratting.innerHTML = `${element.vote_average}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        el.appendChild(ratting);
        el.appendChild(dis);
        main.appendChild(el);
      });
    });
}
// function img() {
//   if (img.hover) {
//     // email.style.border = "1px solid silver";
//     p.style.display = "block";
//     return false;
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;

  if (searchTerm) {
    showMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});
