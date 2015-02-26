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

//Initialize function to create lottery numbers
function lotteryNumberGenerator(min, max) {

    //Create function to compare numbers within the function and reduce one of them by one if there is a match
    function compareNumbers(a, b){
        if (a === b){
            a --
            return a;
        }
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

        console.log("Original" + myLottoNumbers);

        //Utilize the compareNumbers function to check the numbers within the array
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[1]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[2]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[3]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[0], myLottoNumbers[4]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[1], myLottoNumbers[2]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[1], myLottoNumbers[3]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[1], myLottoNumbers[4]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[2], myLottoNumbers[3]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[2], myLottoNumbers[4]);
        myLottoNumbers[0] = compareNumbers(myLottoNumbers[3], myLottoNumbers[4]);
    }

    return myLottoNumbers;

}

//Main code

//Call lotteryValidation function
lotterySelection = lotteryValidation(lotterySelection);
//Debugging to ensure that the function returns the proper value
//console.log(lotterySelection);

//Call lotteryNumberGenerator function
lotteryOutput = lotteryNumberGenerator(1, 59);

//Test the value of lotteryOutput
console.log("Fixed" + lotteryOutput);