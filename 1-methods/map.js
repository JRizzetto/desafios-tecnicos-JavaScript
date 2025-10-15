// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2); // [2, 4, 6]

/*
Exercise 8: Create User Greetings
You are given an array of users. Each user has a name and an age.
Use map() to create a new array of greeting messages for each user.
*/

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const newUsers = users.map((user) => {
  const greeting = function () {
    return `Hello, my name is ${user.name} and I am ${user.age} years old.`;
  };

  return greeting();
});

console.log(newUsers);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 7: Apply Discounts to Products
You are given an array of products with name and price. Each product should get a 10% discount. 
Use map() to create a new array of objects where each product has the same name but with a new discounted price.
*/

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 },
// ];

// const newProducts = products.map((product) => {
//   const newPrice = product.price * 0.9;

//   return {
//     name: product.name,
//     newPrice,
//   };
// });
// console.log(newProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 6: Extract Product Names
You are given an array of objects representing products. Each object contains the properties id, name, and price. 
Use the map() method to create a new array that contains only the names of the products.
*/

// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Tablet", price: 600 },
// ];

// const newProducts = products.map((product, index, array) => {
//   return product.name;
// });

// console.log(newProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 5: Calculate Final Grades
You have a list of students, each with a name and their grade before extra points:
Use map() to create a new array where each student has:
The same name.
The same grade.
A new property finalGrade, which is the original grade + 1 extra point (but max 10).
A property status:
"approved" if finalGrade >= 6
"failed" if finalGrade < 6
*/

// const students = [
//   { name: "Lucas", grade: 6 },
//   { name: "Mariana", grade: 8 },
//   { name: "Pedro", grade: 4 },
//   { name: "Ana", grade: 10 },
// ];

// const newStudents = students.map((student) => {
//   const finalGrade = student.grade + 1 > 10 ? 10 : student.grade + 1;
//   const status = finalGrade >= 6 ? "approved" : "failed";

//   return {
//     ...student,
//     finalGrade,
//     status,
//   };
// });
// console.log(newStudents);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 4: Add Status to Users
You have an array of users, each with a name and age:
Use map() to create a new array of users, but this time:
Keep the same name and age.
Add a new property called status:
"minor" if age < 18
"adult" if age >= 18
*/

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 15 },
//   { name: "Diana", age: 30 },
// ];

// const newusers = users.map((user) => {
//   const status = user.age < 18 ? "minor" : "adult";
//   return {
//     name: user.name,
//     age: user.age,
//     status,
//   };
// });
// console.log(newusers);

// const shortNewUsers = users.map((user) => {
//   const status = user.age < 18 ? "minor" : "adult";
//   return {
//     ...user,
//     status,
//   };
// });
// console.log(shortNewUsers);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 3: Format Phone Numbers

You have an array of phone numbers stored only as digits (no formatting):

Use map() to transform this array into a new one, where each phone number is formatted like this:
[
  "(11) 98765-4321",
  "(21) 91234-5678",
  "(31) 98765-4321"
]

*/

// const phoneNumbers = ["11987654321", "21912345678", "31987654321"];

// const newPhoneNumbers = phoneNumbers.map((number) => {
//   const area = number.slice(0, 2);
//   const firstNumber = number.slice(2, 7);
//   const finalNumber = number.slice(7);

//   const formatedNumber = `(${area}) ${firstNumber}-${finalNumber}`;

//   return formatedNumber;
// });

// console.log(newPhoneNumbers);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 2: Uppercase Usernames

You have a list of users, and you want to transform all usernames to uppercase (like many systems do for standardization).

Here’s the starting array:
*/

// const users = [
//   { id: 1, username: "john" },
//   { id: 2, username: "maria" },
//   { id: 3, username: "carlos" },
// ];

// const uppercaseUsers = users.map((user) => {
//   const newUpName = user.username.toUpperCase();

//   return {
//     id: user.id,
//     username: newUpName,
//   };
// });

// // console.log(uppercaseUsers);

// // shot version
// const shortUpUsers = users.map((user) => {
//   return {
//     ...user,
//     username: user.username.toUpperCase(),
//   };
// });

// console.log(uppercaseUsers);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise 1: Double the Prices

Imagine you have a small online store, and you want to increase the price of all products by 10%.

Here’s your starting array of products:
*/

// const products = [
//   { name: "Shirt", price: 20 },
//   { name: "Shoes", price: 50 },
//   { name: "Hat", price: 10 },
// ];

// const newProducts = products.map((product, index, array) => {
//   const newPrice = product.price * 1.1;

//   return {
//     name: product.name,
//     price: newPrice.toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL",
//     }),
//   };
// });

// console.log(newProducts);
