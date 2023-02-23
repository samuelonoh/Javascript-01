'use strict';

// Functions are first-Class Data types
//  Functions ARE objects
function logger() {
    console.log('My name is Samuel');
}

// calling / running / invoking function

logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

//print the sum of two numbers
// function mSum() {
//     let num1 = 10;
//     let num2 = 20;
//     let sum = num1 + num2;
//     console.log(sum)
// }

// mSum();

function mSum() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    
    return sum;
}

console.log(mSum());

//Greetings
function greetings(personName) {
    console.log('Welcome ' + personName);
}

greetings('Samuel');
greetings('Zakiya');
greetings('to you all');

// 
function toCelsius(f) {
    return (5/9)*(f-32);
}
console.log('The weather is ' + toCelsius(89.9) + ' degree celsius');

// function factory
function makeMultiplier(multiplier) {
    var myfunc = function (x) {
        return multiplier * x;
    };
    return myfunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// Passing functions as argument
function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);