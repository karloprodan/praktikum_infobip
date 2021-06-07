const { expect } = require("chai");
const {
  getLength,
  getSquareRoots,
  isNumberEven,
  evenTimesTwo,
  getFullName,
  getDouble,
  setFirstLetterUp,
  checkIfOldEnough
} = require("../src/map.js");

describe("Map tests", function () {
  it("should return lengths of given strings", function () {
    let instruments = ["bubnjevi", "gitara", "klavijatura", "bass"];
    let lengths = instruments.map(getLength);

    expect(lengths).to.eql([8, 6, 11, 4]);
  });

  it("should return doubled numbers", function () {
    let numbers = [22, 36, 49, 51, 66, 75];
    let timesTwo = numbers.map(getDouble);

    expect(timesTwo).to.eql([44, 72, 98, 102, 132, 150]);
  });

  it("should return square roots of given numbers", function () {
    let numbers = [4, 9, 16, 25, 36];
    let roots = numbers.map(getSquareRoots);

    expect(roots).to.eql([2, 3, 4, 5, 6]);
  });

  it("should return true if a number is even", function () {
    let numbers = [1, 2, 6, 9, 17];
    let numbers1 = numbers.map(isNumberEven);

    expect(numbers1).to.eql(["false", "true", "true", "false", "false"]);
  });

  it("should double numbers if they're even", function () {
    let numArray = [2, 7, 12, 18, 23, 34];
    let arrayEvenTimesTwo = numArray.map(evenTimesTwo);

    expect(arrayEvenTimesTwo).to.eql([4, 7, 24, 36, 23, 68]);
  });

  it("should return persons with their full names", function () {
    let persons = [
      { firstname: "Karlo", lastname: "Prodan" },
      { firstname: "Ana", lastname: "Ivanov" },
      { firstname: "Deni", lastname: "Kukolj" },
      { firstname: "Edi", lastname: "Krožnjak" },
    ];
    let personsFull = persons.map(getFullName);

    expect(personsFull).to.eql([
      "Karlo Prodan",
      "Ana Ivanov",
      "Deni Kukolj",
      "Edi Krožnjak",
    ]);
  });

  it("should return id's of employees", function () {
    let employees = [
      { id: 20, name: "Ivan" },
      { id: 132, name: "Marko" },
      { id: 65, name: "Loris" },
      { id: 47, name: "Viktor" },
    ];
    const employeesIds = employees.map((employee) => employee.id);

    expect(employeesIds).to.eql([20, 132, 65, 47]);
  });

  it("should capitalize words in array", function () { 
    let wordsArray = ["king", "queen", "steward", "fool"];
    const capitalisedWordsArray = wordsArray.map(setFirstLetterUp);

    expect(capitalisedWordsArray).to.eql(["King", "Queen", "Steward", "Fool"]);
  });

  it("should determine if a student is old enough to buy alcohol", function () { 
    let students = [
      { name: "Johnny Depp", age: 22 },
      { name: "Danzig", age: 17 },
      { name: "Walter White", age: 18 },
      { name: "Margot Robbie", age: 16 }
  ];
  const students18 = students.map(checkIfOldEnough);

  expect(students18).to.eql(["Johnny Depp is old enough to buy alcohol.", "Danzig is under age!", "Walter White is old enough to buy alcohol.", "Margot Robbie is under age!"]);

  });

  it("should return the initals of all names", function () {
    let names = 'Nina Ivana Jelena Edi Barbara Ema David';
    const rez = names.split(' ').map(word => word[0]).join('');

    expect(rez).to.equal('NIJEBED');
  });
});
