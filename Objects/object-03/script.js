const samuel = {
    firstName: 'Samuel',
    lastName: 'Onoh',
    birthYear: 1991,
    job: 'Engineer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
// Use function expression.....function declaration brings an error
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 -this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${samuel.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(samuel.calcAge());
// console.log(samuel['calcAge'](1991));

console.log(samuel.age);
console.log(samuel.age);
console.log(samuel.age);

// Challenge
// "Samuel is a 46-year old teacher, and he has a driver's license"

console.log(samuel.getSummary());