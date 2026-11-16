// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
// let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;
//}

// =============> The error is "Identifier 'str' has already been declared".
// `str` is already the parameter name, so `let str` inside the function
// tries to declare the same name twice, and JavaScript doesn't allow that.
// =============> write your new code here
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

console.log(capitalise("hello"));
