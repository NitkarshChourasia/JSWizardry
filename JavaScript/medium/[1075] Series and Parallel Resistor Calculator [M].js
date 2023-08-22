/*
####  Series and Parallel Resistor Calculator  ####

Create a function that takes an array of resistors and calculates the output of total resistance if the circuit is connected in parallel or in series.


[Examples]

___
resistanceCalculator([10, 20, 30, 40, 50]) ➞ [4.38, 150]

resistanceCalculator([25, 14, 65, 18]) ➞ [5.48, 122]

resistanceCalculator([10, 10]) ➞ [5, 20]

resistanceCalculator([0, 0, 0, 0]) ➞ [0, 0]

resistanceCalculator([1.1, 2.1, 3.2, 4.3, 5.4, 6.5]) ➞ [0.44, 22.6]
_____



[Notes]

___
*) Return parallel resistance as the first element and series resistance as second element of the array.
*) Round up the total resistance to two decimal places.
___



[arrays] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
toFixed() Method
https://www.w3schools.com/jsref/jsref_tofixed.asp#:~:text=The%20toFixed()%20method%20converts,create%20the%20desired%20decimal%20length.
Converts a number into a string, rounding to a specified number of decimals. Note: if the desired number of decimals are higher than the actual number, zeros are added …
_________
_________
Resistors in Series and Parallel
https://www.khanacademy.org/science/high-school-physics/dc-circuits/series-and-parallel-resistors-2/a/resistors-in-series-and-parallel
Review how to find the equivalent resistance for resistors in parallel and series configurations. Recall the current and voltage properties of series and parallel confi …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

