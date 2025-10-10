/* 3 - Exercise – Update Product Stock
You still have your inventory:
1 - Find the first product that’s out of stock using .find().
2 - Find the index of that product using .findIndex().
3 - If found, restock it by setting its stock to 10 (update the object in the array).
4 - Print a message like:
*/

const inventory = [
  { id: 101, name: "Laptop", stock: 5 },
  { id: 102, name: "Mouse", stock: 0 },
  { id: 103, name: "Keyboard", stock: 10 },
  { id: 104, name: "Monitor", stock: 2 },
  { id: 105, name: "Headphones", stock: 0 },
];

const firstProduct = inventory.find((device) => device.stock === 0);
const indexProduct = inventory.findIndex((device) => device.stock === 0);
const restockInvestary = (inventory[indexProduct].stock = 10);

const restockInventary = firstProduct
  ? `Product ${firstProduct.name} was restocked. New stock: ${firstProduct.stock}`
  : `All products are in stock`;

console.log(restockInventary);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Exercise – Inventory Management
You’re managing a store’s product inventory:
1 - Find the first product that’s out of stock (stock = 0) → use .find().
2 - Find the index of that same product in the array → use .findIndex().
3 - If you find it, print something like:
*/
// const inventory = [
//   { id: 101, name: "Laptop", stock: 5 },
//   { id: 102, name: "Mouse", stock: 0 },
//   { id: 103, name: "Keyboard", stock: 10 },
//   { id: 104, name: "Monitor", stock: 2 },
//   { id: 105, name: "Headphones", stock: 0 },
// ];

// const outOfStock = inventory.find((device) => device.stock === 0);

// const indexOutStock = inventory.findIndex((device) => device.stock === 0);

// const firstOutStock = outOfStock
//   ? `Product ${outOfStock.name} is out of stock (position ${indexOutStock})`
//   : `All products are in stock`;

// console.log(firstOutStock);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise – Searching Customers
You have an array of customers:
1 - Find the first customer who spent more than 1000 (use .find()).
2 - Find the index of that same customer (use .findIndex()).
3 - Print both results in a clear way, for example:
*/
// const customers = [
//   { name: "Alice", totalSpent: 1200 },
//   { name: "Bob", totalSpent: 300 },
//   { name: "Charlie", totalSpent: 900 },
//   { name: "David", totalSpent: 1500 },
//   { name: "Eve", totalSpent: 700 },
// ];

// const firstCustomer = customers.find((customer) => customer.totalSpent > 1000);

// const indexCustomer = customers.findIndex(
//   (customer) => customer.totalSpent > 1000
// );

// console.log(firstCustomer);
// console.log(indexCustomer);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
