// API point
const url = "https://www.swapi.tech/api/films/";

// querySelectors
const resultsContainer = document.querySelector(".results");

async function fetchApiRequest() {
  try {
    const response = await fetch(url);

    const all = await response.json();
    console.log(all);

    const films = all.result;
    console.log(films);

    resultsContainer.innerHTML = "";

    // for (let i = 0; i < films.length; i++) {
    //   resultsContainer.innerHTML += `<a href="details.html?id=${films[i].uid}
    //                                 <div class="result">
    //                                 <h2>${films[i].properties.title}</h2>
    //                                 <p>Episode: ${films[i].properties.episode_id}</p>
    //                                 <p>Release date: ${films[i].properties.release_date}</p>
    //                                 <p>Director: ${films[i].properties.director}</p>
    //                                 <p>Producer: ${films[i].properties.producer}</p>

    //                                 </div>
    //                                 </a>`;
    // }

    films.forEach(function (film) {
      resultsContainer.innerHTML += `<a href="details.html?uid=${film.uid}" class="card">
                                      <div class="result">
                                        <h2>${film.properties.title}</h2>
                                          <p>Episode: ${film.properties.episode_id}</p>
                                          <p>Release date: ${film.properties.release_date}</p>
                                          <p>Director: ${film.properties.director}</p>
                                          <p>Producer: ${film.properties.producer}</p>
                                      </div>
                                    </a>`;
    });
  } catch (error) {
    console.log(error);
    // resultsContainer.innerHTML = alert("error", error);
  }
}

fetchApiRequest();

// TODO: convert to map??
// https://www.youtube.com/watch?v=G6J2kl1aVao
