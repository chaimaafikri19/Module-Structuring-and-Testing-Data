// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The error happened because cityOfBirth was used before it was created.
// We need to declare it first before using it in console.log.
// Moving the const line above fixes the error.
