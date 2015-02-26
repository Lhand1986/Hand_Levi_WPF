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

//Initialize a variable to hold the powerball output
var intPowerBall;

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
        lotteryName = prompt("You did not enter any valid input.\nPlease enter either \"Powerball\" or \"Florida Lottery\" numbers.");
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

//Initialize function to create lottery numbers
function lotteryNumberGenerator(min, max) {

    //Create function to compare numbers within the function and reduce one of them by one if there is a match
    function compareNumbers(a, b){
        //If argument a is strictly equal to argument b
        if (a === b){
            //Decrement argument a
            a--
        }
        //Return decremented output of argument a to the function call
        return a;
    }

    //Initialize a number array to hold lottery numbers
    var myLottoNumbers = [];

    //Create a while loop with a max loop number
    for (var i = 0; i < 5; i++) {

        //Initialize variable and utilize Math function with equation to make a range of random numbers
        var randomNumber = Math.random() * (max - min) + min;

        //Round the decimal number of the random value up to the nearest whole number
        randomNumber = Math.ceil(randomNumber);

        //Use the counter of the while loop to assign the random value to different spots in the array
        myLottoNumbers[i] = randomNumber;

        //Debugging output to ensure that the compareNumbers function is working properly
        //console.log("Original " + myLottoNumbers);

        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[1]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[2]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[3]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[4]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[1] = compareNumbers(myLottoNumbers[1], myLottoNumbers[2]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[1] = compareNumbers(myLottoNumbers[1], myLottoNumbers[3]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[1] = compareNumbers(myLottoNumbers[1], myLottoNumbers[4]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[2] = compareNumbers(myLottoNumbers[2], myLottoNumbers[3]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[2] = compareNumbers(myLottoNumbers[2], myLottoNumbers[4]);
        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[3] = compareNumbers(myLottoNumbers[3], myLottoNumbers[4]);
    }
    //Return value of local array myLottoNumbers to function call
    return myLottoNumbers;

}

//Create function to output powerball number using a minimum and maximum parameter
function powerBall(min, max){

    //Initialize a variable and apply the Math.random calculation
    var myPowerBall = Math.random() * (max - min) + min;

    //Round the random variable up from the nearest decimal to a whole number
    myPowerBall = Math.ceil(myPowerBall);

    //Return the value of the variable myPowerBall to the function call
    return myPowerBall;
}

//Main code

//Call lotteryValidation function
lotterySelection = lotteryValidation(lotterySelection);
//Debugging to ensure that the function returns the proper value
//console.log(lotterySelection);

//Checking to see if the lotterySelection variable equals "Florida Lottery"
if (lotterySelection === "Florida Lottery") {
    //Call lotteryNumberGenerator function
    lotteryOutput = lotteryNumberGenerator(1, 53);

    //Test the value of lotteryOutput
    //console.log("Fixed " + lotteryOutput);

    //Output Florida Lottery number selection
    console.log("Your Florida Lottery numbers are: " + lotteryOutput);

//Checking to see if the lotterySelection variable equals "Powerball"
}else if (lotterySelection === "Powerball"){
    //Call lotteryNumberGenerator function
    lotteryOutput = lotteryNumberGenerator(1, 59);

    //Call the powerBall function and assign an argument
    intPowerBall = powerBall(1, 35);

    //Output Powerball selection
    console.log("Your Powerball numbers are: " + lotteryOutput + " with PB " + intPowerBall);

    //If none of the previous conditions are true, they didn't follow the instructions very well.
    }else{
    //Output request to follow the instructions
    console.log("Follow the instructions, please.")
}



//Test the output value of the powerBall function
//console.log(intPowerBall);