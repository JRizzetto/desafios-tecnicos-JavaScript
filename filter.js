/*
Exercise F6: Filter Expensive Products
You have an array of product objects. Each product has name, price, and category.
Use filter() to create a new array containing only the products with a price greater than $100.
*/

// const products = [
//   { name: "Laptop", price: 1200, category: "electronics" },
//   { name: "Shirt", price: 50, category: "clothing" },
//   { name: "Phone", price: 800, category: "electronics" },
//   { name: "Shoes", price: 100, category: "clothing" },
// ];

// const newProducts = products.filter((product) => product.price > 100);
// console.log(newProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise F5: Filter Adults and Get Names
You have an array of user objects. Each user has a name and age.
First, filter the array to keep only users who are 18 or older.
Then, use map() to create a new array containing only their names.
*/

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 18 },
//   { name: "David", age: 16 },
// ];

// const namesOfLegalAge = users
//   .filter((user) => user.age >= 18)
//   .map((user) => user.name);
// console.log(namesOfLegalAge);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise F4: Filter Products by Category
You have an array of product objects. Each product has name, price, and category.
Use filter() to create a new array containing only the products in the "electronics" category.
*/

// const products = [
//   { name: "Laptop", price: 1200, category: "electronics" },
//   { name: "Shirt", price: 50, category: "clothing" },
//   { name: "Phone", price: 800, category: "electronics" },
//   { name: "Shoes", price: 100, category: "clothing" },
// ];

// const electronicCategory = products.filter(
//   (product) => product.category === "electronics"
// );
// console.log(electronicCategory);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise F3: Filter Users by Age
You have an array of user objects. Each user has a name and age.
Use filter() to create a new array containing only the users who are 18 years old or older.
*/

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 16 },
//   { name: "David", age: 30 },
// ];

// const usersOfLegalAge = users.filter((user) => user.age >= 18);
// console.log(usersOfLegalAge);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise F2: Filter Strings by Length
You are given an array of words.
Use filter() to create a new array that contains only the words with more than 4 letters.
*/

// const words = ["sun", "house", "cat", "elephant", "dog"];
// const filterWords = words.filter((word) => word.length > 4);
// console.log(filterWords);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise F1: Filter Numbers Greater Than 50
You are given an array of numbers.
Use the filter() method to create a new array that contains only the numbers greater than 50.
*/

// const values = [10, 55, 32, 99, 120, 8];
// const filterValues = values.filter((value) => {
//   return value > 50;
// });
// console.log(filterValues);

// // Short version
// const shortVersionValues = values.filter((value) => value > 50);
// console.log(shortVersionValues);
