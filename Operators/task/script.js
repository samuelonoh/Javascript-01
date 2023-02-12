// const Dolphins = (96 + 108 + 89) / 3;
// console.log(Dolphins);
// const Koalas = (88 + 91 + 110) / 3;
// console.log(Koalas);

/// TEST DATA
// if (Dolphins > Koalas){
//     console.log("The winner is Dolphins");
// } else if (Koalas < Dolphins){
//     console.log("The winner is Koalas");
// } else {
//     console.log("It's a draw"); // else if (Dolphins === Koalas)
// }

// BONUS 1
// const Dolphins = (97 + 112 + 101) / 3;
// console.log(Dolphins);
// const Koalas = (109 + 95 + 123) / 3;
// console.log(Koalas);
// const minimumScore = 100;

// if ((Dolphins > Koalas) && minimumScore) {
//     console.log("Dolphins is the winner");  // >= 100
// } else if ((Koalas > Dolphins) && minimumScore) {
//     console.log("Koalas is the winner"); // >=100
// } else if ((Dolphins === Koalas) && minimumScore) {
//     console.log("It's a tie");
// }

// BONUS 2
const Dolphins = (97 + 112 + 81) / 3;
console.log(Dolphins);
const Koalas = (109 + 95 + 86) / 3;
console.log(Koalas);

if (Dolphins > Koalas && Dolphins >= 100) {
    console.log("Dolphins is the winner");
} else if (Koalas > Dolphins && Koalas >= 100) {
    console.log("Koalas is the winner"); 
} else if (Dolphins === Koalas &&  Dolphins >= 100 && Koalas >= 100) {
    console.log("It's a draw");
} else {
    console.log("No team wins the trophy")
}
