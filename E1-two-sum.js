/*
1. Two Sum
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 10^4
-109 <= nums[i] <= 10^9
-109 <= target <= 10^9
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// -----------------------------------------------------------------------------------

// var twoSum = function (nums, target) {
//   nums = [18, 13, 20, 9, 15, 22];
//   target = 40;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i != j) {
//         return (`Primeiro: ${i} - Segundo ${j}`);
//       }
//     }
//   }
// };

// console.log(twoSum());

var twoSum = function (nums, target) {
  const newNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    const getNumber = target - nums[i];

    if (newNums.has(getNumber)) {
      return [newNums.get(getNumber), i];
    }

    newNums.set(nums[i], i);
    console.log(getNumber);
  }

  return newNums;
};

let nums = [18, 13, 20, 9, 15, 22];
let target = 40;

console.log(twoSum(nums, target));
