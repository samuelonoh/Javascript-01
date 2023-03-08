let array = new Array();
array[0] = "Samuel";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};
console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
// let names = ["samuel", "John", "Don"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

let names2 = ["samuel", "John", "Don"];

let myObj = {
    name: "Samuel",
    course: "HTML/CSS/JS",
    platform: "Cousera"
};

// prop helps in printing all the properties in my object
for (let prop in myObj) {
    console.log(prop + ": " + myObj[prop])
}