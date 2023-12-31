/*
####  I'd Like a New Shade of Blue, Please  ####

I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
___
*) n is the number of square meters I can paint.
*) w and h are the widths and heights of a single wall in meters.
___



[Examples]

___
howManyWalls(100, 4, 5) ➞ 5

howManyWalls(10, 15, 12) ➞ 0

howManyWalls(41, 3, 6) ➞ 2
_____



[Notes]

___
*) Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
*) All walls will have the same dimensions.
*) All numbers will be positive integers.
___



[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
Area of Rectangles Review
https://www.khanacademy.org/math/cc-third-grade-math/imp-geometry/imp-multiply-to-find-area/a/area-rectangles-review
Area is the space inside of a two-dimensional shape. We can also think of area as the amount of space a shape covers. For example, the rectangle below has an area of 12 …
_________
_________
Math.trunc()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
Returns the integer part of a number by removing any fractional digits.
_________
_________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
_________

*/
//Your code should go here:

function howManyWalls(paintHave, width, height) {
    return Math.floor(paintHave / (width * height));
}

if (require.main == module) {
    console.log(howManyWalls(100, 4, 5));
    console.log(howManyWalls(10, 15, 12));
    console.log(howManyWalls(41, 3, 6));
}

// 05-09-2023
// complete.