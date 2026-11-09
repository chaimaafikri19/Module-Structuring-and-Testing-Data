const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a random whole number between 1 and 100.
// Math.random() gives us a random decimal between 0 and 1.
// We multiply it by 100 to get a number in the right range.
// Math.floor() rounds the number down to a whole number (0 to 99).
// Finally, we add 1 so the result is between 1 and 100.
