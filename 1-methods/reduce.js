/* 🧠 Exercise R8: Count Product Quantities in a Shopping Cart
You have an array representing a shopping cart, where some products repeat.
Use only reduce() to count how many times each product appears.
*/

const cart = ["apple", "banana", "orange", "apple", "banana", "apple"];

const countRepetFruits = cart.reduce((acc, fruit) => {
  if (!acc[fruit]) acc[fruit] = 0;
  acc[fruit]++;

  return acc;
}, {});
console.log(countRepetFruits);

const countFruits = cart.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});
console.log(countFruits);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 🧠 Exercise R7 — Group Students by Grade
You have the following array of students:

You have an array of employees, each with a name, department, and salary.
Your task is to use only reduce() to calculate the total salary spent in each department.
*/
// const employees = [
//   { name: "Alice", department: "HR", salary: 3000 },
//   { name: "Bob", department: "IT", salary: 5000 },
//   { name: "Charlie", department: "Finance", salary: 4000 },
//   { name: "David", department: "IT", salary: 6000 },
//   { name: "Eve", department: "HR", salary: 3500 },
// ];

// const totalSalary = employees.reduce((acc, employ) => {
//   if (!acc[employ.department]) acc[employ.department] = 0;

//   acc[employ.department] += employ.salary;

//   return acc;
// }, {});
// console.log(totalSalary);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*🧠 Exercise R7 — Group Students by Grade
You have the following array of students:

Use reduce() to group the students by their grade,
creating an object where each property is a grade (A, B, C...)
and its value is an array with the students’ names.

*/
// const students = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "A" },
//   { name: "David", grade: "C" },
//   { name: "Eve", grade: "B" },
// ];

// const gradeStudents = students.reduce((acc, student) => {
//   if (!acc[student.grade]) {
//     acc[student.grade] = [];
//   }

//   acc[student.grade].push(student.name);

//   return acc;
// }, {});

// console.log(gradeStudents);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*🧠 Reduce Exercise R6 — Grouping Items by Category
Use reduce() to group all product names by their category.
In the end, you should get something like this:
*/
// const products = [
//   { name: "Laptop", category: "electronics" },
//   { name: "Phone", category: "electronics" },
//   { name: "Shirt", category: "clothing" },
//   { name: "Shoes", category: "clothing" },
//   { name: "Tablet", category: "electronics" },
// ];

// const alignProducts = products.reduce((acc, product) => {
//   if (!acc[product.category]) {
//     acc[product.category] = [];
//   }

//   acc[product.category].push(product.name);

//   return acc;
// }, {});
// console.log(alignProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise R5: Count Products by Category

You have an array of product objects. Each product has name and category.
Use reduce() to create an object that counts how many products are in each category.
*/
// const products = [
//   { name: "Laptop", category: "electronics" },
//   { name: "Shirt", category: "clothing" },
//   { name: "Phone", category: "electronics" },
//   { name: "Shoes", category: "clothing" },
//   { name: "Tablet", category: "electronics" },
// ];

// const newProducts = products.reduce((acc, product) => {
//   acc[product.category] = (acc[product.category] || 0) + 1;
//   return acc;
// }, {});
// console.log(newProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*Exercise R4: Get Names of Expensive Products

You have an array of product objects. Each product has name and price.
Use reduce() to create a new array of names for products that cost more than $500.
*/
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];

// const newProducts = products.reduce((acc, product) => {
//   if (product.price > 500) {
//     acc.push(product.name);
//   }

//   return acc;
// }, []);
// console.log(newProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise R3: Total Price of Products
You are given an array of product objects. Each product has a name and a price.
Use reduce() to calculate the total price of all products.
*/
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 },
// ];

// const newProducts = products.reduce((accumulator, product) => {
//   return accumulator + product.price;
// }, 0);

// console.log(newProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*Exercise R2: Multiply All Numbers
You are given an array of numbers.
Use reduce() to calculate the product of all numbers in the array (multiply them all together).
*/
// const numbers = [2, 3, 4];

// const multiplyNumber = numbers.reduce(
//   (accumulator, number) => accumulator * number,
//   1
// );
// console.log(multiplyNumber);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*Exercise R1: Sum of Numbers
You are given an array of numbers.
Use the reduce() method to calculate the sum of all numbers in the array.
*/
// const numbers = [10, 20, 30, 40];

// const sumNumbers = numbers.reduce((accumulator, number) => {
//   const sum = accumulator + number;

//   return sum;
// }, 0);

// console.log(sumNumbers);

// // Short version
// const shortversion = numbers.reduce(
//   (accumulator, number) => accumulator + number,
//   0
// );

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
