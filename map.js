// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2); // [2, 4, 6]

/*
Exercise 2: Uppercase Usernames

You have a list of users, and you want to transform all usernames to uppercase (like many systems do for standardization).

Here’s the starting array:
*/

const users = [
  { id: 1, username: "john" },
  { id: 2, username: "maria" },
  { id: 3, username: "carlos" },
];

const uppercaseUsers = users.map((user) => {
  newUpName = user.username.toUpperCase();

  return {
    id: user.id,
    username: newUpName,
  };
});

// console.log(uppercaseUsers);

// shot version
const shortUpUsers = users.map((user) => {
  newUpName = user.username.toUpperCase();

  return {
    ...user,
    newUpName,
  };
});

console.log(uppercaseUsers);

/*
1 - Exercise: Double the Prices

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
