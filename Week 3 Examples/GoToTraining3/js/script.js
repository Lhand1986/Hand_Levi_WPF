/*
 Levi Hand
 SDI 1502
 Week 3
 Conditionals
 */

//alert("Javascript works!");

// variables
var myAddress       = "123 Elm Street";         // string variable with my address
var myFavoriteStore = "\"Publix\" Supermarket"; // string variable with my store name
var milesToStore    = 6.5;                      // number variable miles to the store
var construction    = false;                    // Boolean indicating if there's construction

// outputs
console.log("I live at " + myAddress + ".");
console.log("I shop at " + myFavoriteStore + ".");
console.log("It's only " + milesToStore + " miles to the store.");
console.log("It is " + construction + " that there is construction enroute.");

// confirm -- returns either true or false
construction = confirm("Is there still construction? OK for true, or Cancel for false");

// Boolean conditional
if (construction === true) {
    // This code runs if construction is true
    var extraMiles = prompt("How many more miles is it to the store?", "3");
    extraMiles = parseFloat(extraMiles); // Converts the string in extraMiles to a float type variable

    if (extraMiles >= 3) {
        //This code runs if construction is true AND extraMiles >= 3
        extraMiles = extraMiles + milesToStore;
        console.log("The total miles will be " + extraMiles + ".");
    } else {
        //This code runs if construction is true AND extraMiles < 3
        console.log("We aren't adding much to the ride.");

    }
} else {
    // this code runs if construction is NOT true (false)
    console.log("No, the road ahead is clear.");
    var myEmptyString = prompt("What store would you like to go to?");
    if (myEmptyString === "") {
        console.log("Hey, you didn't enter a store name!");
    } else {
        console.log("Okay, let's go there!");
    }

}