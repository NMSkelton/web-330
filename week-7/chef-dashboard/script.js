/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Nicholas Skelton
  Date: 12.5.25
  Filename: chefs.js
*/

"use strict";

let chefs = [
  { name: "Gus \"The Bus\" Johnson", specialty: "desserts", weakness: "salads", restaurantLocation: "New York City" },
  { name: "John \"This Guy Surely Won't Make It\" Doe", specialty: "proteins", weakness: "appetizers", restaurantLocation: "Miami" },
  { name: "Betty \"Not Crocker\" White", specialty: "cocktails", weakness: "fish", restaurantLocation: "London" },
];

function retrieveChef1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chefs[0]);
    }, 2000);
  });
};

// Chef rejected manually
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Chef 2 could not be found");
    }, 3000);
  });
};


function retrieveChef3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }, 4000);
  });
};


Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then((results) => {
  if (results[0].status === "fulfilled") {
    document.getElementById("chef1").innerHTML =
    `<h1>${results[0].value.name}</h1>
    <ul>
      <li>Specialty: ${results[0].value.specialty}</li>
      <li>Weakness: ${results[0].value.weakness}</li>
      <li>Location: ${results[0].value.restaurantLocation}</li>
    </ul>`;
  } else {
    document.getElementById("chef1").innerHTML = `<h1>Oh no! This chef must have been terminated.</h1>`;
  }

  if (results[1].status === "fulfilled") {
    document.getElementById("chef2").innerHTML =
    `<h1>${results[1].value.name}</h1>
    <ul>
      <li>Specialty: ${results[1].value.specialty}</li>
      <li>Weakness: ${results[1].value.weakness}</li>
      <li>Location: ${results[1].value.restaurantLocation}</li>
    </ul>`;
  } else {
    document.getElementById("chef2").innerHTML = `<h1>Oh no! This chef must have been terminated.</h1>`;
  }

  if (results[2].status === "fulfilled") {
    document.getElementById("chef3").innerHTML =
    `<h1>${results[2].value.name}</h1>
    <ul>
      <li>Specialty: ${results[2].value.specialty}</li>
      <li>Weakness: ${results[2].value.weakness}</li>
      <li>Location: ${results[2].value.restaurantLocation}</li>
    </ul>`;
  } else {
    document.getElementById("chef3").innerHTML = `<h1>Oh no! This chef must have been terminated.</h1>`;
  }
});