/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Nicholas Skelton
  Date: 12.8.25
  Filename: script.js
*/

"use strict";

const movies = [
  { title: "The Life Aquatic with Steve Zissou", director: "Wes Anderson", release: "2004", synopsis: "Renowned video oceanographer Steve Zissou documents his revenge on the shark that killed his partner.", poster: "the-life-aquatic.jpg" },
  { title: "Jurassic Park", director: "Steven Spielberg", release: "1993", synopsis: "A theme park of genetically engineered dinosaurs devolves into chaos as the park's visitors struggle to survive.", poster: "jurassic-park.jpg" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", release: "2001", synopsis: "After acquiring a magical ring from his uncle, young hobbit Frodo Baggins and his companions must set off on a journey to destroy it, lest evil forces conquer Middle-earth", poster: "fellowship.jpg" },
  { title: "Pineapple Express", director: "David Gordon Green", release: "2008", synopsis: "Process server Dale Denton and his easy-going dealer Saul must flee hitmen and a corrupt police officer after witnessing them commit a murder", poster: "pineapple-express.jpg" }
];

function fetchMovie(title) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movie = movies.find(m =>
        m.title.toLowerCase() === title.toLowerCase() // Convert titles to all lowercase
      );
    resolve(movie);
  }, 2000);
  })

}

document.getElementById("movie-form").addEventListener("submit", async function displayMovie(event) {

    event.preventDefault();
    const title = document.getElementById("title-input").value;
    try {
      const movie = await fetchMovie(title);
      document.getElementById("movie-title").innerHTML = movie.title;
      document.getElementById("movie-director").innerHTML = movie.director;
      document.getElementById("movie-year").innerHTML = movie.release;
      document.getElementById("movie-synopsis").innerHTML = movie.synopsis;
      document.getElementById("movie-image").src = movie.poster;

      document.getElementById("error-message").innerHTML = "";   // Clear old error messages (if any)

      document.getElementById("title-input").value = "";      // Clear search box

    } catch (error) {
      document.getElementById("movie-title").innerHTML = "";     // Clears movie on error
      document.getElementById("movie-director").innerHTML = "";
      document.getElementById("movie-year").innerHTML = "";
      document.getElementById("movie-synopsis").innerHTML = "";
      document.getElementById("movie-image").src = "";

      document.getElementById("error-message").innerHTML = `I have an entire database of 4 whole movies, and that ain't one of them.`;
    }
});