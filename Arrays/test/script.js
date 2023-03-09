const fifteenTip = 15 / 100; 
const twentyTip = 20 / 100;

function calcTip (bill) {
    if (50 <= 300) {
        return fifteenTip * bill;
    } else {
        return twentyTip * bill;
    }
};

const tipTip = calcTip(100);
console.log(tipTip);

// 2

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips, bills);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);