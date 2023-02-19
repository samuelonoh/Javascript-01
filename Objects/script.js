// var company = new objects();
// company.name = "Facebook";
// company.ceo = new objects();
// company.ceo.firstName = "Samuel";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstname);

// Object literal
// var facebook = {
//     name: "Facbook",
//     ceo: {
//         firstName: "Samuel",
//         favColr: "blue"
//     },
//     $stock: 110
// };

// console.log(facebook);

// var facebook = {
//     name: "Facbook",
//     ceo: {
//         firstName: "Mark",
//         favColr: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook);
// console.log(facebook.ceo.firstName);

//  var myCars = {
//     "Toyota" : "350 kmph",
//     "Audi" : "409 kmph",
//     "Mecerdes" : "429 kmph"
//  }

//  console.log(myCars);
//  console.log(typeof(myCars));

 var mAgera = {
    name: "Mecerdes",
    manufacturer: {
        name: "Benz",
        location: "Sweden"
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function(){
        setTimeout(function() {
            console.log('car Stopped');
        }, 5000)
    }
 }

 console.log(mAgera.name);
 console.log(mAgera.topSpeed);
 console.log(mAgera.manufacturer);
 console.log(mAgera.manufacturer.name);
 console.log(mAgera.applyBrakes());
 console.log(mAgera.applyBrakes);

// const person = {
//     firstName: "Samuel",
//     lastName: "Onoh",
//     middleName: "Nnamela",
//     age: 22,
//     gender: "Male",
//     Location: "Nigeria",
//     about: function(){
//         console.log("my name is" + this.firstName + this.lastName + this.middleName + ". I am a " + this.gender + ". A " + this.age + "years old that lives in " + this.Location + " ");
//         return this.firstName;
//     }
// }

// console.log(person.about());