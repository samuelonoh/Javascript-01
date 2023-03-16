// Immediately Invoked Function Expression
// IIFE

(function (name) {
    console.log('Hello ' + name);
})('Samuel');

//

(function (window) {
    const samuelGreeter = {};
    samuelGreeter.name = 'Samuel';
    const greeting = 'Hello ';
    samuelGreeter.sayHello = function () {
        console.log(greeting + samuelGreeter.name);
    }
    window.samuelGreeter = samuelGreeter;
})(window);

console.log(samuelGreeter.sayHello());

//

// (function sayHi() {
//     alert('Hi there!');
// }
// )();

// alerts 'Hi there'


// It can also be written this way    ======>
(function (name) {
    alert (`Hi, ${name}`);
}
('Sammy'));

// alerts 'Hi, Sammy'

(function (x, y) {
    console.log(x * y);
}
)(2, 3);

// 6