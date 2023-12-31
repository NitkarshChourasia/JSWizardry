/*
####  Inches to Feet  ####

Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.


[Examples]

___
inchesToFeet(324) ➞ 27

inchesToFeet(12) ➞ 1

inchesToFeet(36) ➞ 3
_____



[Notes]

___
*) If inches are under 12, return 0.
*) 12 inches = 1 foot.
___



[language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
_________
Math.floor()
https://www.w3schools.com/jsref/jsref_floor.asp
Rounds a number DOWNWARDS to the nearest integer, and returns the result. If the passed argument is an integer, the value will not be rounded.
_________
_________
3 Ways to Convert Inches to Feet
https://www.wikihow.com/Convert-Inches-to-Feet
Converting inches to feet is quick and easy once you know how to do it! The basics to remember are that there are 12 inches in one foot, so you can get from inches to f …
_________
_________
Inches to Feet
https://www.rapidtables.com/convert/length/inch-to-feet.html
How many inches make a foot.
_________
_________
Rounding and Truncating Numbers in JavaScript
https://pawelgrzybek.com/rounding-and-truncating-numbers-in-javascript/
Rounding and truncating is a bread and butter action for every single developer. It was covered during your first few math lessons in primary school. Hopefully you stil …
_________
_________
Convert Inches to Feet
https://www.unitconverters.net/length/inches-to-feet.htm
The inch [in] to foot [ft] conversion table and conversion steps are also listed. Also, explore tools to convert inch or foot to other length units or learn more about …
_________

*/
//Your code should go here:

function inchesToFeet(inches){
    return Math.floor(inches/12);
}

if (require.main == module){
    console.log(inchesToFeet(324));
    console.log(inchesToFeet(12));
    console.log(inchesToFeet(36));

    console.log();

    console.log(inchesToFeet(11));
    console.log(inchesToFeet(0));
    console.log(inchesToFeet(1));
}


// 05-09-2023
// complete.