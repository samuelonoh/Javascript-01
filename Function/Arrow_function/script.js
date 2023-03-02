// Arrow Function (still function expression)
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
       // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, "Johnny"));
// console.log(yearsUntilRetirement(1998, "Jonas"));
// Arrow function does not have a this keyword

// function orderPizza(snacks) {
//     setTimeout(() => {
//         const pizza = `spicy pizza`;
//         snacks(pizza)
//     }, 2000)
// };

// function pizzaReady(pizza) {
//     console.log(`Eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`Call john`)



function thing1(callback) {
    // Call pizza shop
    callback()
}

function thing2(callback) {
    // Order the pizza
    callback()
}

function thin3(callback) {
    // Eat the pizza
    callback()
}