window.onload = () => {
  const path = window.location.pathname;
  const movie_id = path.split("/");
  console.log(movie_id);
  const movie_title = document.getElementById("title");

  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${movie_id}?api_key=<<api_key>>&language=en-US`
  //   );
};
