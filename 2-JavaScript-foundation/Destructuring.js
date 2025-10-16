/* 9 - Exercise 9 (Destructuring + Default + Nested Arrays)
Here’s your scenario 👇
1 - Use a single destructuring statement to extract:
- companyName → "TechWave"
- the second employee’s name → "Bob"
- the first skill of the first employee → "HTML"
- country with a default value "Portugal" (it doesn’t exist in the object)
2 - Then print all those variables.
*/

const company = {
  name: "TechWave",
  employees: [
    {
      name: "Alice",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Bob",
      skills: ["Python", "Django"],
    },
  ],
  location: {
    city: "Lisbon",
  },
};

const {
  name: companyName,
  employees: [
    {
      skills: [employeeSkill],
    },
    { name: secondEmployee },
  ],
  country = "Portugal",
} = company;

console.log(companyName);
console.log(secondEmployee);
console.log(employeeSkill);
console.log(country);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 8 - Exercise 8 (Final Destructuring Challenge)
You have an e-commerce order object:
You need to:
1 - Destructure the following:
- customerName → "Maria"
- city → "São Paulo"
- the name of the first product → "Laptop"
- the price of the second product → 150
2 - Create a function showOrder that uses parameter destructuring to print:
- Order for Maria from São Paulo includes Laptop and Mouse (Use destructuring directly inside the function parameters).
*/

// const order = {
//   id: 2025,
//   customer: {
//     name: "Maria",
//     address: {
//       city: "São Paulo",
//       country: "Brazil",
//     },
//   },
//   items: [
//     { product: "Laptop", price: 4500 },
//     { product: "Mouse", price: 150 },
//   ],
// };

// const {
//   customer: {
//     name: customerName,
//     address: { city },
//   },
//   items: [
//     { product: firstProduct },
//     { product: secondProduct, price: secondPrice },
//   ],
// } = order;

// function showOrder() {
//   return `Order for ${customerName} from ${city} includes ${firstProduct} and ${secondProduct}`;
// }
// console.log(showOrder());

// console.log(customerName);
// console.log(firstProduct);
// console.log(secondPrice);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 7 - Exercise 7 (Nested Destructuring Practice)
You have an object representing a movie with nested data about its director and cast:
Use a single destructuring statement to extract:
title → "Inception"
directorName → "Christopher Nolan"
the role of the third cast member → "Ariadne"
a default value rating = 5 (not in the object)
*/

// const movie = {
//   title: "Inception",
//   year: 2010,
//   director: {
//     name: "Christopher Nolan",
//     country: "UK",
//   },
//   cast: [
//     { name: "Leonardo DiCaprio", role: "Cobb" },
//     { name: "Joseph Gordon-Levitt", role: "Arthur" },
//     { name: "Elliot Page", role: "Ariadne" },
//   ],
// };

// const {
//   title,
//   director: { name: directorName },
//   cast: [, , { role }],
//   rating = 5,
// } = movie;
// console.log(title);
// console.log(directorName);
// console.log(role);
// console.log(rating);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 6 - Exercise 6 (Nested + Default Values + Short Version)
You have a product object that contains nested data about its details and tags:
Task:
Using a single destructuring statement, extract:
name → "Laptop"
brand → "Dell"
storage → "512GB SSD"
the first tag into firstTag → "Electronics"
and create a default value price = 0 (it doesn’t exist in the object).

*/

// const product = {
//   id: 101,
//   name: "Laptop",
//   details: {
//     brand: "Dell",
//     specs: {
//       ram: "16GB",
//       storage: "512GB SSD",
//     },
//   },
//   tags: ["Electronics", "Computers"],
// };

// const {
//   name,
//   details: {
//     brand,
//     specs: { storage },
//   },
//   tags: [firstTag],
//   price = 0,
// } = product;

// console.log(name);
// console.log(brand);
// console.log(storage);
// console.log(firstTag);
// console.log(price);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 4 - Exercise 4 (Intermediate: Arrays + Objects)
You have an array of users, each with a name and age. Use destructuring to extract the first user’s name and age directly into variables.
Goal:
1 - firstUserName → "Alice"
2 - firstUserAge → 25
💡 Hint: You can destructure the array and the object in a single line.
*/

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// const [{ name: firstUserName, age: firstUserAge }] = users;
// console.log(firstUserName, firstUserAge);

// const [, { name: secondUserName, age: secondUserAge }] = users;
// console.log(secondUserName, secondUserAge);

// const [, , { name: thirdUserName, age: thirdUserAge }] = users;
// console.log(thirdUserName, thirdUserAge);

// const [
//   { name: firstUserName, age: firstUserAge },
//   { name: secondUserName, age: secondUserAge },
//   { name: thirdUserName, age: thirdUserAge },
// ] = users;

// console.log(firstUserName, firstUserAge);
// console.log(secondUserName, secondUserAge);
// console.log(thirdUserName, thirdUserAge);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 3 - Using Default Values
Destructure the object below and get firstName, lastName, and country. If country doesn’t exist, default it to "USA".
Goal: After destructuring:
firstName → "John", lastName → "Doe", country → "USA"
*/

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const { firstName, lastName, country = "EUA" } = person;
// console.log(firstName, lastName, country);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Object Destructuring
1 - Task: Extract the name and age from this object using destructuring:
Goal: Create variables userName and userAge that hold "Alice" and 25.
*/

// const user = {
//   name: "Alice",
//   age: 25,
//   country: "Brazil",
// };

// const { name: userName, age: userAge } = user;

// console.log(userName);
// console.log(userAge);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Your First Exercise (Easy)
1 - Use array destructuring to extract the first two fruits from this array.
Goal: After your destructuring, variables firstFruit and secondFruit should contain "apple" and "banana" respectively.
*/

// const fruits = ["apple", "banana", "cherry", "date"];
// const [firstFruit, secondFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
