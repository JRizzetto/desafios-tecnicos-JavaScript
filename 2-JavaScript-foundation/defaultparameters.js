/* Exercise 6 - Online Course Pricing
Create an arrow function called calculateCoursePrice that:
Has the following default parameters:
basePrice = 100
tax = 0.1 (10%)
discount = 0
student = "Guest"

Calculates the final price with the formula:
final = basePrice + basePrice * tax - discount

Returns a string (using template literals) like:
Student: Alice
Base price: $100
Tax: $10
Discount: $20
Final price: $90

✅ Bonus challenge:
If discount is not provided, it should automatically be 0.
If student is "Guest", display:
"Welcome, Guest! Sign up to get discounts."
*/

const calculateCoursePrice = (
  basePrice = 100,
  tax = 0.1,
  discount = 0,
  student = "Guest"
) => {
  const final = basePrice + basePrice * tax - discount;

  if (student === "Guest") {
    return `Welcome, ${student}! Sign up to get discounts.`;
  }

  return `
  Student: ${student}
  Base price: $${basePrice}
  Tax: $${tax}
  Discount: $${discount}
  Final price: $${final}
  `;
};

console.log(calculateCoursePrice(200, 0.2, 0, "Pedro"));
console.log(calculateCoursePrice());

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 5 - Travel Cost Calculator
Create a function called calculateTripCost that receives:
Parameter: destination, days, dailyRate, transportCost, discount
Default Value: "Unknown", 1, 100, 0, 0, 
Description: 
Name of the destination
Number of days of the trip
Cost per day
Extra cost for transport
Discount in money
*/

// function calculateTripCost(
//   destination = "Unknown",
//   days = 1,
//   dailyRate = 100,
//   transportCost = 0,
//   discount = 0
// ) {
//   const total = days * dailyRate + transportCost - discount;

//   return `
//   Name of the destination: ${destination}
//   Number of days of the trip: ${days}
//   Cost per day: ${dailyRate}
//   Extra cost for transport: ${transportCost}
//   Discount in money: ${discount}
//   Total is: ${total}
//   `;
// }

// console.log(calculateTripCost("São Paulo", 5, 100, 20, 0));
// console.log(calculateTripCost());

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4
Create a function called generateInvoice that receives:
customer (string)
items (array of objects like { name, price, quantity })
 (default = 0.1 → 10%)
discount (default = 0 → no discount)

Your function should:
Calculate the subtotal (sum of price * quantity).
Apply the tax and then subtract the discount.
Return a template literal summary, like this:

Invoice for Alice
Subtotal: $120
Tax (10%): $12
Discount: $0
Total: $132
*/

// function generateInvoice(customer, items = [], tax = 0.1, discount = 0) {
//   const subtotal = items.reduce(
//     (acc, item) => (acc += item.price * item.quantity),
//     0
//   );

//   const calcTax = tax * subtotal;
//   const total = subtotal + calcTax - discount;

//   return `Invoice for ${customer}
//           Subtotal: $${subtotal}
//           Tax (10%): $${calcTax}
//           Discount: $${discount}
//           Total: $${total}
//           `;
// }

// console.log(
//   generateInvoice("Alice", [{ name: "pedra", price: 60, quantity: 2 }])
// );

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 — Easy
Create a function called calculatePrice that:

Receives three parameters:
price
tax (default = 0.1)
discount (default = 0)

Calculates the final price using this formula:
finalPrice = price + (price * tax) - (price * discount)

Returns a string like:
"Final price after tax and discount: $110"

Extra challenge:
If no value is passed at all, price should default to 100.
*/

// function calculatePrice(price = 100, tax = 0.1, discount = 0) {
//   const finalPrice = price + price * tax - price * discount;

//   return `Final price after tax and discount: $${finalPrice}`;
// }

// console.log(calculatePrice(100, 0.2, 0.2));
// console.log(calculatePrice());

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 — Easy
Create a function called createUser that takes three parameters:
name (string)
age (number)
country (string, default should be "Unknown")

The function should return a string like:
Name: Alice, Age: 30, Country: USA

If no country is passed, it should print:
Name: Alice, Age: 30, Country: Unknown
*/

// function createUser(name, Age, Country = "Unknown") {
//   console.log(`Name: ${name}, Age: ${Age}, Country: ${Country}`);
// }

// createUser("Alice", 30, "USA");
// createUser("Alice", 30);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
