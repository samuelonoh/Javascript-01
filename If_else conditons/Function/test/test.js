// const returnAfunction = function() {
//     return function() {
//         console.log('Hello from inside a function!');
//     }
// }
// const newFunction = returnAfunction();


// function callAndAdd(n, callbackFunction) {
//     return n + callbackFunction();
// }
// function returnsThree() {
//     return 3;
// }
// const add = callAndAdd(2, returnsThree);
// console.log(add)

const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

    const avgDolphins = calcAverage(42, 23, 71);
    const avgKoalas = calcAverage(65, 54, 49);
    console.log('Koalas score is: ', avgKoalas);
    console.log('Dolphins score is: ', avgDolphins);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
    } else {
        console.log('No winner');
    }
}
checkWinner(avgDolphins, avgKoalas);
