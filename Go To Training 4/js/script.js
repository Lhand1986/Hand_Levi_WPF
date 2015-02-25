/*
 Levi Hand
 */

//alert("JavaScript works!");

//Week 3 review
//var myNumber = prompt("Please enter a number:");

//if (myNumber === "" || isNaN(myNumber)){
//    myNumber = prompt("We need a number here.\nPlease enter a number!")
//}

//console.log("Your number is " + myNumber);

//End week 3

//Week 4

// variables
var myName = prompt("Enter your first name please:");
var myRandom;

// functions
function nameValidation(firstName) {

    var numOfTimes = 1;

    while (firstName === "") {

        firstName = prompt("Do not leave this field blank.\n\nPlease enter your first name.");
        numOfTimes = numOfTimes + 1;

        if (numOfTimes === 10) {
            console.log("Enough! I haven't time to play today!");
            break;
        }
    }

    return firstName;

}

function randomNumberGenerator(min, max) {

    var myNumberArray = [];

    // minimum is 10 and our maximum is 50
    // Math.random() * (max - min) + min
    for (var i = 0; i < 5; i++) {

        var randomNumber = Math.random() * (max - min) + min;


        randomNumber = Math.ceil(randomNumber);
        myNumberArray[i] = randomNumber;
    }
    return myNumberArray;

}


// main code
myName = nameValidation(myName);

myRandom = randomNumberGenerator(24, 150);

console.log("Welcome " + myName + ", your random number is " + myRandom);
