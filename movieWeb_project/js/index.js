window.onload = function () {
  const searchTextBox = document.querySelector("#search-movie");
  const searchBtn = document.querySelector("#search-btn");
  const API_URL = "https://api.themoviedb.org/3";

  function searchMovie(searchText) {
    const type = searchText
      ? `search/movie?query=${searchText}&&api_key=c0b396111ea91e3dd8adc069f9c9529b`
      : "discover/movie?api_key=c0b396111ea91e3dd8adc069f9c9529b";
    fetch(`${API_URL}/${type}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

  searchBtn.onclick = function () {
    alert("ok");
    const searchText = searchTextBox.value;
    searchMovie(searchText);
    window.location = "search.php?";
  };
};
