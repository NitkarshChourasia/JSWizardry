/*
####  RegEx: Boundary Assertions V  ####

You've just webscraped a web page and stored it in a string. In the string there is a bullet list of states that voted for President Trump's impeachment:
___
const str = `
* Texas = no
* California = yes
* Florida = yes
* Michigan = no
`
_____

Add a negative lookahead assertion so a regex match would output the states that voted no. DO NOT use a positive lookahead assertion.


[Notes]

___
*) You must use a negative lookahead assertion (check the Resources tab for info).
*) This is fake data and used only for educational purposes.
___



[formatting] [regex] [strings] 



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
Assertions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (includi …
_________

*/
//Your code should go here:

