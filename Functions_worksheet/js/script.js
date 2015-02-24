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