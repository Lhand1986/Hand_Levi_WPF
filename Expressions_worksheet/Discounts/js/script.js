/*
 Levi Hand
 SDI 1502
 Section 2
 Discounts problem
 */

//Initializing variables without assigning values
var discountedTotalWithoutTax;
var discountedTotalTaxed;
//Initializing variables with prompt for user input
var originalPrice = prompt("Enter the original price of the item");
var discountPercentage = prompt("Enter the percentage being discounted");
var itemDescription = prompt("Enter a brief description of the item");
var salesTax = prompt("Enter the sales tax percentage");

//Expression to calculate the discount
discountedTotalWithoutTax = discountPercentage / 100 * originalPrice;

//Expression to assign the discounted total to the variable
discountedTotalWithoutTax = originalPrice - discountedTotalWithoutTax;

//Debugging purposes
//console.log(discountedTotalWithoutTax);