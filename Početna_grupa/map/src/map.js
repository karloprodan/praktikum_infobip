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
  if (num % 2 == 0) return "true";
  else return "false";
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
  if (students.age >= 18) {
    return students.name + " is old enough to buy alcohol.";
  }
  else return students.name + " is under age!";
}

module.exports = {
  getLength,
  getSquareRoots,
  isNumberEven,
  evenTimesTwo,
  getFullName,
  getDouble,
  setFirstLetterUp,
  checkIfOldEnough
};
