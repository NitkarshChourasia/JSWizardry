/*
####  RegEx: Boundary Assertions VII  ####

You are needed to finish a program that lists how many bad cookies are produced every day. A list of all the cookies produced for the day is given in an array. All that's needed is a regular expression that will make the function work correctly.
___
const cookies = ["bad cookie", "good cookie", "bad cookie", "good cookie", "good cookie"]

function badCookies(res) {
  const REGEXP = /* YOU FILL IN */
  return res.filter( x => REGEXP.test(x)).length
}

badCookies(res) // should output 2
_____



[Challenge]

___
*) Write the regular expression to make the function output the correct number.
*) You're required to use a negative lookbehind assertion in your expression.
___



[Notes]

Check the Resources tab for details on negative lookbehind assertions.


[formatting] [language_fundamentals] [regex] 



-------------------------------------------------------------------
[Resources]
_________
lookaheads (and lookbehinds) in JavaScript regular expressions
https://www.stefanjudis.com/today-i-learned/the-complicated-syntax-of-lookaheads-in-javascript-regular-expressions/
Regular expressions are a challenge by themselves. For me it always takes a few minutes until I understand what a particular regular expression does but there is no que
_________
_________
Assertions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (includi …
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

