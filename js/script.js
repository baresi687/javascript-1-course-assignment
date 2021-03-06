const resultContainer = document.querySelector(".results");
const url = "https://imdb-api.com/en/API/Top250Movies/k_gcm4qbt6";

async function getMovies() {
  try {
    const response = await fetch(url);
    const resultJSON = await response.json();
    const results = resultJSON.items;

    for (let i = 0; i <= 20; i++) {
      resultContainer.innerHTML += `<a class="movie-cards" href="./details.html?id=${results[i].id}">
                                      <div class="movies">
                                        <h3>${results[i].title}</h3>
                                        <p><span class="description">Released: </span>${results[i].year}</p>
                                        <p><span class="description">Rating: </span>${results[i].imDbRating}</p>
                                      </div>
                                    </a>`
    }
  } catch (error) {
    resultContainer.innerHTML += displayError("error", error);
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getMovies();
