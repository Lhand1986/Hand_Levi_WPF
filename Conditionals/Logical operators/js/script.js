//Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget && payCheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}