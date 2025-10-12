/* 2 - Exercise — Employee Performance Review
You have the following array of employees:

1 - Check if every employee met or exceeded their target ().
2 - Check if at least one employee exceeded their target by more than 3 tasks ().
3 - Show messages in the console like:

- "All employees met the target!" or "Some employees did not meet the target."
- "At least one employee greatly exceeded the target!" or "No one exceeded the target by more than 3 tasks."
*/

const employees = [
  { name: "Alice", tasksCompleted: 10, target: 8 },
  { name: "Bob", tasksCompleted: 7, target: 8 },
  { name: "Charlie", tasksCompleted: 12, target: 8 },
  { name: "David", tasksCompleted: 9, target: 8 },
];

const metTarget = employees.every(
  (employee) => employee.tasksCompleted >= employee.target
);

console.log(
  metTarget
    ? `All employees met the target!`
    : `Some employees did not meet the target.`
);

const exceededTarget = employees.some(
  (employee) => employee.tasksCompleted > employee.target + 3
);
console.log(
  exceededTarget
    ? `At least one employee greatly exceeded the target!`
    : `No one exceeded the target by more than 3 tasks.`
);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise — Quality Check
You’re managing a quality control system. Each batch of products must pass inspection.

1 - Use .every() to check if all batches passed inspection.
2 - Print:
"All batches passed inspection!" if true, or
"Some batches failed inspection." if false.
*/

// const batches = [
//   { id: 1, passed: true },
//   { id: 2, passed: true },
//   { id: 3, passed: true },
//   { id: 4, passed: false },
// ];

// const passedInspection = batches.every((batch) => batch.passed);
// console.log(passedInspection);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
