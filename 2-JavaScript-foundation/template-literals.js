/* Exercise 2: Order Summary
You have this object representing a customer’s order:
1 - Write a function orderSummary(order) that returns a multi-line string using template literals.
2 - The string should include:
- Customer name
- List of all items with their quantity and total price per item
- Grand total of the order

Exemplo of the output
Order for Alice:
- Laptop x1: $1200
- Mouse x2: $100
- Keyboard x1: $100
Grand Total: $1400

*/

const order = {
  customer: "Alice",
  items: [
    { product: "Laptop", price: 1200, quantity: 1 },
    { product: "Mouse", price: 50, quantity: 2 },
    { product: "Keyboard", price: 100, quantity: 1 },
  ],
};

function orderSummary(order) {
  const {
    items: [first, second, third],
  } = order;

  const grandTotal = order.items.reduce(
    (acc, value) => (acc += value.price * value.quantity),
    0
  );

  const multiLine = `Order for ${order.customer}:
  - ${first.product} x${first.quantity}: $${first.price * first.quantity}
  - ${second.product} x${second.quantity}: $${second.price * second.quantity}
  - ${third.product} x${third.quantity}: $${third.price * third.quantity}
  GrandTotal: $${grandTotal}`;

  return multiLine;
}

const result = orderSummary(order);
console.log(result);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1: Your First Exercise
You have this object:
1 - Create a function introduceUser(user) that returns a string using template literals:
“Hi, my name is Bob, I am 30 years old, and I live in New York.”
2 - Log the returned string to the console.
*/

// const user = {
//   name: "Bob",
//   age: 30,
//   city: "New York",
// };

// // function introduceUser(userParms) {
// //   return `Hi, my name is ${userParms.name}, I am ${userParms.age} years old, and I live in ${userParms.city}.`;
// // }

// // const result = introduceUser(user);
// // console.log(result);

// function introduceUser({ name, age, city }) {
//   return `Hi, my name is ${name}, I am ${age} years old, and I live in ${city}.`;
// }

// const result = introduceUser(user);
// console.log(result);
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
