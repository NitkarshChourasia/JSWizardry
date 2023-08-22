/*
####  RegEx: Boundary Assertions VII  ####

You are given the task to fetch all positive numbers from lists. You discover that the lists are in string format and the numbers are separated by spaces. Someone has already created a function to output positive numbers but they just need a RegEx to make it work.
___
const list = "23 -43 34 -44 45 -55 56"

function positiveNumbers(list) {
  const REGEXP = /* YOU FILL IN */
  return res.filter( x => REGEXP.test(x))
}

positiveNumbers(list) // should return ["23", "34", "45", "56"]
_____

Write the regular expression to make the function work. You are required to use a negative lookbehind assertion in your expression.


[Notes]

Check the Resources tab for details on lookbehind assertions.


[formatting] [language_fundamentals] [regex] 



-------------------------------------------------------------------
[Resources]
_________
lookaheads (and lookbehinds) in JavaScript regular expressions
https://www.stefanjudis.com/today-i-learned/the-complicated-syntax-of-lookaheads-in-javascript-regular-expressions/
Regular expressions are a challenge by themselves. For me it always takes a few minutes until I understand what a particular regular expression does but there is no que …
_________
_________
RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
Assertions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (includi …
_________

*/
//Your code should go here:

