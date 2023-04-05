window.onload = function () {
  let toprated = document.getElementById("toprated");
  let trendingnow = document.getElementById("trendingnow");
  let comedymovie = document.getElementById("comedymovie");
  let horrormovie = document.getElementById("horrormovie");
  let romaticmovie = document.getElementById("romaticmovie");
  let documentries = document.getElementById("documentries");
  let netflixoriginal = document.getElementById("netflixoriginal");
  let actionmovie = document.getElementById("actionmovie");
  let searchBtn = document.getElementById("search-btn");
  let searchBox = document.getElementById("search-movie");

  searchBox.addEventListener("change", function () {
    const text = searchBox.value;
    searchBtn.href = `search.php?text=${text}`;
  });

  // Top Rated Section Starts

  fetch(
    "https://api.themoviedb.org/3/trending/all/week?limit=6&api_key=c0b396111ea91e3dd8adc069f9c9529b&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let div = document.createElement("div");
        div.className = "movie_container";

        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";
        img.height = "300";
        img.width = "300";
        div.append(img);

        let btn = document.createElement("button");
        let textNode = document.createTextNode("Add to watchlist");
        // <ion-icon name="cloud-download-outline"></ion-icon>
        // let textNode = document.createTextNode("Add to watchlist");
        btn.className = "";
        btn.appendChild(textNode);

        btn.addEventListener("click", () => {
          window.location = `addToWatch.php?movie_id=${results[i].id}`;
        });

        div.append(btn);

        trendingnow.append(div);
      }
    })
    .catch((err) => console.log(err));

  // Top Rated Section End

  // Trending Now Section Starts
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?limit=6&api_key=c0b396111ea91e3dd8adc069f9c9529b&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";
        img.addEventListener("click", () => {
          window.location(
            `http://localhost/movieweb/movie.php?${results[i].id}`
          );
        });
        let a = document.createElement("a");
        toprated.append(img);
      }
    })
    .catch((err) => console.log(err));
  // Trending Now Section End

  // Comedy Movie Section Starts
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b&with_genres=35"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";

        comedymovie.append(img);
      }
    })
    .catch((err) => console.log(err));
  // Comedy Movie Section End

  // Horror Movie Section Starts
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b&with_genres=27"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";

        horrormovie.append(img);
      }
    })
    .catch((err) => console.log(err));
  // Horror Movie Section End

  // Romantic Movie Section Starts
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b&with_genres=10749"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";

        romaticmovie.append(img);
      }
    })
    .catch((err) => console.log(err));
  // Horror Movie Section End

  // Documentries Section Starts
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b&with_genres=99"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";

        documentries.append(img);
      }
    })
    .catch((err) => console.log(err));
  // Documentries Section End

  // Netflix Original Section Starts
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b&with_genres=99"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";

        netflixoriginal.append(img);
      }
    })
    .catch((err) => console.log(err));
  // Netflix Original Section End

  //Action Movie Section Starts
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b&with_genres=28"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data?.results);

      let results = data?.results;

      for (let i = 0; i < results.length; i++) {
        let img = document.createElement("img");
        img.src =
          "https://image.tmdb.org/t/p/original/" + results[i].poster_path;
        img.className = "row__poster";

        actionmovie.append(img);
      }
    })
    .catch((err) => console.log(err));
  //Action Movie Section Ends
};
