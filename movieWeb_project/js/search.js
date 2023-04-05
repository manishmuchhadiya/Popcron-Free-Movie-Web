window.onload = function () {
  const params = new URLSearchParams(window.location.search);

  if (!params.has("text")) {
    window.location = "http://localhost/movieweb/index.php";
  }

  const text = encodeURI(params.get("text"));

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=c0b396111ea91e3dd8adc069f9c9529b&language=en-US`
  )
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {});
};

//
// theMovieDb.common.client({
//     url: "discover/movie" + theMovieDb.common.generateQuery(options)
//   },
//   success,
//   error

/*
theMovieDb.common.client({
        url: "search/movie" + theMovieDb.common.generateQuery(options)
      },
      success,
      error
    );


*/
