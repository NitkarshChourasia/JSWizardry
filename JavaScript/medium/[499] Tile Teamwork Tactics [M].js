/*
####  Tile Teamwork Tactics  ####

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.


[Examples]

___
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
_____



[Notes]

___
*) You cannot move backward (which is why example #3 doesn't work).
*) If you are already on the same tile, return false, as you would be advancing away.
*) Expect only positive integer inputs.
___



[conditions] [language_fundamentals] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Logical AND (&&)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. It is typically used with Boolean (logica …
_________
_________
Greater than or equal (>=)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
Returns true if the left operand is greater than or equal to the right operand, and false otherwise.
_________
_________
Less than or equal (<=)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal#:~:text=The%20less%20than%20or%20equal,right%20operand%2C%20and%20false%20otherwise.
Returns true if the left operand is less than or equal to the right operand, and false otherwise.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________
_________
Return Statement
https://www.w3schools.com/jsref/jsref_return.asp
The return statement ends function execution and specifies a value to be returned to the function caller.
_________

*/
//Your code should go here:

