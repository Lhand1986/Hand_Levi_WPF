/*
 Levi Hand
 SDI 1502
 Section 2
 Functions Worksheet
 */

//Example expression
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the Rectangle is " + area);

function calculateArea(w, h){
    return w * h;
}

// Calculate the circumference of a circle using functions

// Initialize variable to denote the radius of the circle
var circleRad = 7;

// Call the function using variable circleRad and the number 2
var circumference = calculateCirc(circleRad, 2);
console.log("The circumference of the circle is " + circumference);

// Created function to calculate the radius of the circle using Math operator
function calculateCirc(r, c){
    return r * c * Math.PI;
}

//STUNG!

/*
 It takes 8.666666667 bee stings per pound to kill an animal.
 Calculate how many bee stings are needed to kill an animal
 in a function.
 */

//Initialize variable for weight
var animalWeight = prompt("Please enter the weight of the animal.");

//Initialize variable to gain a total number of stings and call function
var totalStings = beeStings(animalWeight, 8.666666667);

//Added output concatenation of variable and two strings.
console.log("It takes " + totalStings + " bee stings to kill this animal.");

//Create function to calculate how many stings it takes to kill this animal
function beeStings(weight, stings){


    //Multiply local variables weight by stings and return value
    return weight * stings;

}

/*
 Input value for stings was 150.

 The Area of the Rectangle is 30
 25 The circumference of the circle is 43.982297150257104
 It takes 1300.00000005 bee stings to kill this animal.

 Input value for stings was 1.

 The Area of the Rectangle is 30
 The circumference of the circle is 43.982297150257104
 It takes 8.666666667 bee stings to kill this animal.
 */