// Predict and explain first...
//  =============> write your prediction here
// I predict it prints "The sum of 10 and 32 is undefined".

// function sum(a, b) {
//   return;
//   a + b;
// }
//
// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// `return;` has nothing after it, so the function stops there and returns
// undefined. The line `a + b;` is never reached, so the sum is never returned.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
