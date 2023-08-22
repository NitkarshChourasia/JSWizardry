/*
####  What's My Golf Score?  ####

A standard-sized golf course has 18 holes. Each hole is given a par, which is the expected number of strokes (hits) that a good player would use to complete a hole. Golf also uses different terms for a player being over/under par for a particular hole:
___
*) "eagle" = 2 under par (-2)
*) "birdie" = 1 under par (-1)
*) "bogey" = 1 over par (+1)
*) "double-bogey" = 2 over par (+2)
___

Example scores:
___
*) "birdie" on a par 3 hole = 2
*) "eagle" on a par 5 hole = 3
*) "par" on a par 3 hole = 3
*) "bogey" on a par 4 hole = 5
___

Given an array of pars for an 18-hole golf course, and another array containing the player result for each hole, return the total score for the round of golf.


[Example]

___
course = [4, 4, 5, 3, 4, 4, 3, 5, 5, 3, 5, 4, 4, 4, 4, 3, 4, 4]

result = ["eagle", "bogey", "par", "bogey", "double-bogey", "birdie", "bogey", "par", "birdie", "par", "par", "par", "par", "par", "bogey", "eagle", "bogey", "par"]

score = 2+5+5+4+6+3+4+5+4+3+5+4+4+4+5+1+5+4 = 73
_____



[Notes]

For this challenge, there will be no holes-in-one, albatrosses (-3), or anything worse than a double-bogey.


[arrays] [conditions] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Object Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Creates an object wrapper.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________
_________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________

*/
//Your code should go here:

