//Last Chance for Gas - Worksheet

/*
Creating an output using three givens
* Gas efficiency of the car (in mpg)
* Gauge reading of the gas tank (in %)
* Car's gas tank capacity (in gallons)

Result to print out:
 “Yes, you can make it without stopping
  for gas!” or “You only have X gallons
  of gas in your tank, better get gas
  now while you can!”
 */

//Initialize variables
var gasEfficiency;
var gasReading;
var gasCapacity;

//Prompt user for input
gasEfficiency = prompt("Please enter how many miles per gallon you can get on average.");
//Change variable to a float type integer
gasEfficiency = parseFloat(gasEfficiency);


if(isNaN(gasEfficiency) || gasEfficiency === ""){
    console.log("Please enter a number for your MPG.")

} else if(gasEfficiency <= 0) {
    console.log("Please enter a positive number for your MPG.")
} else {
    //Prompt user for input
    gasReading = prompt("Please enter the percentage of remaining fuel.");
    //Change variable to a float type integer
    gasReading = parseFloat(gasReading);

    if(isNaN(gasReading)){
        console.log("Please enter a number for your remaining fuel percentage.");

    } else {
        //Prompt user for input
        gasCapacity = prompt("What is the capacity of your gas tank?");
        //Change variable to a float type integer
        gasCapacity = parseFloat(gasCapacity);
    }
}


console.log("You get " + gasEfficiency + " mpg.")
console.log(gasReading);