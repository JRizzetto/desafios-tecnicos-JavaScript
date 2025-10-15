/* 2 - Exercise: “Customer Queue Manager”
You’re managing a queue of customers waiting for service: 

1 - Extract the first 3 customers to create a new array called firstGroup.
2 - Extract the next 3 customers to create another array called secondGroup.
3 - Create an array remainingCustomers containing all customers after the 6th person.
4 - Print all three groups.
5 - Confirm that the original customers array was not changed.

*/

const customers = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
];

const firstGroup = customers.slice(0, 3);
console.log(firstGroup);

const secondGroup = customers.slice(3, 6);
console.log(secondGroup);

const remainingCustomers = customers.slice(6, customers.length);
console.log(remainingCustomers);

console.log(customers);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise: “Top Performers List”
A company wants to select the top-performing employees for a bonus.
The employees’ performance scores are already sorted from highest to lowest:
1 - Create a new array containing only the top 3 scores.
2 - Again to create another array containing the next 3 scores (4th to 6th place).
3 - Print both arrays.
4 - Print the original array to confirm it hasn’t been modified.
*/

// const performanceScores = [98, 95, 92, 88, 85, 82, 79, 75, 70, 68];

// const topThree = performanceScores.slice(0, 3);
// console.log(topThree);

// const anotherScores = performanceScores.slice(3, 6);
// console.log(anotherScores);

// console.log(performanceScores);
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
