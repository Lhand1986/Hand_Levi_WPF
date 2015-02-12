/*
 Levi Hand
 SDI 1502
 Section 2
 Expressions Assignment
 */

/*
Creating a calculator which will calculate the number of bars necessary for a merge tag
to be properly printed at a steel mill. Also creating a calculating system for how many
drops make a full run to cut bundles into the proper size.
 */

mergeNumber = [4];
var numberOfBars = "Enter the total number of bars per bundle.";
var barsInRun;
var mergeNotification = "The number of bars you need to merge from the next heat is ";

// Initializing prompts to input data into the array variables for the merge number.
mergeNumber[0] = prompt("Enter the number of drops remaining on the hot bed");
mergeNumber[1] = prompt("Enter the total number of bars per drop");
mergeNumber[2] = prompt("Enter the number of cuts to make a full bundle");
mergeNumber[3] = prompt("Enter the total number of bars that make a full bundle");
//console.log(mergeNumber[0]);
//console.log(mergeNumber[1]);
//console.log(mergeNumber[2]);
//console.log(mergeNumber[3]);

// Multiplying variables in order to get the number of bars remaining in the run.
mergeNumber[4] = mergeNumber[0] *  mergeNumber[1] * mergeNumber[2];
//console.log(mergeNumber[4]);

mergeNumber[3] -= mergeNumber[4];

alert(mergeNotification + mergeNumber[3] + ".");
