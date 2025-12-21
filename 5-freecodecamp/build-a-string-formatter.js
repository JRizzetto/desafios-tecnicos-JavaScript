/* 
Step 1
In this workshop, you will practice working with various string methods used for formatting strings.
Start by creating a variable called userInput and assign it the following value: "   Hello World!   ".
*/

let userInput = "   Hello World!   ";

/* 
Step 2
Next, add a console.log() with the string "Original input:".
*/

console.log("Original input:");

/* 
Step 3
Below your first console.log(), add another console.log() to log the userInput variable to the console.
*/

console.log(userInput);

/* 
Step 4
Create a variable named cleanedInput and assign it the result of using the trim() method on the userInput variable.
*/

let cleanedInput = userInput.trim();

/* 
Step 5
Now it is time to see the result.
Start by adding a console.log() with the string "Result of trimming whitespace from both ends:".
Then below that console.log(), add another console.log() with the cleanedInput variable.
*/

console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

/* 
Step 6
Create a variable trimmedStart and assign it the result of using the trimStart() method on the userInput variable.
*/

let trimmedStart = userInput.trimStart();

/* 
Step 7
Create a variable trimmedStart and assign it the result of using the trimStart() method on the userInput variable.
*/

console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

/* 
Step 8
Create a variable called trimmedEnd and assign it the result of using the trimEnd() method on the userInput variable.
*/

let trimmedEnd = userInput.trimEnd();

/* 
Step 9
Now it is time to see the results of trimming whitespace at the end of the string.

Below your trimmedEnd variable, add a console.log() with the string "After using the trimEnd() method, trailing spaces removed:".

Then below that console.log(), add another console.log() with the trimmedEnd variable.
*/

console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

/* 
Step 10
There will be times where you will need to create a new string with a different casing.
To create a new string with all of the letters converted to uppercase, you can use the toUpperCase() method.
Create a variable called upperCaseInput and assign it the result of using the toUpperCase() method on the cleanedInput variable.
*/

let upperCaseInput = cleanedInput.toUpperCase();

/* 
Step 11
Now it is time to see the results.
Below your upperCaseInput variable, add a console.log() with the string "Result of using the toUpperCase() method:".
Then below that console.log(), add another console.log() with the upperCaseInput variable.
*/

console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

/* 
Step 12
If you need to create a new string where all of the letters are in lowercase, you can use the toLowerCase() method.
Start by creating a variable called lowerCaseInput and assign it the result of using the toLowerCase() method on the cleanedInput variable.
Then log the string "Result of using the toLowerCase() method:".
Finally, add another console.log() for the lowerCaseInput variable.
*/

let lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

/* 
Step 13
There will be times where you will need to use multiple methods to create a new string. Over the next few steps, you will use some of the methods you have learned so far to create a new string that uses the camelCase naming convention.
Start by creating a variable called lowercaseWord and assign it the string "camelcase".
Below that lowercaseWord variable, create another variable called camelCasedVersion and assign it an empty string for now.
Below that camelCasedVersion variable, add a console.log() with the string "Camel cased version:" followed by another console.log() for the camelCasedVersion variable.
*/

let lowercaseWord = "camelcase";
// let camelCasedVersion = "";
console.log("Camel cased version:");
// console.log(camelCasedVersion);

/* 
Step 14
As you recall from earlier lessons and workshops, you can extract portions of a string by using the slice() method.
Change the value of the camelCasedVersion from an empty string to the result of using the slice() method on the lowercaseWord variable. 
Pass in the number 0 and 5 which represent the start and end indices for the slice() method.
Now you should see the word "camel" in the console.
*/

// const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5];

/* 
Step 15
As you recall from earlier lessons, the camelCase naming convention starts with a lowercase letter for the first word, 
and each subsequent word begins with an uppercase letter followed by lowercase letters.
The second word in the lowercaseWord variable is "case". To access the c in that word, you can use lowercaseWord[5].
Use the + operator to concatenate lowercaseWord.slice(0, 5) with the result of using the correct method for converting strings to uppercase on lowercaseWord[5].
Now you should see camelC in the console.
*/

// const camelCasedVersion =
//   lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();
// console.log(camelCasedVersion);

/* 
Step 16
As you recall from earlier lessons, the camelCase naming convention starts with a lowercase letter for the first word, 
and each subsequent word begins with an uppercase letter followed by lowercase letters.
The second word in the lowercaseWord variable is "case". To access the c in that word, you can use lowercaseWord[5].
Use the + operator to concatenate lowercaseWord.slice(0, 5) with the result of using the correct method for converting strings to uppercase on lowercaseWord[5].
Now you should see camelC in the console.
*/

const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);
console.log(camelCasedVersion);
