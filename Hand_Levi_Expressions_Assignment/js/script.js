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

There is some terminology in the calculation that isn't exactly common knowledge.
What I've based this off of is something that I do as an every day task at my job
working for a steel mill. Part of what we have to do is keep track of how many pieces
of metal we are producing by printing tags, and for each different "heat" we have to
borrow pieces from the next "heat" coming up if we do not have enough pieces to make
a full-sized bundle. I double-checked the math against standard calculations that we
use, and everything checks out according to my experience. I thought it would be a
better outcome if I based the program off something with which I was already familiar
with doing daily. Also, it could be helpful somewhere down the line.
 */

mergeNumber = [4];
var barsInRun = "The total number of drops per run is ";
var mergeNotification = "The number of bars you need to merge from the next heat is ";
var numberOfBars;

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

// Calculating how many drops are in a full run.
numberOfBars = prompt("Enter the total number of bars per bundle");

//console.log(numberOfBars);

numberOfBars /= mergeNumber[2];

//console.log(numberOfBars);

numberOfBars = numberOfBars / mergeNumber[1];

alert(barsInRun + numberOfBars + ".");