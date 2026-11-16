// Predict and explain first...

// Why will an error occur when this program runs?
// I predict a SyntaxError, because the code won't run at all.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//
//   return percentage;
// }
//
// console.log(decimalNumber);

// =============> write your explanation here
// 1. SyntaxError: Identifier 'decimalNumber' has already been declared.
//    decimalNumber is already the function parameter, so `const decimalNumber`
//    inside the function declares the same name twice. It would also replace
//    the input with 0.5.
// 2. console.log(decimalNumber) is outside the function. decimalNumber only
//    exists inside the function (scope), so it would be a ReferenceError.
//    The function is also never called.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
