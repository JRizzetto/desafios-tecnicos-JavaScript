/*
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
*/

// const replaceCharacter = (word) => {
//   const alfabetoCompleto = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   let wordArray = word.toLowerCase().split("");

//   let changedWord = [];

//   for (let i = 0; i < wordArray.length; i++) {
//     alfabetoCompleto.forEach((element, index, array) => {
//       if (element === wordArray[i]) {
//         changedWord.push(alfabetoCompleto[index + 1]);
//       }
//     });
//   }

//   return changedWord;
// };

// const resultProblem = replaceCharacter("Jefferson");
// console.log(resultProblem.join(""));

const moveCharsForward = (str) => {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

console.log(moveCharsForward("Jefferson"));
