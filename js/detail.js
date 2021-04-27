const detailContainer = document.querySelector(".sw-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const uid = params.get("uid");

// console.log(uid);

const url = "https://www.swapi.tech/api/films/" + uid;

// console.log(url);

async function fetchFilm() {
  try {
    const response = await fetch(url);

    const details = await response.json();
    console.log(details);

    const film = details.result;
    console.log(film);
    document.title = film.properties.title;
    createHtml(film);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchFilm();

function createHtml(film) {
  detailContainer.innerHTML = ` <h2>${film.properties.title}</h2>
                                <a href="${film.properties.url}"> Link to movie</a></p>
                                <h4>Opening crawl:</h4>
                                <p>${film.properties.opening_crawl}</p>
                                `;
}
