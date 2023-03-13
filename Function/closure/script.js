function remember (number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );

// 5

function makeMultiplier (multiplier) {
    // let multiplier = 2;
    return (
        function (x) {
            return multiplier * x
        }
    );
}

const doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// 20

const myName = 'Andrew';
function introduceMySelf() {
    const you = 'student';

    function introduce() {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }
    return introduce();
}

introduceMySelf();

// 'Hello, student, I'm Andrew!'

function outerFunction() {
    let num1 = 5;

    return function(num2) {
        console.log(num1 + num2);
    };
}

const result = outerFunction();

result(10);

// 15

function myCounter() {
    var count = 0;

    return function () {
        count += 1;
        return count;
    };
}

const counter = myCounter();

counter();   // 1
counter();   // 2
counter();   // 3
counter();   // 4
counter();   // 5