/*
Step 1
In this workshop, you'll learn how to work with conditional statements and comparison operators.

Begin by declaring a variable named truthyOrFalsy and assign it the boolean value true.
*/

let truthyOrFalsy = true;

/*
Step 2
As you learned in a previous lesson, booleans are a data type with only true and false values.

A truthy value is a value that evaluates to true in a boolean context. Examples of truthy values are:

Non-empty strings
Non-zero numbers
The boolean true
And other values you'll meet later on.

You can use the Boolean() function to check the truthiness of a value. For example, Boolean("Hello World!") will return true because "Hello World!" is truthy.

Now, call Boolean(truthyOrFalsy) and log the result to the console.
*/

console.log(Boolean(truthyOrFalsy));

/*
Step 3
Change the assignment of truthyOrFalsy by setting its value to "freeCodeCamp". You will still see true logged to the console because a non-empty string is a truthy value.
*/

// const truthyOrFalsy = "freeCodeCamp";

console.log(Boolean(truthyOrFalsy));

/*
Step 4
Falsy values are values that evaluate to false in a boolean context. Examples of falsy values are:

"" (empty string)
0
false
null
undefined
NaN
You'll meet all of these going through this coursework.

For now, change the assignment of truthyOrFalsy by setting its value to an empty string. After that, you'll see false logged to the console.
*/

// const truthyOrFalsy = "";

console.log(Boolean(truthyOrFalsy)); // False

/*
Step 5
Now that you know what truthy and falsy values are, remove both your variable declaration and console.log statement from your code.
*/

console.log(Boolean()); // false

/*
Step 6
Declare a variable named hasDeveloperJob and assign it the boolean value true
*/

let hasDeveloperJob = true;

/*
Step 7
A conditional statement is used to run code depending on a condition. It is composed of the if keyword, followed by a condition enclosed by parentheses, and a body enclosed by curly braces. Here's an example of an if statement:

Example Code
if (condition) {
  console.log("condition is truthy");
}
When condition is a truthy value (non-empty string, non-zero number, true, etc.) the code within the if statement's body is executed.

Below your variable, create an if statement that uses hasDeveloperJob as its condition. Within the body of your if statement, log "Timmy is employed as a developer." to the console.
*/

// const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

/*

*/

/*

*/

/*

*/
