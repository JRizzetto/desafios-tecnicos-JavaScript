/* Exercise 9 – Bank Transactions
You have a list of bank accounts, and each account contains an array of transactions (positive values = deposits, negative = withdrawals).
Your tasks:
1 - Keep only active accounts (active: true).
2 - For each active account, calculate the final balance (sum of all transactions).
3 - Return a new array like this:
4 - Then calculate the total money in the bank (sum of all balances from active accounts).
*/

// const accounts = [
//   {
//     name: "Alice",
//     active: true,
//     transactions: [1000, -200, 500, -100],
//   },
//   {
//     name: "Bob",
//     active: false,
//     transactions: [2000, -500, -100],
//   },
//   {
//     name: "Charlie",
//     active: true,
//     transactions: [1500, -700, 300],
//   },
//   {
//     name: "David",
//     active: true,
//     transactions: [800, -200, 200],
//   },
// ];

// const activeAcount = accounts.filter((account) => account.active);

// const finalBalance = activeAcount.map((account) => {
//   const balance = account.transactions.reduce(
//     (acc, value) => (acc += value),
//     0
//   );

//   return {
//     name: account.name,
//     balance: balance,
//   };
// });

// console.log(finalBalance);

// const totalMoney = finalBalance.reduce(
//   (acc, account) => acc + account.balance,
//   0
// );

// console.log(totalMoney);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 8 – Online Course Progress
You’re given a list of students and the courses they’re taking.
Each course includes how many lessons it has and how many lessons the student has completed.
Your tasks:
1 - Find only the students who are actively studying (active = true).
2 - For each active student, calculate their average completion percentage across all their courses.
3 - Return a list like this:
*/
// const students = [
//   {
//     name: "Alice",
//     active: true,
//     courses: [
//       { title: "JavaScript", completed: 18, total: 20 },
//       { title: "React", completed: 15, total: 20 },
//     ],
//   },
//   {
//     name: "Bob",
//     active: false,
//     courses: [
//       { title: "HTML", completed: 5, total: 10 },
//       { title: "CSS", completed: 8, total: 10 },
//     ],
//   },
//   {
//     name: "Charlie",
//     active: true,
//     courses: [
//       { title: "Node.js", completed: 8, total: 20 },
//       { title: "MongoDB", completed: 12, total: 20 },
//     ],
//   },
// ];

// const activeStudents = students.filter((student) => student.active);
// // console.log(activeStudents);

// const completioPercentage = activeStudents.map((student) => {
//   const newComplet = student.courses.map((course) => {
//     const newCompleted = student.courses.reduce(
//       (acc, course) => (acc = course.completed / course.total),
//       0
//     );

//     return {
//       title: course.title,
//       newCompleted,
//     };
//   });
//   return {
//     name: student.name,
//     active: student.active,
//     courses: newComplet,
//   };
// });
// console.log(completioPercentage);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 7 – Shopping Cart Summary
You have a list of customers, and each one has a shopping cart with several products:
1 - Create a list showing each customer’s name and the total amount spent on their cart.
2 - From that list, find only customers who spent more than 1000.
3 - Calculate the total amount spent by all customers combined.
*/
// const customers = [
//   {
//     name: "Alice",
//     cart: [
//       { product: "Laptop", price: 3000, quantity: 1 },
//       { product: "Mouse", price: 100, quantity: 2 },
//     ],
//   },
//   {
//     name: "Bob",
//     cart: [
//       { product: "Keyboard", price: 200, quantity: 1 },
//       { product: "Monitor", price: 900, quantity: 1 },
//     ],
//   },
//   {
//     name: "Charlie",
//     cart: [
//       { product: "Headphones", price: 250, quantity: 2 },
//       { product: "USB Cable", price: 50, quantity: 4 },
//     ],
//   },
// ];

// const amountSpend = customers.map((customer) => {
//   const total = customer.cart.reduce(
//     (acc, cartCustomer) => (acc += cartCustomer.price * cartCustomer.quantity),
//     0
//   );

//   return {
//     name: customer.name,
//     total: total,
//   };
// });
// console.log(amountSpend);

