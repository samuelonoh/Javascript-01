const details = ['Mark Miller', 'John Smith'];

details[0] = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.BMI = this.mass / (this.height *this.height);
        return this.BMI;
    },
};

details[1] = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.BMI = this.mass / (this.height *this.height);
        return this.BMI;
    },
};

details[0].calcBMI > details[1].calcBMI ? console.log(`${details[0].fullName}'s BMI (${details[0].calcBMI()}) is higher than ${details[1].fullName}'s BMI (${details[1].calcBMI()}) `) : console.log (`${details[1].fullName}'s BMI (${details[1].calcBMI()}) is higher than ${details[0].fullName}'s BMI (${details[0].calcBMI()})`);