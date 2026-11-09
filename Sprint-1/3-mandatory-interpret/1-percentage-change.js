let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// a) 5 function calls, on lines 4, 5 and 10: Number() and replaceAll() on lines 4 and 5, and console.log() on line 10
// b) The error comes from line 5: There is no comma between "," and "". Fix: replaceAll(",", "")
// c) Reassignments: lines 4 and 5
// d) Declarations: lines 1, 2, 7 and 8
// e) replaceAll removes the commas from the text, and Number turns the result into a number
//    so we can do maths with it
