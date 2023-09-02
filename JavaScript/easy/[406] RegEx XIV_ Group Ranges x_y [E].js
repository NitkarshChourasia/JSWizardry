/*
####  RegEx XIV: Group Ranges x|y  ####

Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
___
const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
_____

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.


[Examples]

___
"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
_____



[Notes]

Check the Resources tab if you get stuck.


[formatting] [regex] 



-------------------------------------------------------------------
[Resources]
_________
Groups and Ranges
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Indicate groups and ranges of expression characters.
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Alternation with The Vertical Bar or Pipe Symbol
https://www.regular-expressions.info/alternation.html
I already explained how you can use character classes to match a single character out of several possible characters. Alternation is similar. You can use alternation to …
_________

*/
//Your code should go here:

