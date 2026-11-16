// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict a SyntaxError, because 3 is not a valid parameter name.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// A function's parentheses need a parameter name (a placeholder), like num.
// 3 is a value, not a name, so JavaScript can't read it. The body also uses
// num, which was never declared. The value 3 should be passed when calling
// the function: square(3).

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3));
