const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// a) There are 6 variables declared.
// b) There is 1 function call: console.log(result).
// c) % gives us the leftover seconds after dividing by 60 (24).
// d) It removes the leftover seconds and gives us the total minutes (146).
// e) result shows the movie length in hours, minutes and seconds.
//    formattedMovieLength would be a clearer name.
// f) It works with positive whole numbers, but it doesn't add zeros in front.
//    It can also give strange results with decimal or negative numbers.
