/*
####  RegEx: Boundary Assertions VI  ####

You're needed to finish a program that lists how many tall people work in your company. All that is needed is a regular expression that will make the function work correctly.
___
const res = ["tall height", "tall height", "short height", "medium height", "tall height"]

function countTall(res) {
  const REGEXP = /* YOU FILL IN */
  return res.filter( x => REGEXP.test(x)).length
}

countTall(res) // should output 3
_____

Write the regular expression to make the function output the correct number. You're required to use a positive lookbehind assertion in your expression.


[Notes]

Check the Resources tab for details on lookbehind assertions.


[formatting] [language_fundamentals] [regex] 



-------------------------------------------------------------------
[Resources]
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
lookaheads (and lookbehinds) in JavaScript regular expressions
https://www.stefanjudis.com/today-i-learned/the-complicated-syntax-of-lookaheads-in-javascript-regular-expressions/
Regular expressions are a challenge by themselves. For me it always takes a few minutes until I understand what a particular regular expression does but there is no que …
_________
_________
Lookahead and Lookbehind Zero-Length Assertions
https://www.regular-expressions.info/lookaround.html
Lookahead and lookbehind, collectively called “lookaround”, are zero-length assertions just like the start and end of line, and start and end of word anchors explained …
_________
_________
Assertions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (includi …
_________

*/
//Your code should go here:

