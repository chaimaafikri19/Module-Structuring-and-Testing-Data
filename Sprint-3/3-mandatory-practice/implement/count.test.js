// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should return 0 when the character does not occur in the string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should be case-sensitive, so a different letter case is not counted", () => {
  const str = "Banana";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Extra scenarios
test("should count a character that occurs once", () => {
  expect(countChar("hello", "h")).toEqual(1);
});

test("should count a character that is spread out in the string", () => {
  expect(countChar("banana", "a")).toEqual(3);
});

test("should return 0 for an empty string", () => {
  expect(countChar("", "a")).toEqual(0);
});
