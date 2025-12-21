"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ
    Author: Nicholas Skelton
    Date: 12.20.25

    Filename: js12.js
*/

// Run once the page is loaded and ready
$( () => {

  // Add click events to each question in the FAQ
  $("dl#faq dt").click( e => {

    // Alternate between hiding and showing the answer
    let question = $(e.target);
    let answer = $(question.next());

    $(question).toggleClass("hiddenAnswer");

    if ($(question).hasClass("hiddenAnswer")) {
      $(answer).slideUp(600);
    } else {
      $(answer).slideDown(600);
    }

  });

});