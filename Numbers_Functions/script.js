var num1 = 10;
var num2 = 20.3;

// toString() number as input and returns a string
console.log(num1.toString());
console.log(num2.toString());

var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC";

// ParseInt() string numeral as input and returns a number
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3)); // NaN

// parseFloat() strings numeral as an input and returns a floating number
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3)); // Nan

// toFixed() takes floating number and rounds it off to given position

var strFloat = 87.987653;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2)); // 2 decimal places
console.log(strFloat.toFixed(5)); // 5 decimal places