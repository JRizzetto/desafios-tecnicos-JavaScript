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
