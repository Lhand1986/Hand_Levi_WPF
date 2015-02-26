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

//Initialize variable with prompt for user to select what lottery they want
var lotterySelection = prompt("Please type whether you would like the Powerball or Florida Lottery.");

//Verify that user input works.
//console.log(lotterySelection);