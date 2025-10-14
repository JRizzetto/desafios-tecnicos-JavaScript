/* 1 - “Monthly Sales Merger”
You work at a company that stores the monthly sales of its departments separately.
Your task is to combine all these sales into one array and perform some analysis.
Instructions:
1 - Combine all department sales into a single array.
2 - Add a new array with online sales: [2000, 2500] to the result.
3 - Print the total number of sales entries (how many sales values there are).
4 - Use another method (of your choice) to find out how many sales are above 1500.
5 - Print both the combined array and the number of sales above 1500.
*/

const electronics = [1200, 1800, 950];
const clothing = [800, 1100, 1500];
const furniture = [2200, 1750];

const allDepartments = electronics.concat(clothing, furniture, [2000, 2500]);

const salesAbove1500 = allDepartments.filter((value) => value > 1500);

console.log(`Combined array: ${allDepartments.join(", ")}.`);
console.log(`Sales above 1500: ${salesAbove1500.join(", ")}.`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
