/*
Levi Hand
19FEB2015
Tire Pressure 1
 */

/*
 To meet to maintenance standards a car’s front
 two tires should have the same pressure and
 the back two tires should have the same pressure.
 But the front tires and the rear tires can have
 different pressure than each other, so it is not
 necessary for all four tires’ pressure to be the
 same. Create a single conditional that would
 determine if the tires of a given car are up to spec.
 */

//Initializing array variable with 4 spaces in the array
var tirePressure = [4];

//Issue a prompt for each value in the array for user input
tirePressure[0] = prompt("Please enter the pressure of your front left tire.");
tirePressure[1] = prompt("Please enter the pressure of your front right tire.");
tirePressure[2] = prompt("Please enter the pressure of your rear left tire.");
tirePressure[3] = prompt("Please enter the pressure of your rear right tire.");

//Statement to determine if values 0 and 1 in the array match as well as values 2 and 3
if(tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]){
    //Output success
    console.log("The tires pass spec!");

} else {
    //Output failure
    console.log("Get your tires checked out!");
}