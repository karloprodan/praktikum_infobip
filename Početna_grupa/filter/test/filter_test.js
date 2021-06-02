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
});
