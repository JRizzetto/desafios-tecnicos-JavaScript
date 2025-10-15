/* 4 - Exercise 4 (Intermediate: Arrays + Objects)
You have an array of users, each with a name and age. Use destructuring to extract the first user’s name and age directly into variables.
Goal:
1 - firstUserName → "Alice"
2 - firstUserAge → 25
💡 Hint: You can destructure the array and the object in a single line.
*/

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// const [{ name: firstUserName, age: firstUserAge }] = users;
// console.log(firstUserName, firstUserAge);

// const [, { name: secondUserName, age: secondUserAge }] = users;
// console.log(secondUserName, secondUserAge);

// const [, , { name: thirdUserName, age: thirdUserAge }] = users;
// console.log(thirdUserName, thirdUserAge);

const [
  { name: firstUserName, age: firstUserAge },
  { name: secondUserName, age: secondUserAge },
  { name: thirdUserName, age: thirdUserAge },
] = users;

console.log(firstUserName, firstUserAge);
console.log(secondUserName, secondUserAge);
console.log(thirdUserName, thirdUserAge);

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
