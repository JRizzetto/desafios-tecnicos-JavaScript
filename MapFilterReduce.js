/* Exercise 4 – Online Store Report (Discover the methods)
You have this array of orders:
- Create a list of totals for all orders that have already been delivered, 
where each total is the number of items multiplied by the price per item.
- Calculate the total revenue from all delivered orders.
- Calculate the total number of items sold in delivered orders.
*/

const orders = [
  { id: 1, customer: "Alice", items: 3, pricePerItem: 50, delivered: true },
  { id: 2, customer: "Bob", items: 1, pricePerItem: 50, delivered: false },
  { id: 3, customer: "Charlie", items: 4, pricePerItem: 50, delivered: true },
  { id: 4, customer: "David", items: 2, pricePerItem: 40, delivered: true },
  { id: 5, customer: "Eve", items: 5, pricePerItem: 60, delivered: false },
];

const deliveredOrders = orders
  .filter((order) => order.delivered)
  .map((order) => {
    const totalItem = order.items * order.pricePerItem;
    return {
      ...order,
      total: totalItem,
    };
  });

const totalRevenue = deliveredOrders.reduce(
  (acc, order) => (acc += order.total),
  0
);

const totalSoldItems = deliveredOrders.reduce(
  (acc, order) => (acc += order.items),
  0
);

console.log(totalRevenue);
console.log(totalSoldItems);
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 – Online Store Orders
You have an array of orders from an online store:
01 - Use filter to get only the orders that were delivered.
02 - Use map to create an array of messages like:
"Order #1 by Alice: $150 delivered"
03 - Use reduce to calculate the total revenue from all delivered orders.
*/
// const orders = [
//   { id: 1, customer: "Alice", items: 3, total: 150, delivered: true },
//   { id: 2, customer: "Bob", items: 1, total: 50, delivered: false },
//   { id: 3, customer: "Charlie", items: 4, total: 200, delivered: true },
//   { id: 4, customer: "David", items: 2, total: 80, delivered: true },
//   { id: 5, customer: "Eve", items: 5, total: 300, delivered: false },
// ];

// const filteredOrders = orders
//   .filter((order) => order.delivered)
//   .map((order) => {
//     return `order #${order.id} by ${order.customer}: R$ ${order.total} delivered`;
//   });
// console.log(filteredOrders);

// const totalRevenue = orders
//   .filter((order) => order.delivered)
//   .reduce((acc, order) => {
//     acc += order.total * order.items;

//     return acc;
//   }, 0);

// console.log(totalRevenue);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 – Array of Objects
You have this array of people:
01 - Use filter to get only the people who are 18 or older.
02 - Use map to create an array of names of those people.
03 - Use reduce to count the total age of the people who are 18 or older.
*/
// const peoples = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 15 },
//   { name: "Eve", age: 27 },
// ];

// const totalAdultAge = peoples
//   .filter((person) => person.age >= 18)
//   .reduce((acc, person) => acc + person.age, 0); // sum ages

// console.log(totalAdultAge);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 – Array of Numbers

You have an array of numbers:
1 - Use map to create a new array where each number is multiplied by 2.
2 - Use filter to get only the numbers greater than 10.
3 - Use reduce to calculate the sum of all numbers in the filtered array.

*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const changedNumbers = numbers
//   .map((number) => number * 2)
//   .filter((number) => number > 10)
//   .reduce((acc, number) => (acc += number), 0);

// console.log(changedNumbers);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
