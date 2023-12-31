/*
####  Four Passengers and a Driver  ####

A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.


[Examples]

___
carsNeeded(5) ➞ 1

carsNeeded(11) ➞ 3

carsNeeded(0) ➞ 0
_____



[Notes]

It's likely there will be a few people left over and some cars won't be filled to max capacity.


[algorithms] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest integer.
_________
_________
Integer Division
https://nickthecoder.wordpress.com/2013/02/11/integer-division-in-javascript/
Can easily be achieved by flooring the quotient of the two numbers, using Math.floor.
_________
_________
ceil() Method
https://www.w3schools.com/JSREF/jsref_ceil.asp
Rounds a number UPWARDS to the nearest integer, and returns the result.
_________

*/
//Your code should go here:

function carsNeeded(nPeople) {
    return Math.ceil(nPeople / 5);
}


if (require.main == module) {
    // Test cases.

    console.log(carsNeeded(5));
    console.log(carsNeeded(11));
    console.log(carsNeeded(0));

    console.log(); // Blank line for readability.

    // My test cases.

    console.log(carsNeeded(3)); // 1
    console.log(carsNeeded(13)); // 3
    console.log(carsNeeded(1)); // 1
}

// 08-09-2023
// complete.