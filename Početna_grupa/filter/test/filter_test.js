const { expect } = require("chai");
const {} = require("../src/filter.js");

describe("Filter tests", function () {
    it("should return strings shorter or equal than 5", function () {
    let words = ["neon", "map", "mathematics", "extinguisher", "lemon"];
    const shortWords = words.filter((word) => word.length <= 5);

    expect(shortWords).to.eql(["neon", "map", "lemon"]);
  });

  it("should determine which faction does the pilot belong to", function () {
    let pilots = [
      {
        name: "Han Solo",
        faction: "Rebels",
      },
      {
        name: "Darth Maul",
        faction: "Empire",
      },
    ];
    const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
    const empire = pilots.filter((pilot) => pilot.faction === "Empire");

    expect(rebels).to.eql([{faction: "Rebels", name: "Han Solo"}]);
    expect(empire).to.eql([{faction: "Empire", name: "Darth Maul"}]);
  });

  it("should return numbers divisible by 3", function () {
    let numbers = [1, 3, 12, 23, 36, 99];
    const numbersByThree = numbers.filter((number) => number % 3 === 0);

    expect(numbersByThree).to.eql([3, 12, 36, 99]);
  });

  it("should return numbers that are greater than 10 or equal", function () {
    let numbers = [2, 5, 7, 10, 13, 19, 20];
    const tenAndGreaterOnly  = numbers.filter((number) => number >= 10);

    expect(tenAndGreaterOnly).to.eql([10, 13, 19, 20]);
  });

  it("should filter positive numbers and return their sum", function () {
    let numbers = [1, -4, 12, 0, -3, 29, -150];

    let sumOfPosNum = numbers.filter((num) => num >= 0).reduce((accu, curr) => accu + curr, 0);

    expect(sumOfPosNum).to.equal(42);
  });

  it("should return students whose grades are greater than or equal to 90", function () {
    let students = [
      { ime: "Katja", ocjena: 94 },
      { ime: "Karlo", ocjena: 90 },
      { ime: "Ema", ocjena: 87 },
      { ime: "Ivan", ocjena: 75 },
      { ime: "Neven", ocjena: 66 }
    ];
    let studentsGrades = students.filter((student) => student.ocjena >= 90);

    expect(studentsGrades).to.eql([{ime: "Katja", ocjena: 94}, {ime: "Karlo", ocjena: 90}]);
  });

});
