/*
####  Casting Out Nines  ####

This is a method commonly taught in primary schools, used to verify the correctness of an operation; usually (as in this exercise) the multiplication.
Every number involved in the multiplication is replaced by its digital root (reiterated sum of its digits until a single-digit number is obtained). After this, the digital roots of factors are multiplied, and again this result is reduced to the digital root. If the digit obtained is different from the result's digital root the operation is surely wrong, if it is equal the operation can be correct with a possibility out of nine to be a false positive.
A false positive occurs when the initial two numbers, when multiplied together, do not equal the result, but the digital roots obtained using the process described in this paragraph are equal to each other.
Given two factors and a result, implement a function that returns a string in the format:
___
*) "x, x, x, x = Result!", with x being the digital roots (a, b, r, and a*b in the order).
*) Result! being "Correct!" if the last two digits are the same and the result is correct.
*) "False positive!" if the last two digits are the same but the result is wrong.
*) "Wrong!" if the last two digits are different.
___



[Examples]

___
// D.R. is for Digital Root

castOutNines(467, 78, 36426) ➞ "8,6,3,3 = Correct!"
// D.R. 467 = 4 + 6 + 7 = 17 = 1 + 7 = 8
// D.R. 78 = 7 + 8 = 15 = 1 + 5 = 6
// D.R. 36426 = 3 + 6 + 4 + 2 + 6 = 21 = 2 + 1 = 3
// D.R. 8 * 6 = D.R. 48 = 4 + 8 = 12 = 1 + 2 = 3
// Last two digits are the same and result is correct: Correct! 

castOutNines(467, 78, 36425) ➞ "8,6,2,3 = Wrong!"
// D.R. 467 = 8
// D.R. 78 = 6
// D.R. 36425 = 3 + 6 + 4 + 2 + 5 = 20 = 2 + 0 = 2
// D.R. 8 * 6 = 3
// Last two digits are different and result is wrong: Wrong!

castOutNines(467, 78, 129) ➞ "8,6,3,3 = False positive!"
// D.R. 467 = 8
// D.R. 78 = 6
// D.R. 129 = 1 + 2 + 9 = 12 = 1 + 2 = 3
// D.R. 8 * 6 = 3
// Last two digits are equals but result is wrong: False positive!
_____



[Notes]

N/A


[language_fundamentals] [logic] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Casting Out Nines - Numberphile
https://www.youtube.com/watch?v=FlndIiQa20o
Dr James Grime and a handy trick for checking calculations. Ditch the nines...
_________
_________
Casting Out Nines
https://en.wikipedia.org/wiki/Casting_out_nines
To "cast out nines" from a single number, its decimal digits can be simply added together to obtain its so-called digit sum. The digit sum of 2946, for example is 2 + …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

