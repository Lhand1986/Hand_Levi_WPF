/*
 Levi Hand
 SDI 1502
 Section 2
 Dog Years Expression Problem
 */

//Initializing variable with the number 7
var dogConversion = 7;
//Initializing variable without assigning a value
var dogYears;
//Initializing a variable with a user input prompt
var sparkyAge = prompt("Enter Sparky's current age in human years.");
//Output variable to console for debugging purposes
//console.log(sparkyAge);

//Adding expression to denote output data
dogYears = dogConversion * sparkyAge;

//Alert with concatenation of string and numerical variables
alert("Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years.");