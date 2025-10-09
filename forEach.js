/* 7 - Exercise — “Employee Performance Report”
You have an array of employees, and each employee has a name and the number of hours they worked this week.
Your task is to:
1 - Print each employee’s name and hours worked.
2 - If the employee worked more than 40 hours, show "Excellent performance".
3 - If they worked between 30 and 40 hours, show "Good performance".
4 - Otherwise, show "Needs improvement".
5 - At the end, count how many employees fall into each category and display the totals.
*/

const employees = [
  { name: "Alice", hoursWorked: 45 },
  { name: "Bob", hoursWorked: 38 },
  { name: "Charlie", hoursWorked: 25 },
  { name: "David", hoursWorked: 42 },
  { name: "Eve", hoursWorked: 30 },
];

let highExpectation = 0;
let mediaExpectation = 0;
let lowExpectation = 0;

employees.forEach((element, index, array) => {
  let hoursPerformed = "";
  if (element.hoursWorked > 40) {
    hoursPerformed = "Excelent performance";
    highExpectation++;
  } else if (element.hoursWorked >= 30 && element.hoursWorked <= 40) {
    hoursPerformed = "Good performance";
    mediaExpectation++;
  } else {
    hoursPerformed = "Needs improvement";
    lowExpectation++;
  }

  console.log(
    `Employee: ${element.name} - Hours worked ${element.hoursWorked} - ${hoursPerformed}`
  );
});

// console.log(
//   `Above expectation: ${highExpectation} \nBetween expectation ${mediaExpectation} \nLow Expectation ${lowExpectation}`
// );

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 6 - Exercise — “Temperature Report”
You have an array of daily temperatures (in °C).
Your task is to:
1 - Print each temperature with its day number (starting at 1).
2 - Count how many days were hot (above 30°C) and how many were cold (below 15°C).
3 - At the end, print the total count of hot days and cold days.
*/
// const temperatures = [22, 35, 18, 40, 12, 25, 30, 10, 33];

// let hotDays = 0;
// let coldDays = 0;

// temperatures.forEach((element, index, array) => {
//   console.log(`Dia ${index + 1}: A temperatura será ${element}°C`);

//   element > 30 ? hotDays++ : coldDays++;
// });
// console.log(`Hot days (above 30°C): ${hotDays} and cold days: ${coldDays}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 5 - Exercise — “Library Book Status”
You have an array of books, and each one has a title and an availability status.
Your task is to:
 1 - Print each book’s title followed by whether it’s available or checked out.
 2 - Count how many books are available.
 3 - At the end, print the total number of available books.

*/
// const books = [
//   { title: "The Hobbit", available: true },
//   { title: "1984", available: false },
//   { title: "Clean Code", available: true },
//   { title: "The Pragmatic Programmer", available: true },
//   { title: "Brave New World", available: false },
// ];

// let countBooks = 0;

// books.forEach((element, index, array) => {
//   let isAvailable = element.available
//     ? `The book ${element.title} is available`
//     : `The book ${element.title} is NOT available`;
//   console.log(isAvailable);

//   if (element.available) {
//     countBooks++;
//   }
// });
// console.log(`The are ${countBooks} books available`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 4 - Exercise – Store Sales Report
You have a store that sells different products.
Each product has a name, a price, and a quantitySold.
1 - Use forEach() to print each product’s name and the total revenue it generated (price * quantitySold).
2 - At the end, display the store’s total revenue from all products.
*/
// const products = [
//   { name: "Laptop", price: 3500, quantitySold: 3 },
//   { name: "Mouse", price: 80, quantitySold: 10 },
//   { name: "Keyboard", price: 200, quantitySold: 5 },
//   { name: "Monitor", price: 1200, quantitySold: 2 },
// ];

// let totalRevenue = 0;

// products.forEach((element, index, array) => {
//   console.log(
//     `The product is ${element.name} and toal revenue generated is ${
//       element.price * element.quantitySold
//     }`
//   );

//   totalRevenue += element.price * element.quantitySold;
// });

// console.log(`Total store revenue: R$${totalRevenue}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 – Task List with Numbers
You have an array of tasks. Each task has a description and a completed status.
1 - Use forEach() to print each task with its number (starting from 1) and status:
"
1. Wash dishes — Completed
2. Take out trash — Not completed

"
2 - At the end, print the number of completed tasks.
*/
// const tasks = [
//   { description: "Wash dishes", completed: true },
//   { description: "Take out trash", completed: false },
//   { description: "Do homework", completed: true },
//   { description: "Feed the dog", completed: false },
// ];

// let completTask = 0;

// tasks.forEach((element, index) => {
//   console.log(
//     `${index + 1}. ${element.description} - ${
//       element.completed ? "Completed" : "Not completed"
//     }`
//   );

//   if (element.completed) {
//     completTask++;
//   }
// });
// console.log(`Number of completed tasks: ${completTask}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 – Favorite Movies
You have an array of movies. Each movie has a title and a rating (1–10).
1 - Use forEach() to print each movie in this format:
"Movie: Inception — Rating: 9/10"
2 - Keep a count of movies with rating 8 or higher and print it at the end.
*/
// const movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Frozen", rating: 7 },
//   { title: "Interstellar", rating: 10 },
//   { title: "The Lion King", rating: 8 },
// ];

// let topRated = 0;

// movies.forEach((element) => {
//   console.log(`Movie: ${element.title} - Rating: ${element.rating}/10`);
//   if (element.rating >= 8) {
//     topRated = topRated + 1;
//   }
// });
// console.log(`Number of top-rated movies: ${topRated}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 – forEach() | Shopping List
You have a list of products in a shopping cart.
Each product has a name and a price.
1 - Use forEach() to print each product’s name and price in this format:
Product: Apple — Price: $3
At the end, print the total value of all products.
*/
// const cart = [
//   { name: "Apple", price: 3 },
//   { name: "Banana", price: 2 },
//   { name: "Orange", price: 4 },
//   { name: "Watermelon", price: 8 },
// ];

// let totalValue = 0;
// cart.forEach((element) => {
//   console.log(`Product: ${element.name} — Price: ${element.price} `);
//   totalValue += element.price;
// });

// console.log(`Total value: R$ ${totalValue}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
