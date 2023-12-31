/*
####  The Farm Problem  ####

In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
___
*) chickens = 2 legs
*) cows = 4 legs
*) pigs = 4 legs
___

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.


[Examples]

___
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50
_____



[Notes]

___
*) Don't forget to return the result.
*) The order of animals passed is animals(chickens, cows, pigs).
*) Remember that the farmer wants to know the total number of legs and not the total number of animals.
___



[algorithms] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
_________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are a …
_________
_________
Operators in JavaScript
https://javascript.info/operators
We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on. In this chapter, we’ll concentrate on aspects of opera …
_________
_________
There are 63 animals and 148 legs. How many cows are there on the farm?
https://www.wyzant.com/resources/answers/36193/there_are_cows_chickens_in_a_farm_yard_there_are_63_animals_and_148_legs_how_many_cows_are_there_in_the_farm_yard
You're almost there. Simply use the last expression to get x in terms of y or vice versa and use that to replace the corresponding variable in the lest-to-last expression.
_________
_________
Arithmetic Operators
https://www.w3schools.com/js/js_operators.asp
Are used to perform arithmetic on numbers.
_________
_________
Arrow Functions
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________

*/
//Your code should go here:


function animals(chickens, cows, pigs) {
    return chickens * 2 + (cows + pigs) * 4
}

if (require.main == module) {
    console.log(animals(2, 3, 5))
    console.log(animals(1, 2, 3))
    console.log(animals(5, 2, 8))
}

// complete.