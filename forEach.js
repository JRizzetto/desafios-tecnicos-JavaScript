/* Exercise 3 – Task List with Numbers
You have an array of tasks. Each task has a description and a completed status.
1 - Use forEach() to print each task with its number (starting from 1) and status:
"
1. Wash dishes — Completed
2. Take out trash — Not completed

"
2 - At the end, print the number of completed tasks.
*/

const tasks = [
  { description: "Wash dishes", completed: true },
  { description: "Take out trash", completed: false },
  { description: "Do homework", completed: true },
  { description: "Feed the dog", completed: false },
];

let completTask = 0;

tasks.forEach((element, index) => {
  console.log(
    `${index + 1}. ${element.description} - ${
      element.completed ? "Completed" : "Not completed"
    }`
  );

  if (element.completed) {
    completTask++;
  }
});
console.log(`Number of completed tasks: ${completTask}`);

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
