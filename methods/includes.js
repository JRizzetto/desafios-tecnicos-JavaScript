/* 4 - “Secure Password Checker”
You’re building a security system that validates users’ passwords.
Each password must contain at least one special character from a predefined list.

1 - Create a function called checkPassword(user) that:
2 - Verifies if the user’s password includes any special character from specialChars.
Returns:
"✅ Alice has a secure password."
"❌ Diana needs a stronger password."

3 - Loop through all users and print the results.

*/

const specialChars = ["@", "#", "$", "%", "&", "*"];

const users = [
  { name: "Alice", password: "alice123" },
  { name: "Bob", password: "bob@secure" },
  { name: "Charlie", password: "charlie#1" },
  { name: "Diana", password: "diana1234" },
];

function checkPassword(user) {
  const character = user.password.split("");

  const isSpecialChars = character.some((value) => {
    return specialChars.includes(value);
  });

  return isSpecialChars
    ? `✅ ${user.name} has a secure password.`
    : `❌ ${user.name} needs a stronger password.`;
}
users.forEach((user) => {
  console.log(checkPassword(user));
});

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 3 - “Email Domain Filter”
You’re working on a system that manages users’ email addresses.
The app must detect whether users are using approved email domains.

1 - Create a function called checkEmailDomain(user) that:
- Extracts the domain part of the user’s email (the text after "@").
- Checks if that domain is in the allowedDomains list.
- Returns a message like:
    - "✅ Alice is using an approved domain (gmail.com)."
    - "❌ Bob is not using an approved domain (yahoo.com)."

2 - Loop through all users and print the result of calling checkEmailDomain() for each one.

*/

// const allowedDomains = ["gmail.com", "outlook.com", "hotmail.com"];

// const users = [
//   { name: "Alice", email: "alice@gmail.com" },
//   { name: "Bob", email: "bob@yahoo.com" },
//   { name: "Charlie", email: "charlie@outlook.com" },
//   { name: "Diana", email: "diana@company.org" },
// ];

// function checkEmailDomain(user) {
//   const domain = user.email.split("@")[1];

//   const isAllowed = allowedDomains.includes(domain);

//   if (isAllowed) {
//     return `✅ ${user.name} is using an approved domain (${domain}).`;
//   } else {
//     return `❌ ${user.name} is not using an approved domain (${domain}).`;
//   }
// }

// users.forEach((user) => {
//   console.log(checkEmailDomain(user));
// });

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Customer Order Verifier
You are helping a restaurant manage its orders.
Each order contains a customer name and a list of items they ordered.

1 - Create a function called checkItem(customerName, itemName) that:
2 - Looks for the customer inside the orders array.
3 -   Checks if that customer ordered the given item.
 4 -  If the customer is found and the item is in their order, print:
"✅ Yes, Alice ordered burger."
If the customer exists but didn’t order that item, print:
"❌ Alice didn’t order pizza."

If the customer is not found, print:
"⚠️ Customer not found."

 */

// const orders = [
//   { customer: "Alice", items: ["burger", "fries", "soda"] },
//   { customer: "Bob", items: ["pizza", "water"] },
//   { customer: "Charlie", items: ["salad", "juice", "dessert"] },
// ];

// function checkItem(customerName, itemName) {
//   let customerOrder = orders.find((order) => order.customer === customerName);
//   if (!customerOrder) return `⚠️ Customer not found.`;

//   let customerItem = customerOrder.items.includes(itemName);

//   if (customerOrder && customerItem) {
//     return `✅ Yes, ${customerName} ordered ${itemName}.`;
//   } else if (customerOrder && !customerItem) {
//     return `❌ ${customerName} didn’t order ${itemName}.`;
//   }
// }
// console.log(checkItem("Alice", "fries"));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise: “Product Inventory Checker”
You are managing a small online store’s product list.
The available products are stored in an array:

Create a function called checkProduct(product) that receives a product name as a parameter.

Inside the function, verify if the product exists in the inventory.

If it does, print a message like:
"✅ Product available: laptop"
Otherwise, print:
"❌ Sorry, this product is not in stock."

Test your function with at least three different products — some that exist and some that don’t.

 */

// const inventory = [
//   "laptop",
//   "mouse",
//   "keyboard",
//   "monitor",
//   "headphones",
//   "webcam",
//   "microphone",
// ];

// function checkProduct(product) {
//   const resultCheck = inventory
//     .map((item) => item.toLowerCase())
//     .includes(product.toLowerCase())
//     ? `✅ Product available: ${product}`
//     : `❌ Sorry, this product is not in stock.`;

//   return resultCheck;
// }

// console.log(checkProduct("keyboard"));
// console.log(checkProduct("mousepad"));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
