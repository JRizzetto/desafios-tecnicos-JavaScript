/* 3 - Exercise — “Find the Eligible Customer”
You have an array of customers. Each customer has:

name → string
age → number
purchases → number of purchases they made
isPremium → boolean

1 - Find the first customer who is at least 18 years old, has made 5 or more purchases, and is not a premium member.
2 - Print the customer’s name, age, and number of purchases.
3 - If no customer matches, print "No eligible customer found".
*/

const customers = [
  { name: "Alice", age: 17, purchases: 6, isPremium: false },
  { name: "Bob", age: 25, purchases: 3, isPremium: false },
  { name: "Charlie", age: 30, purchases: 10, isPremium: true },
  { name: "David", age: 22, purchases: 5, isPremium: false },
  { name: "Eve", age: 28, purchases: 2, isPremium: false },
];

const filterCustumer = customers.find((element, index, array) => {
  const resultVar =
    element.age >= 18 && element.purchases >= 5 && !element.isPremium;

  return resultVar;
});

const customerResult = filterCustumer
  ? `Name: ${filterCustumer.name} - Age: ${filterCustumer.age} - Number: ${filterCustumer.purchases}`
  : "No eligible customer found";

console.log(customerResult);
//

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Exercise — “Find a Product in Stock”
You have an array of products. Each product has a name, price, and inStock (boolean).
1 - Find the first product that costs more than $100 and is in stock.
2 - Print the product’s name and price.
3 - If no product matches, print "No product found".
*/
// const products = [
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "Keyboard", price: 75, inStock: false },
//   { name: "Monitor", price: 150, inStock: true },
//   { name: "Laptop", price: 1200, inStock: false },
// ];

// const firstProduct = products.find(
//   (product) => product.price > 100 && product.inStock
// );
// console.log(firstProduct);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise 1 — Find a Student by Score
You have an array of students. Each student has a name and a score (0–100).
1 - Find the first student who scored more than 90.
2 - Print their name and score.
*/
// const students = [
//   { name: "Alice", score: 88 },
//   { name: "Bob", score: 95 },
//   { name: "Charlie", score: 91 },
//   { name: "David", score: 85 },
// ];

// const found = students.find((student, index, array) => {
//   return student.score > 90;
// });
// console.log(`Name: ${found.name} - Score: ${found.score}`);

// const shortFound = students.find((student) => student.score > 90);
// console.log(`Name: ${found.name} - Score: ${found.score}`);
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
