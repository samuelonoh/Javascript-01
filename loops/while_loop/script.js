// let mValue = 0;
// while(mValue <= 50) {
//     mValue++
// };

// console.log(mValue);


// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

let dice =Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice =Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end ....');
}