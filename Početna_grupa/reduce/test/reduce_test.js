const chai = require("chai");
const { expect } = chai;
const {
  countedFruits,
  sortiranoPoljeSlova,
  totalYears,
  mostExpPilot,
  factorialNum
} = require("../src/reduce.js");

describe("Reduce tests", function () {
  it("should return sum of numbers in array", function () {
    let sum = [10, 20, 30, 40, 50].reduce((prev, curr) => prev + curr);

    expect(sum).to.equal(150);
  });

  it("should return minimal number", function () {
    let brojevi = [11, 25, 52, 66];
    let minBroj = brojevi.reduce(
      (max, curr) => (curr < max ? curr : max),
      brojevi[0]
    );

    expect(minBroj).to.equal(11);
  });

  it("should return an average between 2, 4 and 6", function () {
    const numbers = [2, 4, 6];

    const average = numbers.reduce((total, amount, index, array) => {
      total += amount;
      return index === array.length - 1 ? total / array.length : total;
    });

    expect(average).to.equal(4);
  });

  it("should return max date", function () {
    const dates = ["01.01.2000.", "01.01.2001.", "01.01.2002.", "01.01.2003."];
    const maxDate = dates.reduce(
      (max, current) => (current > max ? current : max),
      dates[0]
    );

    expect(maxDate).to.equal("01.01.2003.");
  });

  it("should return a flattened array", function () {
    const flattened = [
      [1, 2],
      [3, 4, 5],
      [6, 7],
    ].reduce((prev, curr) => prev.concat(curr), []);

    expect(flattened).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should return a number of times a fruit has been listen in an array", function () {
    expect(countedFruits).to.eql({
      Banana: 3,
      Jabuka: 2,
      Limun: 1,
      Lubenica: 1,
      Kiwi: 1,
    });
  });

  it("should remove duplicated letters from an array", function () {
    expect(sortiranoPoljeSlova).to.eql(["a", "b", "c", "d", "e", "f"]);
  });

  it("should return total years of experience of all pilots", function () {

    expect(totalYears).to.eql(82);
  });

  it("should return which pilot has the most experience", function () {
    
    expect(mostExpPilot).to.eql({
      id: 72,
      name: "Nicholas Cage",
      years: 30,
    });
  });

  it("should return n! of given number", function () {
    expect(factorialNum).to.equal(24);
  });
});
