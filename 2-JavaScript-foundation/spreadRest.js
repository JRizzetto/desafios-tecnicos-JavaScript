/* Exercise 11: Employee Management System
You have this data:
Your tasks:
1 - Destructure employees and departments from company, collecting the rest of the properties into companyInfo.
2 - Create a new array called updatedEmployees that spreads all the current employees and adds a new one:
{ name: "David", role: "Intern", salary: 2000 }

3 - Write a function calculateAverageSalary(...employees) that uses the rest operator and reduce() to calculate the average salary of all employees passed to it.
*/

const company = {
  name: "TechCorp",
  location: "Berlin",
  employees: [
    { name: "Alice", role: "Developer", salary: 5000 },
    { name: "Bob", role: "Designer", salary: 4000 },
    { name: "Charlie", role: "Manager", salary: 6000 },
  ],
  departments: ["IT", "Design", "HR"],
};



// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 10 - Library System
Your tasks:
1 - Destructure books and staff from the library, and collect the rest in libraryInfo.
2 - Create a new array updatedBooks that:
- Keeps all the existing books
- Adds a new book: { title: "Eloquent JavaScript", author: "Marijn Haverbeke", copies: 3 }
3 - Create a new object updatedLibrary that:
- Spreads libraryInfo
- Includes updatedBooks as books
- Keeps the existing staff
- Adds a new property established: 1950
4 - Print libraryInfo, updatedBooks, and updatedLibrary.
*/

// const library = {
//   name: "Central Library",
//   location: "New York",
//   books: [
//     { title: "1984", author: "George Orwell", copies: 4 },
//     { title: "Clean Code", author: "Robert C. Martin", copies: 2 },
//     { title: "You Don’t Know JS", author: "Kyle Simpson", copies: 5 },
//   ],
//   staff: [
//     { name: "Alice", role: "Librarian" },
//     { name: "Bob", role: "Assistant" },
//   ],
// };

// function updateLibrary(library) {
//   const { books, staff, ...libraryInfo } = library;

//   const updatedBooks = [
//     ...books,
//     { title: "Eloquent JavaScript", author: "Marijn Haverbeke", copies: 3 },
//   ];

//   const updatedLibrary = {
//     ...libraryInfo,
//     books: updatedBooks,
//     staff,
//     established: 1950,
//   };

//   return updatedLibrary;
// }
// const result = updateLibrary(library);
// console.log(result);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 9 - Updating a Team Roster
You have this object representing a team:
Your tasks:
1 - Use destructuring to extract members and coach from the object, and collect the remaining properties into otherInfo.

2 - Create a new array updatedMembers that:
-  Keeps all the existing members
-  Adds a new member: { name: "David", role: "Developer" }

3 - Create a new object updatedTeam that:
- Spreads otherInfo
-  Adds coach and updatedMembers
-  Adds a new property founded: 2023

4 - Print everything: coach, updatedMembers, otherInfo, and updatedTeam.
*/

// const team = {
//   name: "Dream Team",
//   coach: "John Doe",
//   members: [
//     { name: "Alice", role: "Developer" },
//     { name: "Bob", role: "Designer" },
//     { name: "Charlie", role: "QA" },
//   ],
//   location: "Lisbon",
// };

// let members = [];

// function updateTeam(team) {
//   const { coach, members, ...otherInfo } = team;

//   const updatedMembers = [...members, { name: "David", role: "Developer" }];
//   const updatedTeam = {
//     ...otherInfo,
//     coach,
//     members: updatedMembers,
//     founded: 2023,
//   };

//   return updatedTeam;
// }

// const result = updateTeam(team);
// console.log(result);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 8 - Exercise: Shopping Cart Function
You have a shopping cart object:
Your Tasks:
1 - Create a function checkout that:
- Takes a cart object as parameter
- Destructures items and discount
- Uses the rest operator to collect any extra properties into another variable

2 - Calculates:
- total → sum of price * quantity for all items
- finalPrice → total - total * discount

3 - Returns a new object with:
- All original cart properties
- total
- finalPrice
*/

// const cart = {
//   customer: "Alice",
//   items: [
//     { product: "Laptop", price: 1200, quantity: 1 },
//     { product: "Mouse", price: 50, quantity: 2 },
//     { product: "Keyboard", price: 100, quantity: 1 },
//   ],
//   discount: 0.1,
// };

// function checkoutFunction(cart) {
//   const { items, discount } = cart;

//   const totalItems = items.reduce(
//     (acc, value) => (acc += value.price * value.quantity),
//     0
//   );

//   const finalPrice = (1 - discount) * totalItems;