// const spendMoreThousand = amountSpend
//   .filter((costumer) => costumer.total > 1000)
//   .map((costumer) => costumer.name);
// console.log(spendMoreThousand);

// const totalAmount = amountSpend.reduce(
//   (acc, costumer) => (acc += costumer.total),
//   0
// );
// console.log(totalAmount);
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 6 – Company Employee Salaries
You have this list of employees in a company:
1 - Create a list containing only active employees.
2 - Increase each active employee’s salary by 10%.
3 - Calculate the total monthly payroll (sum of all new salaries).
4 - (Optional) Create a list that shows only the names and updated salaries.
*/
// const employees = [
//   { name: "Alice", department: "Sales", salary: 4000, active: true },
//   { name: "Bob", department: "HR", salary: 3000, active: false },
//   { name: "Charlie", department: "IT", salary: 5000, active: true },
//   { name: "David", department: "Sales", salary: 3500, active: true },
//   { name: "Eve", department: "IT", salary: 4500, active: false },
//   { name: "Frank", department: "HR", salary: 3200, active: true },
// ];

// const activeEmployees = employees.filter((employee) => employee.active);

// const newEmployeesSalary = activeEmployees.map((employee) => {
//   const newSalary = employee.salary * 1.1;

//   return {
//     ...employee,
//     salary: parseInt(newSalary),
//   };
// });
// console.log(newEmployeesSalary);

// const monthlyPayroll = newEmployeesSalary.reduce(
//   (acc, employee) => (acc += employee.salary),
//   0
// );
// console.log(monthlyPayroll);

// const namesNewSalary = newEmployeesSalary.map((employee) => {
//   return {
//     name: employee.name,
//   };
// });
// console.log(namesNewSalary);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 5 – Students and Grades
You have a list of students with their grades and whether they passed the course or not:
1 - Create a list of approved students’ names only.
2 - For each approved student, calculate their average grade.
3 - Calculate the overall average grade of all approved students combined.
*/
// const students = [
//   { name: "Alice", grades: [8, 7, 9], passed: true },
//   { name: "Bob", grades: [5, 6, 5], passed: false },
//   { name: "Charlie", grades: [9, 8, 10], passed: true },
//   { name: "David", grades: [6, 5, 7], passed: false },
//   { name: "Eve", grades: [10, 9, 9], passed: true },
// ];

// const approvedStudent = students.filter((student) => student.passed);

// const studentAverages = approvedStudent.map((student) => {
//   const avarege =
//     student.grades.reduce((acc, grade) => acc + grade, 0) /
//     student.grades.length;

//   return {
//     name: student.name,
//     avarege: parseFloat(avarege.toFixed(2)),
//   };
// });

// const overallAverage =
//   studentAverages.reduce((acc, student) => {
//     acc += student.avarege;

//     return acc;
//   }, 0) / studentAverages.length;

// console.log(studentAverages);
// console.log(overallAverage.toFixed(2));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4 – Online Store Report (Discover the methods)
You have this array of orders:
- Create a list of totals for all orders that have already been delivered, 
where each total is the number of items multiplied by the price per item.
- Calculate the total revenue from all delivered orders.
- Calculate the total number of items sold in delivered orders.
*/
// const orders = [
//   { id: 1, customer: "Alice", items: 3, pricePerItem: 50, delivered: true },
//   { id: 2, customer: "Bob", items: 1, pricePerItem: 50, delivered: false },
//   { id: 3, customer: "Charlie", items: 4, pricePerItem: 50, delivered: true },
//   { id: 4, customer: "David", items: 2, pricePerItem: 40, delivered: true },
//   { id: 5, customer: "Eve", items: 5, pricePerItem: 60, delivered: false },
// ];

// const deliveredOrders = orders
//   .filter((order) => order.delivered)
//   .map((order) => {
//     const totalItem = order.items * order.pricePerItem;
//     return {
//       ...order,
//       total: totalItem,
//     };
//   });

// const totalRevenue = deliveredOrders.reduce(
//   (acc, order) => (acc += order.total),
//   0
// );

// const totalSoldItems = deliveredOrders.reduce(
//   (acc, order) => (acc += order.items),
//   0
// );

// console.log(totalRevenue);
// console.log(totalSoldItems);
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
