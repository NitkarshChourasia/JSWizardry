/*
####  Scoring Strings  ####

Nesting level, for this challenge, refers to the depth of the parentheses surrounding an integer. For example, the string "(5((10)8))", 5 has a nesting level of 1 because it has one set of parentheses around it, 10 has a nesting level of 3 because it has 3 sets of parentheses around it, and 8 has a nesting level of 2.
We can score this string by multiplying each number with its nesting level and then summing up the results, as follows:
___
"(5((10)8))" ➞ 5*1 + 10*3 + 8*2 ➞ 51
_____

Create a function that takes a string as its argument and returns its score.


[Examples]

___
scoreIt("()") ➞ 0

scoreIt("4(123)") ➞ 123
// 4*0 + 123*1 = 123

scoreIt("((((1)2)3)4)") ➞ 20
// 1*4 + 2*3 + 3*2 + 4*1 = 20

scoreIt("(6)8((34(7)))") ➞ 95
// 6*1 + 8*0 + 34*2 + 7*3 = 95
_____



[Notes]

___
*) The nesting for all test cases is balanced and logically consistent (there are no missing or extra parentheses).
*) Test cases contain only positive integers.
___



[logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

