/* 3 - Exercise: Combining flat(), map(), and filter()
You manage a system that tracks product ratings from multiple stores.
Each store records ratings in arrays — but sometimes those arrays have nested arrays (for example, different departments in the same store).

Your task:
1 - Flatten the array of ratings completely.
2 - Filter out all invalid ratings (values lower than 1 or higher than 5).
3 - Increase each valid rating by 0.5, but make sure it doesn’t go over 5.

Show the new ratings array in the console.
 */

const storeRatings = [
  [4, 5, [3, 6]],
  [2, [5, 1, [0]]],
  [[3, 4], 5],
];

const flattenRatings = storeRatings.flat(3);

const invalidRating = flattenRatings.filter(
  (value) => value >= 1 && value <= 5
);

const increaseRating = invalidRating.map((value) => {
  let increaseValue = value + 0.5;

  if (increaseValue >= 5) {
    increaseValue = 5;
  }

  return increaseValue;
});

console.log(increaseRating);

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
