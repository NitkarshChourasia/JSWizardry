/*
####  Closed Brackets String  ####

The function is given a string consisting of a collection of three characters:
___
*) "(" open bracket
*) ")" closed bracket
*) "J" Joker, which can be replaced by "(", ")" or ""
___

Develop a solution to determine if the given string represents a proper sequence of parenthesis; return true / false. Each open bracket on the left should have a corresponding closed bracket on the right. For example "(()())" is a proper sequence, "()(()" is not a proper sequence. The presence of Jokers adds an extra level of difficulty to the analysis because each "J" makes three possibilities to consider. An empty string is considered a valid string because it does not contain unbalanced brackets.


[Examples]

___
closedBrackets("(J))") ➞ true
// J can be replaced with (

closedBrackets("(") ➞ false
// Unbalanced open bracket.

closedBrackets("") ➞ true
// Empty string is a valid sequence.

closedBrackets("()J(") ➞ false
// Not possible to balance the brackets.

closedBrackets("J") ➞ true
// J can be replaced with an empty string.

closedBrackets(")(") ➞ false
// Numbers of ( and ) are the same but they are in the wrong places.

closedBrackets("()") ➞ true
// A proper sequence of balanced brackets.
_____



[Notes]

N/A


[algorithms] [data_structures] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

