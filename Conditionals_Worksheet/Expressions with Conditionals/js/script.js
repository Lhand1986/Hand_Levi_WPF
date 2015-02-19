/*
 Levi Hand
 19FEB2015
 Last Chance for Gas - Worksheet
 */

/*
Creating an output using three givens
* Gas efficiency of the car (in mpg)
* Gauge reading of the gas tank (in %)
* Car's gas tank capacity (in gallons)
The number to test against is going to
be 200 miles.

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
var totalMiles;
var totalGas;

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

    //Conditional statement checking if the variable is in number form
    if(isNaN(gasReading)){
        //Output if the condition is true
        console.log("Please enter a number for your remaining fuel percentage.");

        //Code continues if the statement is false
    } else {
        //Prompt user for input
        gasCapacity = prompt("What is the capacity of your gas tank?");
        //Change variable to a float type integer
        gasCapacity = parseFloat(gasCapacity);

        //Conditional statement checking to see if variable is in number form
        if(isNaN (gasCapacity)){
            //Output if the statement is true.
            console.log("Please enter the capacity of your gas tank.");

            //Conditional statement to determine if the variable is less than 0
        } else if(gasCapacity <= 0){
            console.log("Please enter a positive number for the capacity of your gas tank.");
        } else {
            //Equation to assign proper value to variable totalGas
            totalGas = gasReading / 100 * gasCapacity;
            //console.log(totalGas);
            //Equation to determine what the total range of the vehicle is.
            totalMiles = totalGas * gasEfficiency;
            //console.log(totalMiles);

            //conditional statement to create output for program
            if(totalMiles >= 200){
                console.log("Yes, you can make it without stopping for gas!");
            } else {
                console.log("You only have " + totalGas + " gallons of gas in your tank, better get gas now while you can!");
            }

        }
    }
}
