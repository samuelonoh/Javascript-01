const samuel = {
    firstName: 'Samuel',
    lastName: 'Onoh',
    age: 2037-1991,
    job: 'Enginner',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(samuel)


// Dot notation
console.log(samuel.lastName);

// Bracket notation
console.log(samuel['lastName']);

const nameKey = 'Name';
console.log(samuel['first' + nameKey]);
console.log(samuel['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Samuel? Choose between firstName, lastName, age, job and friends')

if (samuel[interestedIn]) {
    console.log(samuel[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

samuel.location = 'Nigeria';
samuel['twitter'] ='@onohsamuel22'
console.log(samuel);

// Challenge
// "Samuel has 3 friends, and his best friend is called Michael"

console.log(`${samuel.firstName} has ${samuel.friends.length} friends (${samuel.friends}) and his best friend is called ${samuel.friends[0]}`);