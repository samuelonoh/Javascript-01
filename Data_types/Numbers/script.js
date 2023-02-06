// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined");
// }

// x= 5;
// if (x == undefined) {
//     console.log("x is undefined");
// }
// else {
//     console.log("x has been defined");
// }

// Equality
// var x = 4, y = 4;
// if (x == y) {
//     console.log("Strict: x = 4 is equal to y = 4");
// }

// x = "4";
// if (x == y) {
//     console.log("Strict: x = 4 is equal to y = 4");
// }

// Strict equality
// if (x === y) {
//     console.log("strict: x = '4' is equal to y = 4");
// }
// else{
//     console.log("Strict: x = '4' is NOT equal to y = 4");
// }

var num1 = 10;
var num2 = 10.9;

console.log(typeof(num1));
console.log(typeof(num2));

// Addition
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

// Subtraction
var diff = num3 - num1;
console.log(diff);

// Multiplication
var mul = num3 * num1;
console.log(mul);

// Division
var div = num3 / num1;
console.log(div);

var divByZero = num3 / 0; //Infinty
console.log(divByZero);
console.log(typeof(divByZero));

var mulByString = num3 * 'A';  
console.log(mulByString); // 'NaN'-Not a Number
console.log(typeof(mulByString));


