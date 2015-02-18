/*
    Levi Hand
    SDI 1502
    Section 2
    Week 3
    Conditionals Assignment
 */

/*
    Create a calculator which calculates how many stops you would have to make
    during a long trip. The outcome is dictated by what variety of vehicle you
    are using, whether it is a car with an average distance of 300 miles per
    tank of gas, or a motorcycle with an average distance of 150 miles per
    tank of gas. Also, the calculator will take into account what percentage
    of a full tank you currently possess.
 */

var vehicleType;                //Filled using a prompt to determine what kind of vehicle is being used
var vehicleMotorcycle = 150;    //Static variable which denotes 150 miles for the motorcycle
var vehicleCar =        300;    //Static variable which denotes 300 miles for the car
var distanceTraveling;          //Filled using a prompt to determine what the distance of the trip is
var percentCurrentGas;          //Variable filled using a prompt to denote what percentage of gas the vehicle currently has

//Prompting the user for input on what variety of vehicle they are using
vehicleType =       prompt("Are you going to be driving a Motorcycle or a Car?");

//This statement is checking to see if the user has input either Motorcycle or Car as their vehicle type
if(vehicleType != "Motorcycle" && vehicleType != "Car"){
    //This is what happens if the statement provided proves to be false
    console.log("You need to enter either Motorcycle or Car!");
} else {
    //This is what happens if the statement provided proves to be true
    console.log("You will be driving a " + vehicleType + " on this trip.");
}

//Prompting the user for input on how far they will be traveling on this trip
distanceTraveling = prompt("Please enter the distance in miles that you will be traveling.");
//Convert variable distanceTraveling to a float variable for easier calculation
distanceTraveling = parseFloat(distanceTraveling);

//Prompting the user for input on how full their gas tank is as a percentage
percentCurrentGas = prompt("Enter the how full your tank currently is as a percent.");
//Convert variable percentCurrentGas to a float variable for easier calculation
percentCurrentGas = parseFloat(percentCurrentGas);



//Output to tell the user how many miles they will be traveling
console.log("You are traveling a total distance of " + distanceTraveling + " miles.");
//Output to tell the user how much gas they currently have as a percentage
console.log("You currently have " + percentCurrentGas + "% of a tank remaining");
