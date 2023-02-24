// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// function expression
const calcAge2 = function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// Copy by Reference vs by value
// let a = 7;
// let b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// let c = { x: 7 };
// let d = c;
// console.log(c);
// console.log(d);

// d.x =5;
// console.log("after d.x update:");
// console.log(c);
// console.log(d);

// Pass by reference vs by value
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// let value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, original value:")
// console.log(value);

function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}

value = { x: 7 };
changeObject(value);
console.log("after changeObject, original value:");
console.log(value);