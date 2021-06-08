const { expect } = require("chai");

describe("forEach tests", function () {
  it("should push items from one array to the other", function () {
    let items = ["item1", "item2"];
    const copyItems = [];
    items.forEach((item) => copyItems.push(item));

    expect(copyItems).to.eql(["item1", "item2"]);
  });

  it("should multiply all numbers by 10", function () {
    let numbers = [9, 52, 113, 240, 600];
    const resultArray = [];
    numbers.forEach((number) => resultArray.push(number * 10));

    expect(resultArray).to.eql([90, 520, 1130, 2400, 6000]);
  });

  it("should add a string to all strings in array", function () {
    let students = ["John", "Sara", "Jack"];
    const resArr = [];
    students.forEach((student, index, arr) => resArr.push(arr[index] = "Hello " + student));

    expect(resArr).to.eql(["Hello John", "Hello Sara", "Hello Jack"]);
  });
});
