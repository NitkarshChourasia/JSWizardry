/*
####  First Before Second Letter  ####

You are given three inputs: a string, one letter, and a second letter.
Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.


[Examples]

___
firstBeforeSecond("a rabbit jumps joyfully", "a", "j") ➞ true
// every instance of "a" occurs before every instance of "j"

firstBeforeSecond("knaves knew about waterfalls", "k", "w") ➞  true

firstBeforeSecond("happy birthday", "a", "y") ➞ false
// the "a" in "birthday" occurs after the "y" in "happy"

firstBeforeSecond("precarious kangaroos", "k", "a") ➞ false
_____



[Notes]

___
*) All strings will be in lower case.
*) All strings will contain the first and second letters at least once.
___



[strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String​.prototype​.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
Greater than (>)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than
Returns true if the left operand is greater than the right operand, and false otherwise.
_________

*/
//Your code should go here:

