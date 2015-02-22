//While Loops
console.log("------------Loops------------")

var b = 10; //sets up the index

while (b > 0){ //checks the condition
    console.log(b + " kegs on the wall.");
    b--; //increments or decrements the index
}

console.log("------------ Do While Loops ------------")

var c = 10;

do{ // Runs the code before checking the condition
    console.log(c + " kegs on the wall");
    c--;
}
while(c > 0); // As long as this condition is true


console.log("------------ For Loops ------------");


for (var i = 10; i > 0; i--){ // Shorthand version of the while and do while loop
    console.log(i + " kegs on the wall.");
}