/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Nicholas Skelton
  Date: 11.1.25
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
      return name;
    },

    getGender: function()  {
      return gender;
    },

    getClass: function() {
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  let name = document.getElementById("heroName").value;
  let gender = document.getElementById("heroGender").value;
  let characterClass = document.getElementById("heroClass").value;

  let newCharacter = createCharacter(name, gender, characterClass);

  if (characterClass === "warrior") {
    document.getElementById("characterOutput").innerHTML = `<p>${newCharacter.getName()}, the vicious ${newCharacter.getGender()} orc ${newCharacter.getClass()} from Durotar.</p>`
  } else if (characterClass === "mage") {
    document.getElementById("characterOutput").innerHTML = `<p>${newCharacter.getName()}, the brilliant ${newCharacter.getGender()} Kirin Tor ${newCharacter.getClass()} from Dalaran.</p>`
  } else {
    document.getElementById("characterOutput").innerHTML = `<p>${newCharacter.getName()}, the cunning ${newCharacter.getGender()} blood elf ${newCharacter.getClass()} from Quel'Thalas.</p>`
  }
});