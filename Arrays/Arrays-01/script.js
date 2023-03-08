// let mFriends = ['Samuel', 'Zakiya', 'Lawrence', 'Emma'];
// console.log(mFriends);
// console.log(typeof(mFriends));

// console.log(mFriends[0]);
// console.log(mFriends[1]);
// console.log(mFriends[2]);
// console.log(mFriends[3]);

// Update a value
mFriends[0] = 'Sammy';
console.log(mFriends);

// Add more items
mFriends[4] = 'Godswill';
console.log(mFriends);

mFriends[mFriends.length] = 'Jacob'
console.log(mFriends);

mFriends.push('Jack');
console.log(mFriends);

// Delete a value
let mName = mFriends.pop();
console.log(mName);
console.log(mFriends);


let mFriends = ['Samuel', 'Zakiya', 'Lawrence', 'Emma'];
mFriends.splice(3, 0, 'Don', 'Duke');

//1st tells where to start
// 2nd tells how many items to be deleted
//3rd and 4th and so on tells what items to be added
console.log(mFriends);

//Delete item at a specific position
mFriends.splice(2, 1);
console.log(mFriends);

// Concatenation
let mOfficeFriends = ['David', 'Bryan', 'Desmond', 'Precious', 'Faith'];
let mAllFriends = mFriends.concat(mOfficeFriends);

console.log('********************');
console.log(mFriends);
console.log(mOfficeFriends);
console.log(mAllFriends);

// Sorting Ascending and Descending
mFriends.sort();
console.log(mAllFriends);

mFriends.reverse();
console.log(mAllFriends);

// To add from the first 
//mFriends.unshift

// to remove the first object
// mFriends.shift()

// To search for an object in an array
// friends.includes('sammy')

