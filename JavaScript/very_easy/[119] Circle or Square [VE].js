/*
####  Circle or Square  ####

Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.


[Examples]

___
circle_or_square(16, 625) ➞ True

circle_or_square(5, 100) ➞ False

circle_or_square(8, 144) ➞ True
_____



[Notes]

___
*) You can use Pi to 2 decimal places (3.14).
*) Circumference of a circle equals 2 * Pi * radius.
*) To find the perimeter of a square using its area, find the square root of area (to get side length) and multiply that by 4.
___



[geometry] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number, that is..
_________
_________
Math.PI
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
Represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:
_________
_________
How to Find Perimeter from Area
https://study.com/academy/lesson/how-to-find-perimeter-from-area.html
Here, you'll learn the steps to find the perimeter of a square, circle or rectangle from the area of the given shape. You'll also read about the...
_________
_________
Perimeter of Square
https://byjus.com/maths/perimeter-of-square/
The perimeter of a square is the length that its boundary covers. The perimeter of a square is obtained by adding all the sides together. Here, the concepts about the p …
_________
_________
Circle Formulas in Math
https://www.allmathtricks.com/circle-formulas-area-circumference/
A circle can be defined as, it is the locus of all points equidistant from a central point. In this we discuss about Properties of circle, circle formulas like area, pe …
_________
_________
Math.PI
https://www.w3schools.com/jsref/jsref_pi.asp
✔
_________
_________
Math.sqrt()
https://www.w3schools.com/jsref/jsref_sqrt.asp
✔😎✔
_________
_________
Circle Calculator
https://www.calculatorsoup.com/calculators/geometry-plane/circle.php
Calculate the area, circumference, radius and diameter of circles. Find A, C, r and d of a circle. Given any 1 known variable of a circle, calculate the other 3 unknown …
_________

*/
//Your code should go here:

// I can also make it OOP based by creating a function or arrow for formulas, and then comparing them for better readability.

// Method 1: Ternary Arrow Function.
circle_or_squareArrowTernary = (cirRadius, sqArea) => 2 * Math.PI * cirRadius > Math.sqrt(sqArea) * 4 ? true : false;

// I can also use a function to ouput the answers.

// Method 2: Ternary Function.

function circle_or_squareTernaryFunction(cirRadius, sqArea) {
    return 2 * Math.PI * cirRadius > Math.sqrt(sqArea) * 4 ? true : false;
}

// Method 3: OOP based.
function circle_or_squareOOP(cirRadius, sqArea) {
    let cirumCircle = 2 * Math.PI * cirRadius;
    let periSq = Math.sqrt(sqArea) * 4;
    return cirumCircle > periSq;
}

// Method 4: Simple.
function circle_or_squareSimple(cirRadius, sqArea) {
    return 2 * Math.PI * cirRadius > Math.sqrt(sqArea) * 4;
}

// Method 5: If Else.
function circle_or_squareIfElse(cirRadius, sqArea) {
    circumCircle = 2 * Math.PI * cirRadius;
    sqPeri = Math.sqrt(sqArea) * 4;

    if (circumCircle > sqPeri) {
        return true;
    }
    return false;
}


if (require.main == module) {
    console.log("#### Circle or Square  ####\n");
    // Test cases.

    console.log("Method 1: Ternary Arrow Function.");
    console.log(circle_or_squareArrowTernary(16, 625));
    console.log(circle_or_squareArrowTernary(5, 100));
    console.log(circle_or_squareArrowTernary(8, 144));

    console.log("Method 2: Ternary Function.");
    console.log(circle_or_squareTernaryFunction(16, 625));
    console.log(circle_or_squareTernaryFunction(5, 100));
    console.log(circle_or_squareTernaryFunction(8, 144));

    console.log("Method 3: OOP based.");
    console.log(circle_or_squareOOP(16, 625));
    console.log(circle_or_squareOOP(5, 100));
    console.log(circle_or_squareOOP(8, 144));

    console.log("Method 4: Simple.");
    console.log(circle_or_squareSimple(16, 625));
    console.log(circle_or_squareSimple(5, 100));
    console.log(circle_or_squareSimple(8, 144));

    console.log("Method 5: If Else.");
    console.log(circle_or_squareIfElse(16, 625));
    console.log(circle_or_squareIfElse(5, 100));
    console.log(circle_or_squareIfElse(8, 144));
}
// 17-09-2023
// complete.