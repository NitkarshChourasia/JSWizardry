/*
####  Evaluate the Group of Parentheses  ####

The function is given a balanced parentheses string. Each open "(" has corresponding closed ")". Compute the total score based on the following rules:
___
*) Substring s = "()" has score 1,
*) Substring "s1s2" has total score as score of "s1" + score of "s2",
*) Substring "(s)" has total score as 2 * score of "s".
___

Calculate the total score of the given expression and return it as integer.


[Examples]

___
evalParentheses("()") ➞ 1
// 1

evalParentheses("(())") ➞ 2
// 2 * 1

evalParentheses("()()") ➞ 2
// 1 + 1

evalParentheses("((())())") ➞ 6
// 2 * (2 * 1 + 1)

evalParentheses("(()(()))") ➞ 6
// 2 * (1 + 2 * 1)

evalParentheses("()(())") ➞ 3
// 1 + 2 * 1

evalParentheses("()((()))") ➞ 5
// 1 + 2 * 2 * 1
_____



[Notes]

N/A


[algorithms] [logic] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
String.prototype.trim()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
Removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characte …
_________
_________
Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
_________

*/
//Your code should go here:

