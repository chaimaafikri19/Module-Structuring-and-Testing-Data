const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angles (less than 90°)", () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

test("should identify obtuse angles (greater than 90° and less than 180°)", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test("should identify straight angle (exactly 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angles (greater than 180° and less than 360°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Extra: angles outside the cases above
test("should return Invalid angle for 0, negative angles, and 360 or more", () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(400)).toEqual("Invalid angle");
});
