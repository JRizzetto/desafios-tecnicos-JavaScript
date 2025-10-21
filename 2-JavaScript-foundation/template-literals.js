/* Exercise 5: You receive a cart object like this:
Your task:
1 - Destructure the needed values.
2 - Add one more item { product: "Notebook", price: 10, quantity: 5 } using the spread operator.
3 - Calculate the total (sum of all products + shipping - discount).
4 - Return a clean template literal summary like this:

Order Summary for Bob (bob@email.com)
- Book x3 = $60
- Pen x10 = $50
- Notebook x5 = $50
Shipping: $15
Discount: 5%
Total: $155
*/

// const cart = {
//   buyer: { name: "Bob", email: "bob@email.com" },
//   items: [
//     { product: "Book", price: 20, quantity: 3 },
//     { product: "Pen", price: 5, quantity: 10 },
//   ],
//   shipping: 15,
//   discount: 0.05,
// };

// const {
//   buyer: { name, email },
//   items: [...items],
//   shipping,
//   discount,
// } = cart;

// const newItems = [...items, { product: "Notebook", price: 10, quantity: 5 }];

// const newItemsArray = newItems.map((value) => {
//   const result = value.price * value.quantity;
//   return {
//     product: value.product,
//     totalPrice: result,
//     quantity: value.quantity,
//   };
// });

// const total = newItemsArray.reduce(
//   (acc, value) => (acc += value.totalPrice),
//   0
// );

// const [first, second, third] = newItemsArray;

// console.log(`
//   Order Summary for ${name} (${email})
// - ${first.product} x${first.quantity} = $${first.totalPrice}
// - ${second.product} x${second.quantity} = $${second.totalPrice}
// - ${third.product} x${third.quantity} = $${third.totalPrice}
// Shipping: $${shipping}
// Discount: 5%
// Total: $${total - discount * total}
//   `);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4: You need to write a function that summarizes an order system for an online store.
1 - You’ll receive an order object that includes:
- customer (object with name and email)
- items (array of objects with product, price, and quantity)
- discount (number between 0 and 1)
2 - Use destructuring to extract:
- name and email from customer
- the first item, and the rest of the items using the rest operator
3 - Use spread to create a new array of items that includes a new product:
{ product: "USB Cable", price: 15, quantity: 2 }
4 - Use template literals to return a formatted summary like this:

Order Summary for Alice (alice@email.com)
- Laptop x1 = $1200
- Mouse x2 = $100
- USB Cable x2 = $30
Discount: 10%
Total: $1188
*/

// const order = {
//   customer: {
//     name: "Alice",
//     email: "alice@email.com",
//   },
//   items: [
//     { product: "Laptop", price: 1200, quantity: 1 },
//     { product: "Mouse", price: 50, quantity: 2 },
//   ],
//   discount: 0.1,
// };

// const {
//   customer: { name, email },
//   items: [firstItem, ...items],
//   discount,
// } = order;

// const newArray = [
//   firstItem,
//   ...items,
//   { product: "USB Cable", price: 15, quantity: 2 },
// ];

// const totalNewArray = newArray.map((value) => {
//   const resultTotal = value.price * value.quantity;

//   return {
//     product: value.product,
//     totalPrice: resultTotal,
//     quantity: value.quantity,
//   };
// });

// const totalPrices = totalNewArray.reduce(
//   (acc, value) => (acc += value.totalPrice),
//   0
// );

// const [first, second, third] = totalNewArray;

// console.log(`
// Order Summary for ${name} (${email})
// - ${first.product} x${first.quantity} = $${first.totalPrice}
// - ${second.product} x${second.quantity} = $${second.totalPrice}
// - ${third.product} x${third.quantity} = $${third.totalPrice}
// Discount: 10%
// Total: $${totalPrices - discount * totalPrices}
//   `);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3: Employee Payment Summary
1 - Destructure all needed properties (including nested ones like bonuses).
2 - Calculate total salary = (hoursWorked * hourlyRate) + performance + extraHours.
3 - Return a summary string using template literals, like this:

*/

// const employee = {
//   name: "John Doe",
//   role: "Developer",
//   hoursWorked: 160,
//   hourlyRate: 25,
//   bonuses: {
//     performance: 200,
//     extraHours: 150,
//   },
// };

// const {
//   name,
//   role,
//   hoursWorked,
//   hourlyRate,
//   bonuses: { performance, extraHours },
// } = employee;

// const totalSalary = hoursWorked * hourlyRate + performance + extraHours;

// console.log(`
// Employee: ${name} (${role})
// Worked: ${hoursWorked} hours at $${hourlyRate}/hour
// Bonuses: $${performance} (performance), $${extraHours} (extra hours)
// Total Salary: $${totalSalary}
//   `);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

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

// const order = {
//   customer: "Alice",
//   items: [
//     { product: "Laptop", price: 1200, quantity: 1 },
//     { product: "Mouse", price: 50, quantity: 2 },
//     { product: "Keyboard", price: 100, quantity: 1 },
//   ],
// };

// function orderSummary(order) {
//   const {
//     items: [first, second, third],
//   } = order;

//   const grandTotal = order.items.reduce(
//     (acc, value) => (acc += value.price * value.quantity),
//     0
//   );

//   const multiLine = `Order for ${order.customer}:
//   - ${first.product} x${first.quantity}: $${first.price * first.quantity}
//   - ${second.product} x${second.quantity}: $${second.price * second.quantity}
//   - ${third.product} x${third.quantity}: $${third.price * third.quantity}
//   GrandTotal: $${grandTotal}`;

//   return multiLine;
// }

// const result = orderSummary(order);
// console.log(result);

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
