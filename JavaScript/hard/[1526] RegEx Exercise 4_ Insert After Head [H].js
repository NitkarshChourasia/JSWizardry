/*
####  RegEx Exercise 4: Insert After Head  ####

Write a regular expression that inserts <h1>Hello</h1> immediately after the <body> tag. The tag may have attributes. You only have to come up with the regular expression. The replace function is already done (see the Tests tab).


[Examples]

___
const REGEXP = /your regular expression/

let str = "\<html><body style="height: 200px"> ... </body></html>"

str = str.replace(REGEXP, `<h1>Hello</h1>`)

console.log(str) ➞ <html> <body style="height: 200px"><h1>Hello</h1> ... </body> </html>
_____



[Notes]

You can find the solution in the Resources tab.


[regex] 



-------------------------------------------------------------------
[Resources]
_________
Lookahead and Lookbehind
https://javascript.info/regexp-lookahead-lookbehind
Sometimes we need to find only those matches for a pattern that are followed or preceeded by another pattern. There’s a special syntax for that, called “lookahead” and …
_________
_________
Online RegEx Tester and Debugger
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

