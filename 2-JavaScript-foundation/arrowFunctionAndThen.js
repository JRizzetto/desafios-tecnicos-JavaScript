/* Exercise 7 - Map with Arrow Functions
You have this array of numbers:
Task:
1 - Use map with a regular function to create a new array with each number doubled.
2 - Use map again, but with an arrow function, to do the same thing.
*/

const numbers = [1, 2, 3, 4, 5];

// Regular Function
function regularNumbers() {
  const newNumbers = numbers.map((number) => number * 2);
  return newNumbers;
}
const regularResult = regularNumbers();
console.log(regularResult);

// Arrow Function
const arrownumbers = () => numbers.map((number) => number * 2);

const arrowResult = arrownumbers();
console.log(arrowResult);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 6 - Simple Arrow Function
1 - Create a regular function called square that receives a number and returns its square.
2 - Then, rewrite it as an arrow function called squareArrow.

Your task: write both versions, run them, and see that they give the same result.

*/

// // Regular function
// function square(number) {
//   return number * number;
// }

// // Arrow function
// const squareArrow = (number) => {
//   return number * number;
// };

// // Test them
// console.log(square(5)); // should print 25
// console.log(squareArrow(5)); // should print 25

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 5 - Exercise Object Arrown Function
const classroom = {
  teacher: "Mr. Smith",
  students: ["Alice", "Bob", "Charlie", "David"],
};

Your Task:
- Create a method inside classroom that prints each student’s name prefixed by the teacher’s name, like:
Mr. Smith teaches Alice
Mr. Smith teaches Bob
...

- Use an arrow function inside the method so this.teacher works correctly.
*/

// const classroom = {
//   teacher: "Mr. Smith",
//   students: ["Alice", "Bob", "Charlie", "David"],
//   printStudents: function () {
//     this.students.map((student) => {
//       console.log(`${this.teacher} teaches ${student}`);
//     });
//   },
// };
// classroom.printStudents();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4 - Regular vs Arrow Functions
You have the object below:
Your Tasks:
1 - Call both methods:
team.printMembersRegular();
team.printMembersArrow();
2 - Observe the output.
3 - Explain in words:
Why does printMembersRegular not work as expected?
Why does printMembersArrow work and correctly logs the team name with each member?

*/

// const team = {
//   name: "Dream Team",
//   members: ["Alice", "Bob", "Charlie"],

//   // Regular function method
//   printMembersRegular: function () {
//     this.members.forEach(function (member) {
//       console.log(this.name + ": " + member);
//     });
//   },

//   // Arrow function method
//   printMembersArrow: function () {
//     this.members.forEach((member) => {
//       console.log(this.name + ": " + member);
//     });
//   },
// };

// team.printMembersRegular();
// team.printMembersArrow();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - Arrow Functions vs Regular Functions
You have the object below:
👉 Your task:
1 - Call both methods:
counter.regularIncrement();
counter.arrowIncrement();

2 - Observe the result.
3 - Explain why one of them works (increments the value) and the other doesn’t.

*/

// const counter = {
//   value: 0,
//   regularIncrement: function () {
//     setTimeout(function () {
//       this.value++;
//       console.log("Regular Function:", this.value);
//     }, 1000);
//   },
//   arrowIncrement: function () {
//     setTimeout(() => {
//       this.value++;
//       console.log("Arrow Function:", this.value);
//     }, 1000);
//   },
// };

// counter.regularIncrement();
// counter.arrowIncrement();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 - Basic this behavior
Task:
1 - Use .map() inside showHobbies.
2 - Use an arrow function to print each hobby in the format:
"Alice likes reading"

Hint: Use this.name inside the arrow function.
*/

// const person = {
//   name: "Alice",
//   hobbies: ["reading", "traveling", "coding"],
//   showHobbies: function () {
//     this.hobbies.map((hobby) => {
//       const eachHobby = () => {
//         console.log(`${this.name} likes ${hobby}`);
//       };
//       eachHobby();
//     });
//   },
// };

// person.showHobbies();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
