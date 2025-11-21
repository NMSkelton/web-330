/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Nicholas Skelton
  Date: 11.20.25
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 6, isReserved: true },
  { tableNumber: 2, capacity: 8, isReserved: true },
  { tableNumber: 3, capacity: 10, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  for (let t of tables) {
    if (t.tableNumber  === tableNumber) {
      if (t.isReserved) {  // If table is resevered
        document.getElementById("message").textContent = "Table is already reserved.";
        callback("Table is already reserved.");
      } else {  // If table is not reserved
        setTimeout(() => {
          t.isReserved = true;  // Set reserve status to true
          document.getElementById("message").textContent = "Reservation succesful!";
          callback("Reservation successful!");
        }, time);
      }
      break;
    }
  }
}


// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent submission, so message sticks

    const tableNumber = parseInt(document.getElementById("tableNumber").value);  // Pull tableNumber and convert it to an integer

    reserveTable(tableNumber, function(message) {
      document.getElementById("message").textContent = message;
    }, 1000);
});
