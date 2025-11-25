/*
Step 1
Add a console.log() statement that outputs the string "Hi there!" to the console. Don't forget your quotes around the message!
*/

console.log("Hi there!");

/*
Step 2
Add another console.log statement to output the message "I am excited to talk to you." to the console.
*/

console.log("I am excited to talk to you.");

/*
Step 3
Use the let keyword to declare a variable called bot.
NOTE: You are using let here because later on in the workshop, you will be changing the value of the bot variable.
*/

let bot;

/*
Step 4
Assign the string "teacherBot" to the bot variable.
*/

bot = "teacherBot";

/*
Step 5
Declare and assign the string "the universe" to the botLocation variable on the same line using the let keyword.
*/

let botLocation = "the universe";

/*
Step 6
Add another console statement to the code that logs the message "Allow me to introduce myself.".
*/

console.log("Allow me to introduce myself.");

/*
Step 7
Create a variable called botIntroduction.
Then use string concatenation with the + operator to join the string "My name is " followed by the bot variable followed by a period (.).
Assign this value to the botIntroduction variable.
Then, log the botIntroduction variable to the console.
*/

let botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

/*
Step 8
The next message from the bot will concern the bot's location.
Create a variable called botLocationSentence.
Then use string concatenation with the + operator to join the string "I live in " with the botLocation variable followed by a period (.).
Assign this value to the botLocationSentence variable.
Then, log the value of botLocationSentence to the console.
*/

let botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

/*
Step 9
In previous lessons, you learned how to reassign values to variables like this:
Example Code
let name = "John";
console.log(name); // "John"
name = "Jane";
console.log(name); // "Jane"
Using reassignment, assign the string "professorBot" to the bot variable.
*/

bot = "professorBot";

/*
Step 10
Now it is time to see the new bot value.
Start by creating a new variable called nicknameIntroduction.
Use string concatenation to join the string "My nickname is " with the bot variable followed by a period (.).
Assign the resulting string to the nicknameIntroduction variable.
Then, log the value of nicknameIntroduction to the console.
*/

let nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

/*
Step 11
Now it looks like the bot wants to change their nickname.
Using reassignment, assign the string "awesomeTeacherBot" to the bot variable.
*/

bot = "awesomeTeacherBot";

/*
Step 12
To see the bot's new nickname, you will need to log a new message to the console.
Create a new variable called newNicknameGreeting.
Then use string concatenation to join the string "I love my nickname but I wish people would call me " with the bot variable followed by a period.
Assign the result to the newNicknameGreeting variable.
Then, log the value of newNicknameGreeting to the console.
*/

let newNicknameGreeting =
  "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

/*
Step 13
The last few messages from the bot will focus on the bot's favorite subject.
Start by creating a new variable called favoriteSubject and assign it the string "Computer Science".
*/

let favoriteSubject = "Computer Science";

/*
Step 14
Next, create a variable called favoriteSubjectSentence.
Use string concatenation to join the string "My favorite subject is " with the favoriteSubject variable followed by a period.
Assign the result to the favoriteSubjectSentence variable.
Then, log the value of favoriteSubjectSentence to the console.
*/

let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

/*
Step 15
For the final step, you will log the bot's message of "Well, it was nice to talk to you. Have a nice day!" to the console.
And with that, your greeting bot is complete!
*/

console.log("Well, it was nice to talk to you. Have a nice day!");
