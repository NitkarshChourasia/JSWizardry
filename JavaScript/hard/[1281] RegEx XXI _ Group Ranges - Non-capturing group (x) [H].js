/*
####  RegEx XXI : Group Ranges - Non-capturing group (?:x)  ####

Groups and ranges indicate groups and ranges of expression characters. Non-capturing groups matches "x" and behaves like capturing groups, but it does not remember the match.
Keep in mind that capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing groups.
Write a RegEx that matches colors in the format #abc or #abcdef. That is: # followed by 3 or 6 hexadecimal digits. Use a non capturing group in your expression.
___
let REGEXP = /your regexp/g
let str = "color: #3f3; background-color: #AA00ef; and: #abcd"
str.match(REGEXP) ; ➞  #3f3 #AA00ef
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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Capturing Groups
https://javascript.info/regexp-groups
A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”. That has two effects: It allows to get a part of the match as a separate …
_________
_________
Regex
https://regex101.com/
An explanation of your regex will be automatically generated as you type.
_________

*/
//Your code should go here:

