if(7 > 3) {
    console.log(true)
};

if (5 > 7) {
    console.log(true);
} else{
    console.log(false);
}


// Swith can also do the work of if else conditions
var currentDay = 'Thur';

if(currentDay === 'Mon') {
    console.log('Timings: 10:00-06:00');
} else if(currentDay === 'Tue') {
    console.log('Timings: 09:00-05:00');
} else if(currentDay === 'Wed') {
    console.log('Timings: 09:30-05:30');
} else if(currentDay === 'Thur') {
    console.log('Timings: 10:15-06:15');
} else if(currentDay === 'Fri') {
    console.log('Timings: 09:05-05:05');
} else if(currentDay === 'Sat') {
    console.log('Timings: 09:00-05:00');
} else if(currentDay === 'Sun') {
    console.log('Timings: 09:00-01:00');
}

switch(currentDay) {
    case 'Mon':
    console.log('Timings: 10:00-06:00');
    break;
    case 'Tue':
    console.log('Timings: 09:00-05:00');
    break;
    case 'Wed':
    console.log('Timings: 09:30-05:30');
    break;
    case 'Thur':
    console.log('Timings: 10:15-06:15');
    break;
    case 'Fri':
    console.log('Timings: 09:05-05:05');
    break;
    case 'Sat':
    console.log('Timings: 09:00-05:00');
    break;
    case 'Sun':
    console.log('Timings: 09:00-01:00');
    break;
    default:
    console.log('Timings: 09:00-01:00'); 
}