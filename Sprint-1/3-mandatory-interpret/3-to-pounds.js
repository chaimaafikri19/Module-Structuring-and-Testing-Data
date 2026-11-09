const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 1. penceString stores the price as text, for example "399p".
// 2. substring() removes the last letter "p", leaving "399".
// 3. padStart() makes sure we have at least 3 digits. For example, "5" becomes "005".
// 4. pounds gets the digits before the last two, which gives us "3".
// 5. pence gets the last two digits, which gives us "99".
//    padEnd() makes sure we always have 2 digits.
// 6. console.log() puts everything together and shows the price as £3.99.
