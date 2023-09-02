/*
####  RegEx XIX : Group Ranges - Capturing groups (x)  ####

Groups and ranges indicate groups and ranges of expression characters. Capturing groups matches x in (x) and remembers the match.
___
"foo bar".match(/(foo)/) ➞ matches and remembers "foo"
_____

Capturing groups often are used along with quantifiers. Quantifiers will use the capturing group as a whole.
___
"Gogogo now!".match(/(go)+/i) ➞ "Gogogo"
_____

Caveat: Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses.
MAC-address of a network interface consists of 6 two-digit hex numbers separated by a colon (e.g. 01:32:54:67:89:AB). Write a RegExp that checks whether a string is MAC-address.
___
let regexp = /your regexp/

regexp.test("01:32:54:67:89:AB") ➞ true
regexp.test("0132546789AB") ➞ false
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
Capturing groups
https://javascript.info/regexp-groups
A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”. That has two effects: It allows to get a part of the match as a separate …
_________

*/
//Your code should go here:

