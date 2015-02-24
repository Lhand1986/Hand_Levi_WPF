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

// functions
function nameValidation() {

    while (myName === "") {

        myName = prompt("Do not leave this field blank.\n\nPlease enter your first name.");

    }

    console.log("Welcome " + myname + ".");

}

// main code
nameValidation();
