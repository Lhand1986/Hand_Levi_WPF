/*
 Levi Hand
 SDI 1502
 Section 2
 Average Shopping Bill Problem
 */

//Initializing array variable with 5 places
var groceryTotals = [1, 2, 3, 4, 5];
//Initializing variables without assigning values
var groceryAverage;
var groceryFinal;

//Prompts for user input to assign value to array
groceryTotals[0] = prompt("Enter the totals for the first week of grocery shopping");
groceryTotals[1] = prompt("Enter the totals for the second week of grocery shopping");
groceryTotals[2] = prompt("Enter the totals for the third week of grocery shopping");
groceryTotals[3] = prompt("Enter the totals for the fourth week of grocery shopping");
groceryTotals[4] = prompt("Enter the totals for the fifth week of grocery shopping");
//Debugging purposes
//console.log(groceryTotals[0]);
//console.log(groceryTotals[1]);
//console.log(groceryTotals[2]);
//console.log(groceryTotals[3]);
//console.log(groceryTotals[4]);

//Expression to add all the totals of the array together.
//Had a problem initially with the prompt entering the numbers as string variables.
//Utilized casting in order to identify to the program that the variables are indeed numbers.
groceryFinal = Number(groceryTotals[0]) + Number(groceryTotals[1]) + Number(groceryTotals[2]) + Number(groceryTotals[3]) + Number(groceryTotals[4]);

//Debugging purposes
//console.log(groceryFinal);

groceryAverage = groceryFinal / 5;

alert("You have spent a total of $" + groceryFinal + " on groceries over 5 weeks. That is an average of $" + groceryAverage + " per week");