/*
####  Taxi Journey  ####

A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.


[Examples]

___
journeyDistance(3) ➞ 1
The first kilometer costs $3

journeyDistance(9) ➞ 4
The first kilometer costs $3 plus the other three kilometers (costing $2 each)

journeyDistance(5) ➞ 2
_____



[Notes]

___
*) The input tests are integers >= 0.
*) Remember that you are calculating the distance from the cost, not the other way around!
___



[conditions] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
What is the "double tilde" (~~) operator?
https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript
It is used as a faster substitute for Math.floor() for positive numbers. It does not return the same result as Math.floor() for negative numbers, as it just chops off t …
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
ceil() Method
https://www.w3schools.com/jsref/jsref_ceil.asp
Rounds a number upwards to the nearest integer, and returns the result.
_________
_________
Multiple Ternary Operators
https://stackoverflow.com/questions/7757549/multiple-ternary-operators
For anyone that's confused about the multiple ternary syntax (like I was).
_________

*/
//Your code should go here:

// Method 1: function and Math.floor.
function journeyDistance(cost) {
    if (cost >= 0) {
        return Math.floor((cost - 3) / 2) + 1;
    }
    return "Invalid input";
}

// Method 2: Function and ternary operator.
function journeyDistance(cost) {
    return cost >= 0 ? Math.floor((cost - 3) / 2) + 1 : "Invalid input";
}


// Method 3: Function and ternary operator and ~~ instead of Math.floor.
function journeyDistance(cost) {
    return cost >= 0 ? ~~((cost - 3) / 2) + 1 : "Invalid input";
} // ~~ instead of Math.floor acts as the same, here, reason it removes the decimal, returns only int.


if (require.main == module) {
    // Title.
    console.log("####  Taxi Journey  ####");
    // Test cases.
    console.log("Method 1: function and Math.floor.");
    console.log(journeyDistance(3)); // 1
    console.log(journeyDistance(9)); // 4
    console.log(journeyDistance(5)); // 2

    console.log("Method 2: Function and ternary operator.");
    console.log(journeyDistance(3)); // 1
    console.log(journeyDistance(9)); // 4
    console.log(journeyDistance(5)); // 2

    console.log("Method 3: Function and ternary operator and ~~ instead of Math.floor.");
    console.log(journeyDistance(3)); // 1
    console.log(journeyDistance(9)); // 4
    console.log(journeyDistance(5)); // 2

    // End of script
}

// 12 October, 2023.
// complete.