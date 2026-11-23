const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for numbers ending with 1 (except those ending with 11)
// When the number ends with 1, except 11,
// Then the function should return a string with "st" added
test("should append 'st' for numbers ending with 1, except 11", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 3: Identify the ordinal number for numbers ending with 2 (except those ending with 12)
// When the number ends with 2, except 12,
// Then the function should return a string with "nd" added
test("should append 'nd' for numbers ending with 2, except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

// Case 4: Identify the ordinal number for numbers ending with 3 (except those ending with 13)
// When the number ends with 3, except 13,
// Then the function should return a string with "rd" added
test("should append 'rd' for numbers ending with 3, except 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});

// Case 5: Identify the ordinal number for 11, 12 and 13
// When the number is 11, 12 or 13 (including 111, 112, 113),
// Then the function should return a string with "th" added
test("should append 'th' for 11, 12 and 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

// Case 6: Identify the ordinal number for all other numbers
// When the number ends in 0 or 4-9,
// Then the function should return a string with "th" added
test("should append 'th' for numbers ending in 0 or 4-9", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(15)).toEqual("15th");
  expect(getOrdinalNumber(29)).toEqual("29th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});
