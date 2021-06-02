function getLength(word) {
  return word.length;
}

function getDouble(num) {
  return num * 2;
}

function getSquareRoots(num) {
  return Math.sqrt(num);
}

function isNumberEven(num) {
  return num % 2 === 0 ? "true" : "false";
}

function evenTimesTwo(numArray) {
  return numArray % 2 === 0 ? numArray * 2 : numArray;
}

function getFullName(person) {
  let fullname = [person.firstname, person.lastname].join(" ");
  return fullname;
}

function setFirstLetterUp(wordsArray) {
  return wordsArray.charAt(0).toUpperCase() + wordsArray.slice(1);
}

function checkIfOldEnough(students) {
  return students.age >= 18
    ? students.name + " is old enough to buy alcohol."
    : students.name + " is under age!";
}

module.exports = {
  getLength,
  getSquareRoots,
  isNumberEven,
  evenTimesTwo,
  getFullName,
  getDouble,
  setFirstLetterUp,
  checkIfOldEnough,
};
