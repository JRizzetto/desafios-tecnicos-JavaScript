/* 1 -
 */

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 4 - Exercise: “Sales Report Analyzer”
You are analyzing monthly sales data from different regions.
Each region reports its weekly sales in nested arrays, like this:
Your tasks:

Transform all sales numbers into a single-level array, removing all internal arrays.

Keep only the sales values that are greater than or equal to 1000.

Give each remaining sale a 10% bonus, but make sure that no sale exceeds 2000 after the adjustment.

Calculate the total sum of all the adjusted sales.

Show in the console both the final list of sales (after the bonus) and the total amount.

 */

const regionalSales = [
  [1200, [1500, 800]],
  [900, [1100, [1300, 1000]]],
  [[700, 1600], 2000],
];

const sigleRegionalSales = regionalSales.flat(3);

const greaterValues = sigleRegionalSales.filter((value) => value > 1000);

const saleBonus = greaterValues.map((value) =>
  value * 1.1 > 2000 ? 2000 : value * 1.1
);
console.log(saleBonus);

const totalSum = saleBonus.reduce((acc, value) => (acc += value), 0);
console.log(`The total sum is: ${totalSum}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 3 - Exercise: Combining flat(), map(), and filter()
You manage a system that tracks product ratings from multiple stores.
Each store records ratings in arrays — but sometimes those arrays have nested arrays (for example, different departments in the same store).

Your task:
1 - Flatten the array of ratings completely.
2 - Filter out all invalid ratings (values lower than 1 or higher than 5).
3 - Increase each valid rating by 0.5, but make sure it doesn’t go over 5.

Show the new ratings array in the console.
 */

// const storeRatings = [
//   [4, 5, [3, 6]],
//   [2, [5, 1, [0]]],
//   [[3, 4], 5],
// ];

// const flattenRatings = storeRatings.flat(3);

// const invalidRating = flattenRatings.filter(
//   (value) => value >= 1 && value <= 5
// );

// const increaseRating = invalidRating.map((value) => {
//   let increaseValue = value + 0.5;

//   if (increaseValue >= 5) {
//     increaseValue = 5;
//   }

//   return increaseValue;
// });

// console.log(increaseRating);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Exercise:
You work in a company that stores sales data by region.
Each region has multiple branches, and each branch keeps a list of sales.

1 - Use .flat() to combine all sales into a single-level array.
2 - Calculate the total sales by summing all values.
3 - Print both the flattened array and the total sales in a clear way.
 */

// const salesData = [
//   [1200, 800, [600, 900]],
//   [400, [700, 300, [200]]],
//   [[1500, 1000], 500],
// ];

// const combineSalesData = salesData.flat(3);
// const summingValues = combineSalesData.reduce(
//   (acc, value) => (acc += value),
//   0
// );

// console.log(`The new flattened array is: ${combineSalesData}`);
// console.log(`Total calculate is: ${summingValues}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 -You have an array of customer orders, where each order contains a list of items purchased (nested arrays).
👉 Use .flat() to get a single array of all items purchased by all customers, no matter how deep they’re nested.
 */

// const orders = [
//   ["Laptop", "Mouse"],
//   ["Keyboard", ["Monitor", "HDMI Cable"]],
//   ["Headphones", ["Webcam", ["Microphone"]]],
// ];

// const neworders = orders.flat(3);
// console.log(neworders);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
