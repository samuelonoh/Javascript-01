// let mList = [1, 2, 3, 4, 5];
// let pos;
// for (pos = 0; pos < mList.length; pos++) {
//     console.log('position => ' + pos + ' value => ' + mList[pos]);
// }


// Break keyword

// let pos;
// for (pos = 0; pos < mList.length; pos++) {
//     if(pos >=3) break;
//     console.log('position => ' + pos + ' value => ' + mList[pos]);
// }

// Continue keyword

// let pos;
// for (pos = 0; pos < mList.length; pos++) {
//     if(pos % 2 !== 0) continue;
//     console.log('position => ' + pos + ' value => ' + mList[pos]);
// }


// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i]
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);


// // Continue
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !=='string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// // Break   ===> terminating the loop
// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !=='number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }


// looping backward
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise}: Lifting weight with repetition ${rep}`)
    }
}