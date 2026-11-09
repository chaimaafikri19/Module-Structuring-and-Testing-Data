// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

console.log(age);

// The error happened because we tried to change a const variable.
// Variables declared with const cannot be changed.
// Using let fixes the error because it allows us to change the value.
