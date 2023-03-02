// function test() {
//     console.log(this);
//     this.myName ="Samuel"
// }
// test();
// console.log(window.myName);


// Function constructors(It has too remain with a return)

// ******
// function Circle (radius) {
//     console.log(this);
// }

// let myCircle = new Circle(10);
// console.log(myCircle);

// ******
// function Circle (radius) {
//     this.radius = radius;
// }

// let myCircle = new Circle(10); // new object();
// console.log(myCircle);


// ******
// function Circle (radius) {
//     this.radius = radius;

//     this.getArea =
//     function () {
//         return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// let myCircle = new Circle(10); // new object();
// console.log(myCircle.getArea());

// ******
// Prototype

function Circle (radius) {
    this.radius = radius;
}
Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

let myCircle = new Circle(10); // new object();
console.log(myCircle);

// let myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

