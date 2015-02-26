/*
 Levi Hand
 SDI 1502
 Section 2
 Functions Assignment
 */

/*
 Creating a code utilizing functions that will output either
 the Powerball numbers or regular Florida lottery numbers
 based on user input. The numbers returned will utilize the
 Math.random() object in order to calculate a random series
 of numbers. The goals are as follows:
 A. Use at least one function
 B. Any functions created must use arguments and parameters
 C. A value must be returned for each function
 D. Must not use "main code" variable inside of a function;
 the values must be passed in as arguments and out as returned
 values.
 E. All user prompts must be validated using a while loop.

 The regular Florida lottery has six random numbers between
 1 and 53; the Powerball lottery has five random numbers between
 1 and 59 and a Powerball between 1 and 35.

 Each random number must be different; a lottery will never have
 two of the same number unless it is the final Powerball number.

 There should be at least one prompt to ask the user if they want
 the numbers for the Florida lottery or the Powerball lottery.
    Each prompt should be validated using a while loop.
 */

//Variables

//Initialize variable with prompt for user to select what lottery they want
var lotterySelection = prompt("Please type whether you would like the Powerball or Florida Lottery.");

//Initialize variable to hold function output
var lotteryOutput;

//Verify that user input works.
//console.log(lotterySelection);

//Functions

//Create a function to validate the lottery selection
function lotteryValidation(lotteryName){

    //Create a counter variable so the loop does not continue infinitely
    var numOfTimes = 1;

    //Creating while loop to validate user input
    while (lotteryName === ""){

        //Reenter user input with a prompt and string message
        lotteryName = prompt("You did not enter any valid input.\nPlease enter either \"Powerball\" or \"Florida Lottery\".");
        //Increment counter variable
        numOfTimes++;

        //Create if statement to break loop
        if (numOfTimes === 10){

            //Debugging to ensure that the counter and name input works correctly
            //console.log(numOfTimes);

            //Error message to notify the user
            console.log("You had 10 chances to make a choice. No lottery for you!");
            //Break out of the while loop
            break;
        }

    }
    //Output local value to function call variable
    return lotteryName;
}
//Main code

//Call lotteryValidation function
lotterySelection = lotteryValidation(lotterySelection);
//Debugging to ensure that the function returns the proper value
//console.log(lotterySelection);