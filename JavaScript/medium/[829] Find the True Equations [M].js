/*
####  Find the True Equations  ####

In this challenge you will be given an array containing equations, with each equation written as a string. Here's an example:
___
["1+1=2", "2+2=3", "5*5=10", "3/3=1"]
_____

If you do the math, you'll see that the equations "1+1=2" and "3/3=1" are actually true while "2+2=3" and "5*5=10" are false nonsense.
Write a function which, given an array of equations as above, returns only the true equations. For instance, for the example above the output should be:
___
["1+1=2", "3/3=1"]
_____



[Examples]

___
trueEquations(["2*2=4"]) ➞ ["2*2=4"]

trueEquations(["1+1=3", "3-1=1"]) ➞ []

trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]) ➞ ["1+1=2", "3/3=1"]
_____



[Notes]

___
*) If all equations are false, return the empty array [], as in the second example.
*) The equations will only involve the elementary operations: +, -, *, /
___



[algebra] [language_fundamentals] [math] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Regular Expressions
https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
Are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() me …
_________
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#:~:text=The%20indexOf()%20method%20returns,the%20value%20is%20not%20found.
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found
_________
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

