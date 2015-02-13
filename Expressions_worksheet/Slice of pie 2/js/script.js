/*
 Levi Hand
 SDI 1502
 Section 2
 Slice of Pie Problem 2
 */

//Initializing variables without assigning values
var numberOfSlices;
var numberOfPeople;
var numberOfPizzas;
var slicesEaten;

//Assigning user input to variables via prompt
numberOfSlices = prompt("Enter the number of slices per pizza");
numberOfPeople = prompt("Enter the number of people at the party");
numberOfPizzas = prompt("Enter the number of pizzas ordered");
//Debugging output
//console.log(numberOfSlices);
//console.log(numberOfPeople);
//console.log(numberOfPizzas);

//Expression to assign equation output to variable
slicesEaten = numberOfPizzas * numberOfSlices % numberOfPeople;

//console.log(slicesEaten);

alert("Sparky got " + slicesEaten + " slices of pizza.");