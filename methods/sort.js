/* 6 - Exercise – Sort Flights by Price and Duration
You have an array of flight options. Each flight has a destination, price, and duration in minutes.

1 - Sort the flights from cheapest to most expensive.
2 - Sort the flights from shortest duration to longest duration.
3 - Print both sorted arrays in a readable format.
*/

const flights = [
  { destination: "New York", price: 500, duration: 360 },
  { destination: "London", price: 750, duration: 420 },
  { destination: "Tokyo", price: 1200, duration: 720 },
  { destination: "Paris", price: 600, duration: 390 },
  { destination: "Dubai", price: 900, duration: 540 },
];

const cheapestToExpensive = [...flights].sort((a, b) => a.price - b.price);
console.log(cheapestToExpensive);

const shortestDuration = [...flights].sort((a, b) => a.duration - b.duration);
console.log(shortestDuration);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 5 - You manage a movie rental system. Each movie has a title, releaseDate (non-ISO "DD/MM/YYYY" format), and rating (1–10).

Your task:

1 - Sort movies by release date, newest to oldest.

2 - Then sort movies by rating, highest to lowest.

*/

// const movies = [
//   { title: "Inception", releaseDate: "16/07/2010", rating: 9 },
//   { title: "Frozen", releaseDate: "03/11/2013", rating: 7 },
//   { title: "Interstellar", releaseDate: "07/11/2014", rating: 10 },
//   { title: "The Lion King", releaseDate: "24/06/1994", rating: 8 },
//   { title: "Avatar", releaseDate: "18/12/2009", rating: 8 },
// ];

// const newestToOldest = movies.sort((a, b) => {
//   const [dayA, monthA, yearA] = a.releaseDate.split("/").map(Number);
//   const [dayB, monthB, yearB] = b.releaseDate.split("/").map(Number);

//   return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
// });
// console.log(newestToOldest);

// newestToOldest.forEach((movie) => {
//   const [day, month, year] = movie.releaseDate.split("/").map(Number);
//   const newdate = new Date(year, month - 1, day);
//   const monthName = newdate.toLocaleString("en-US", { month: "long" });
//   console.log(monthName);
// });

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 4 - You have a list of events. Each event has a name and a date in the format "DD/MM/YYYY". You need to sort the events from earliest to latest
1 - Sort the events by date from earliest to latest.
2 - Hint: Convert the string "DD/MM/YYYY" into a Date object for proper comparison.

*/

// const events = [
//   { name: "Conference", date: "12/11/2024" },
//   { name: "Workshop", date: "05/10/2024" },
//   { name: "Seminar", date: "23/09/2024" },
//   { name: "Meetup", date: "15/11/2024" },
//   { name: "Webinar", date: "01/10/2024" },
// ];

// const earliestToLatest = [...events].sort((a, b) => {
//   const [dayA, monthA, yearA] = a.date.split("/").map(Number);
//   const [dayB, monthB, yearB] = b.date.split("/").map(Number);

//   return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
// });
// console.log(earliestToLatest);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 3 - Organize a listt of orders
You work for an online store and need to organize a list of orders.
Each order has a customer, totalPrice, and date.
1 - Sort orders by totalPrice, highest to lowest.
2 - Then create another sort by date, from most recent to oldest.
*/

// const orders = [
//   { customer: "Alice", totalPrice: 250, date: "2024-11-02" },
//   { customer: "Bob", totalPrice: 1200, date: "2024-10-21" },
//   { customer: "Charlie", totalPrice: 450, date: "2024-11-05" },
//   { customer: "David", totalPrice: 900, date: "2024-09-15" },
//   { customer: "Eve", totalPrice: 300, date: "2024-11-01" },
// ];

// const totalPriceOrder = [...orders].sort((a, b) => b.totalPrice - a.totalPrice);
// console.log(totalPriceOrder);

// const sortDateOrder = [...orders].sort((a, b) => b.date.localeCompare(a.date));
// console.log(sortDateOrder);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Exercise
You have an array of students with their names and average grades:
1 - Sort the students in descending order of grades (highest first).
2 - Then, sort them alphabetically by name (A–Z).
3 - Show both results in the console with clear messages like:
*/

// const students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 72 },
//   { name: "Charlie", grade: 95 },
//   { name: "David", grade: 68 },
//   { name: "Eve", grade: 90 },
// ];

// const descendingOrder = [...students].sort((a, b) => b.grade - a.grade);

// const alphabeticOrderName = [...students].sort((a, b) =>
//   a.name.localeCompare(b.name)
// );

// console.log(descendingOrder);
// console.log(alphabeticOrderName);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise — Sort Products by Price
You have this list of products:
1 - Sort the products from cheapest to most expensive.
2 - Then, print each product’s name and price in that order.

*/

// const products = [
//   { name: "Laptop", price: 3500 },
//   { name: "Mouse", price: 80 },
//   { name: "Keyboard", price: 200 },
//   { name: "Monitor", price: 1200 },
//   { name: "Headphones", price: 300 },
// ];

// // Change original array
// products.sort((a, b) => a.price - b.price);
// console.log(products);

// // Return a new array
// const sortProducts = [...products].sort((a, b) => b.price - a.price);
// console.log(sortProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
