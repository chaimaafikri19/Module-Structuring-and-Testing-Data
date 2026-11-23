const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction (numerator bigger than denominator)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(8, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction when the absolute numerator is smaller", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
  expect(isProperFraction(4, -7)).toEqual(true);
  expect(isProperFraction(-4, -7)).toEqual(true);
});

test("should return false for a negative fraction when the absolute numerator is bigger", () => {
  expect(isProperFraction(-9, 7)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false when the numerator equals the denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(-3, 3)).toEqual(false);
});
