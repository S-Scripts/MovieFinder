/* OMDB = > open movie database */

const api = "https://www.omdbapi.com/?apikey=61e576a4&t=";
let notFound = document.getElementById("notFound");
let found = document.getElementById('found');

let title = document.getElementById("title");
let rated = document.getElementById("rated");
let desc = document.getElementById("desc");
let date = document.getElementById("date");
let time = document.getElementById("time");
let genre = document.getElementById("genre");
let director = document.getElementById("director");
let writer = document.getElementById("writer");
let actors = document.getElementById("actors");
let language = document.getElementById("language");
let awards = document.getElementById("awards");
let poster = document.getElementById("poster");

function searchMovie() {
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;

  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Error) {
        notFound.classList.remove("d-none");
        found.classList.add('d-none');
        document.getElementById("name").innerText = movieName.value;
      } 
      
      else {
        notFound.classList.add("d-none");
        found.classList.remove('d-none');
        console.log("found");

        title.innerText = data.Title;
        rated.innerText = data.Rated;
        desc.innerText = data.Plot;
        date.innerText = data.Released;
        time.innerText = data.Runtime;
        genre.innerText = data.Genre;
        director.innerText = data.Director;
        writer.innerText = data.Writer;
        actors.innerText = data.Actors;
        language.innerText = data.Language;
        awards.innerText = data.Awards;
        poster.src = data.Poster;

        // display the ratings
        let ratings = document.createElement("p");
        ratings.innerText = `IMDb: ${data.imdbRating} (${data.imdbVotes} votes)`;
        document.querySelector(".movieContainer > div").appendChild(ratings);
      }
    });
}
1