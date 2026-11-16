// Predict and explain first...

// =============> write your prediction here
// I predict it prints 320 first, then
// "The result of multiplying 10 and 32 is undefined".

// function multiply(a, b) {
//   console.log(a * b);
// }
//
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// multiply only prints a * b with console.log, it doesn't return anything.
// A function without return gives back undefined, so the template string
// shows "undefined". The 320 appears first because multiply runs (and prints)
// while the template string is being built.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