//   return { ...cart, total: totalItems, finalPrice };
// }
// const result = checkoutFunction(cart);
// console.log(result);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 7 - Real-world function scenario
You’re building a small utility for an online store.
You have a list of prices and want a function that:
1 - Accepts any number of prices (unknown quantity).
2 - Calculates the total sum.
3 - Adds an optional discount (default = 0).
4 - Returns an object showing both the total and final price after discount.

Your task:
Use the rest operator to gather all prices, calculate the total, and apply the discount.
Tip: use reduce() or a simple loop to sum the prices.
*/

// function calculateTotal(discount = 0, ...prices) {
//   let totalOfSum = prices.reduce((acc, value) => (acc += value));
//   let totalDiscount = totalOfSum - totalOfSum * discount;

//   return { sum: totalOfSum, discount: totalDiscount };
// }

// const result = calculateTotal(0.1, 100, 200, 300);
// console.log(result);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 6 - Nested Object + Spread & Rest
You have the following object:
🧩 Your tasks:
1 - Use destructuring to extract:
- brand
- specs
- and the rest of the properties in a variable called otherDetails.
2 - Then, create a new object called updatedCar using spread operator that:
- keeps all data from car;
- changes the color to "black" (without losing other specs info);
- adds a new property year: 2025.
*/

// const car = {
//   brand: "Tesla",
//   model: "Model 3",
//   specs: {
//     color: "red",
//     battery: "75 kWh",
//     range: "500 km",
//   },
//   features: {
//     autopilot: true,
//     connectivity: "premium",
//   },
// };

// const { brand, specs, ...otherDetails } = car;
// console.log(brand);
// console.log(specs);
// console.log(otherDetails);

// const updatedCar = {
//   ...car,
//   specs: { ...car.specs, color: "Black" },
//   year: 2025,
// };

// console.log(updatedCar);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 5 — Nested Object + Spread & Rest
You have this object representing a user profile:
Your Tasks:
1 - Use object destructuring with rest to:
- Extract name and contact
- Collect the remaining properties into otherInfo

 2 - Then use the spread operator to create a new object updatedUser that:
 - Copies all properties from user
 - Updates contact.phone to "987-654-321"
- Adds a new property membership: "gold"
2 - Print everything to check your results.
*/

// const user = {
//   id: 101,
//   name: "Alice",
//   contact: {
//     email: "alice@email.com",
//     phone: "123-456-789",
//   },
//   address: {
//     city: "Lisbon",
//     country: "Portugal",
//   },
//   premium: true,
// };

// const { name, contact, ...otherInfo } = user;

// console.log(name);
// console.log(contact);
// console.log(otherInfo);

// const updatedUser = {
//   ...user,
//   contact: { ...user.contact, phone: "987-654-321" },
//   membership: "gold",
// };
// console.log(updatedUser);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4 — Spread & Rest with Objects
Here’s your scenario 👇
Your Tasks:
 1 - Use object destructuring with rest to:
 - Extract only name and price
 - Collect the remaining properties into a new object called others

 2 - Then use the spread operator to:
- Create a new object called updatedProduct
- Copy everything from product
- Update the price to 999
- Add a new property discount: true
3 - Print all variables to check your result.
*/

// const product = {
//   id: 1,
//   name: "Smartphone",
//   brand: "TechX",
//   price: 1200,
//   color: "black",
//   stock: 30,
// };

// const { name, price, ...others } = product;

// console.log(name);
// console.log(price);
// console.log(others);

// const updatedProduct = { ...product, price: 999, discount: true };
// console.log(updatedProduct);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 — Spread + Rest Operators
Here’s your scenario 👇
Your Tasks:
1 - Use array destructuring with rest to:
- Extract the first two numbers into variables first and second
- Collect the remaining numbers into a new array others
2 - Then use the spread operator to:
- Create a new array newNumbers that starts with [5, ...numbers, 60]
3 - Print all of them.
💡 Example of what you should end up with:
first → 10
second → 20
others → [30, 40, 50]
newNumbers → [5, 10, 20, 30, 40, 50, 60]
*/

// const numbers = [10, 20, 30, 40, 50];

// const [firstNumber, secondNumber, ...remainingNumbers] = numbers;

// const newArray = [5, ...numbers, 60];

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(remainingNumbers);
// console.log(newArray);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 — Spread with Objects
Use the spread operator to merge two objects and add a new property.
Goal:
Create a new object userInfo like this:
{ name: "Alice", age: 25, email: "alice@email.com", country: "Brazil" }
*/

// const user = { name: "Alice", age: 25 };
// const contact = { email: "alice@email.com" };

// const newObject = { ...user, ...contact, country: "Brazil" };

// console.log(newObject);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 — Spread Operator (Easy)
You have two arrays of numbers.
Use the spread operator to merge them into one array and print the result.
Goal:
Create mergedArray → [1, 2, 3, 4, 5, 6]
*/

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArray = [...arr1, ...arr2];

// Your code here

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
