var exampleString = "This is Javascript tutorial";

// toUpperCase() - It converts our string -> uppercase characters
console.log(exampleString.toUpperCase());

// toLowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase());

// concat() - It merges two or more strings
var firstName = "Javascript";
var lastName = "Playground";
console.log(exampleString.concat(' ', firstName));
console.log(exampleString.concat(' ', firstName, ' ', lastName));

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString);

// trim() - It removes axtra spaces or whitespaces
var extraSpaceString = '     myString    ';
console.log(extraSpaceString.trim());

var extraSpaceStringExample2 = '   my string   ';
console.log(extraSpaceStringExample2.trim());

// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string';
console.log(charAtExampleString.charAt(5));
console.log(charAtExampleString.charAt(11));

// Splits our string on the basis of the arguments passed
// It stores them into arrays
var sampleString = "This is my sample string";
console.log(sampleString.split(' '));

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(','));

var sampleString3 = "This is awesome"
console.log(sampleString3.split());
