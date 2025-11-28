// Step 1 - To begin, add a console statement, with the message of "Hi there!".
console.log("Hi there!");

// Step 2 - Create a variable called botName and assign it the string value of "teacherBot".
const botName = "teacherBot";

// Step 3 - Start by creating a variable called greeting.
// Next, using template literal syntax, assign a string that says My name is, followed by the botName variable, and ending with a period (.).
// Finally, log the greeting variable to the console.
const greeting = `My name is ${botName}.`;
console.log(greeting);

// Step 4 - Create a variable called subject and assign it the string value "JavaScript".
// Then create a variable called topic and assign it the string value "strings".
const subject = "JavaScript";
const topic = "strings";

/* Step 5
Start by creating a sentence variable.
Using template literal syntax, assign the string Today, you will learn about [topic variable goes here] in [subject variable goes here]. to the sentence variable.
You will replace the [topic variable goes here] and [subject variable goes here] placeholders with the topic and subject variables and ${} syntax.
*/
const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

/* Step 6
For this next portion of the project, the bot will teach working with the string length property.
Start by creating a new variable called strLengthIntro.
Then using template literal syntax, assign the string Here is an example of using the length property on the word [subject]. to the strLengthIntro variable.
Replace [subject] with the subject variable like you did earlier.
Finally, log the strLengthIntro variable to the console.
*/
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

/* Step 7
Start by using the length property to get the length of the subject string and log that value to the console.
*/
console.log(subject.length);

/* Step 8
Start by outputting the message Here is an example of using the length property on the word [topic]. to the console.
Remember to replace [topic] with the topic variable, and use proper template literal syntax as you did in the previous steps.
Then, add a second console.log statement that outputs the length of the topic string to the console.
*/
console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(topic.length);

/* Step 9
The next part of this workshop is to review accessing characters from a string.
Start by outputting the message Here is an example of accessing the first letter in the word [subject]. to the console.
Remember to replace [subject] with the subject variable and use proper template literal syntax like you did in the previous steps.
*/
console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

/* Step 10
Start by adding another console statement.
Inside the console statement, output the first letter of the subject variable using bracket notation and the correct index number.
*/
console.log(subject[0]);

/* Step 11
Now it is time to access the second letter of the subject variable.
Start by adding a console statement that outputs the message Here is an example of accessing the second letter in the word [subject]. Remember to replace [subject] with the actual value of the subject variable and use correct template literal syntax.
Then add another console statement that outputs the second letter of the subject variable using bracket notation and the correct index number.
*/
console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);
console.log(subject[1]);

/* Step 12
Now it is time to access the last character of a string.
Start by adding another console statement that outputs the message Here is an example of accessing the last letter in the word [subject].
Remember to replace [subject] with the actual value of the subject variable and use correct template literal syntax.
*/
console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

/* Step 13
Create a new variable called lastCharacter and assign it the value of the last character in the subject variable.
Then, log the value of the lastCharacter variable to the console.
*/
const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

/* Step 14
For the last part of the workshop, you will review how to find the index position of substring in a string. Remember that a substring is a part of a string.
Start by creating a variable called learningIsFunSentence and assign it the string value of "Learning is fun.".
*/
const learningIsFunSentence = "Learning is fun.";

/* Step 15
The next step is to add another console statement that outputs the string "Here are examples of finding the positions of substrings in the sentence.".
*/
console.log(
  "Here are examples of finding the positions of substrings in the sentence."
);

/* Step 16
Add a new console statement that outputs the result of using the indexOf method on the learningIsFunSentence variable to find the index position of the substring "Learning".
*/
console.log(learningIsFunSentence.indexOf("Learning"));

/* Step 17
Next, you will add a new console statement that outputs the result of using the indexOf method on the learningIsFunSentence variable to find the position of the substring "fun".
Below that console statement, add a new console statement that outputs the result of using the indexOf method to find the position of the substring "learning".
Take note of what the last console statement outputs.
*/
console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

/* Step 18
The last console statement outputs -1 because the substring "learning" is not found in the "Learning is fun. sentence.
The indexOf method is case-sensitive. So the substring "learning" is not the same as the substring "Learning".
Now that you understand how some common string methods work, you can complete the workshop by logging one last message to the console.
Add a console statement that outputs the message "I hope you enjoyed learning today." to the console.
*/
console.log("I hope you enjoyed learning today.");

console.log(String.fromCharCode(66));