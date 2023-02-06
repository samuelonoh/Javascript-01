var mvar; // mvar holds no value
console.log(mvar); // undefined
console.log(typeof mvar); // undefined 

mvar = null
console.log(mvar); // mvar holds the value null




var x;
console.log(x);

if (x == undefined) {
    console.log("x is undefined");
}

x= 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x has been defined");
}