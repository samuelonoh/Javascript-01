let i = 60 ;
while (i >= 0) {
    if (i === 50) {
        console.log(`T-${i} seconds : Orbiter transfers from ground to internal power`);
    } else if (i === 31) {
        console.log(`T-${i} seconds : Ground launch sequencer is go for auto sequence start`);
    } else if (i === 16) {
        console.log(`T-${i} seconds : Activate launch pad sound suppression system`);
    } else if (i === 10) {
        console.log(`T-${i} seconds : Activate main engine hydrogen burnoff system`);
    } else if (i === 6) {
        console.log(`T-${i} seconds : Main engine start`);
    } else if (i === 0) {
        console.log(`T-${i} seconds : Solid rocket booster ignition and liftoff!`);
    } else {
        console.log(`T-${i} seconds`)
    }
    i--;
}