/*
 Levi Hand
 19FEB2015
 Check the Login
 */

/*
  Make sure the user has the correct username and password.
  If the username doesn’t match then a specific message
  for that should be printed to the console. If the
  password doesn’t match a message should appear for that,
  etc. Only one error message should appear.
 */

//Initializing variables
var username;
var password;
var enteredUsername;
var enteredPassword;

//Assigning values to variables using prompts
username = prompt("Please enter a username.");
password = prompt("Please enter a password.");
enteredUsername = prompt("Enter your username.");
enteredPassword = prompt("Enter your password.");

//Checking to see if two variables do not match each other for validation
if(username != enteredUsername){
    //Output if the variables do not match
    console.log("User not found. Try again.");
//Checking to see if two variables do not match each other for validation
} else if(password != enteredPassword) {
    //Output if the variables do not match
    console.log("Password does not match our records.");
    //Checking to ensure that the first two variables match AND the second two variables match
} else if(enteredUsername === username && enteredPassword === password){
    //Output if the variables match
    console.log("Welcome, " + username + "!");
}