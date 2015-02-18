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
var currentGasDistance;
var travelDistance;
var travelStops;

//Prompting the user for input on what variety of vehicle they are using
vehicleType = prompt("Are you going to be driving a Motorcycle or a Car?");

//This statement is checking to see if the user has input either Motorcycle or Car as their vehicle type
if(vehicleType != "Motorcycle" && vehicleType != "Car"){
    //This is what happens if the statement provided proves to be true
    console.log("You need to enter either Motorcycle or Car!");
} else {
    //This is what happens if the statement provided proves to be false
    //Prompting the user for input on how far they will be traveling on this trip
    distanceTraveling = prompt("Please enter the distance in miles that you will be traveling.");
    //Convert variable distanceTraveling to a float variable for easier calculation
    distanceTraveling = parseFloat(distanceTraveling);
    //console.log("You will be driving a " + vehicleType + " on this trip.");

    if(isNaN(distanceTraveling)){
        //Output if the statement is true
        console.log("You need to enter a number for your travel distance!");
    } else if(distanceTraveling < 0){
        console.log("You need to enter a positive number for your travel distance!");
    } else {

        //If the statement is false

        //Prompting the user for input on how full their gas tank is as a percentage
        percentCurrentGas = prompt("Enter the how full your tank currently is as a percent.");

        //Convert variable percentCurrentGas to a float variable for easier calculation
        percentCurrentGas = parseFloat(percentCurrentGas);

        //Statement checking to see if percentCurrentGas is a number or is greater than 100
        if(isNaN(percentCurrentGas) || percentCurrentGas > 100 ){
            //Output if the statement is true
            console.log("You need to enter a number below 101 for remaining fuel!")
        //Statement checking to see if percentCurrentGas is a number or is less than 0
        } else if(isNaN(percentCurrentGas) || percentCurrentGas < 0){
            //Output data to console.log
            console.log("You need to enter a positive number for your remaining fuel!");
        }
        else {

            //Figure out how much distance you can travel with the amount of fuel currently available
            currentGasDistance = (vehicleType === "Motorcycle") ? percentCurrentGas / 100 * vehicleMotorcycle : percentCurrentGas / 100 * vehicleCar;

            //Statement to determine the total distance to travel
            travelDistance = distanceTraveling - currentGasDistance;
            //Ternary statement determines how many stops will have to be made along the way to refuel
            travelStops = (vehicleType === "Motorcycle") ? travelDistance / vehicleMotorcycle : travelDistance / vehicleCar;
            //Output the vehicle type
            console.log("You will be driving a " + vehicleType + " on this trip.");
            //Output the total travel distance
            console.log("You are traveling a total distance of " + distanceTraveling + " miles.");
            //Output the current percentage of fuel remaining
            console.log("You currently have " + percentCurrentGas + "% of a tank remaining");
            //Output how many stops need to be made in order to complete the trip
            console.log("You will need to make " + travelStops + " stops for fuel in order to complete your trip.");

        }
    }
}
