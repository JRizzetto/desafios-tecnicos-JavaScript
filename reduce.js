/*
Exercise R5: Count Products by Category

You have an array of product objects. Each product has name and category.
Use reduce() to create an object that counts how many products are in each category.
*/

const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Shirt", category: "clothing" },
  { name: "Phone", category: "electronics" },
  { name: "Shoes", category: "clothing" },
  { name: "Tablet", category: "electronics" },
];

const countCategory = products.reduce((acc, product) => {
  const countElectronics = 0;
  const countClothing = 0;

  if (product.category === "electronics") {
    countElectronics += 1;
  }

  if (product.category === "clothing") {
    countClothing += 1;
  }

  return {
    electronics: countElectronics,
    clothing: countClothing,
  };
}, {});
console.log(countCategory);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/*
Exercise R4: Get Names of Expensive Products

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

/*
Exercise R3: Total Price of Products

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

/*
Exercise R2: Multiply All Numbers

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

/*
Exercise R1: Sum of Numbers

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
