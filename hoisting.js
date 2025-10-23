// // 1.
// const cube = function (x) {
//   return x * x * x;
// };

// // 2.
// const fullName = function (first, last) {
//   return first + " " + last;
// };

// // 3.
// const power = function (base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   return base * power(base, exp - 1);
// };

// // 4.
// const sumCubes = function (numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total = total + cube(numbers[i]);
//   }
//   return total;
// };

// // Why does JavaScript output undefined instead of throwing an error in the following code?
// // because var is function-scoped, meaning it is defined in the scope of the function/global, and initialized with undefined
// console.log(message);

// var message = "Hi there!";

// // Why does JavaScript throw an error instead of logging undefined in the following code?
// // but let does not initialize (not hoisted)
// console.log(message);

// let message = "Hi there!";

// // Explain precisely what happens when the following code is executed.
// // will throw an error because showMessage is not initialized (not hoisted)
// console.log(showMessage());

// const showMessage = function () {
//   return "Hi there!";
// };

// // Why does JavaScript not throw any errors when the following code is executed?
// // because showMessage is hoisted
// console.log(showMessage());

// function showMessage() {
//   return "Hi there!";
// }

// // Restructure the following instances of code to work correctly:
// // 1.
// let values = [10, 20, 30];
// for (let i = 0; i < values.length; i++) {
//   console.log(values[i]);
// }

// 2.
let lastLogin = "1/1/1970";
console.log(welcome("Charlie", "Munger"));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}
