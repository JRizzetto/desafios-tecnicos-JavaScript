/*
Write a JavaScript program to get the extension of a filename
*/

const getFileExtation = (str) => {
  return str.slice(str.lastIndexOf("."));
};

// -----------------------------------------------------------------------

function getFileExtesion(filename) {
  let parts = filename.split(".");

  return parts.pop();
}

console.log(getFileExtesion("doc.html"));
console.log(getFileExtesion("doc.pdf"));
