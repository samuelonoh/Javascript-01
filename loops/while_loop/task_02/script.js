
let i = 99;
while(i >= 1) {
    if (i === 1) {
        console.log(i + " bottle of juice on the wall! " + i + " bottle of juice! Take one down, pass it around... " + (i - 1) + " bottle of juice on the wall!");
    } else if (i === 2) {
        console.log(i + " bottles of juice on the wall! " + i + " bottles of juice! Take one down, pass it around... " + (i - 1) + " bottle of juice on the wall!");
    } else {
        console.log(i + " bottles of juice on the wall! " + i + " bottles of juice! Take one down, pass it around... " + (i - 1) + " bottles of juice on the wall!"
        );
    }
    i--;
}