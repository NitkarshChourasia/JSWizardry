/*
####  RegEx XVIII : Quantifiers - Control greed quantifiers with ?  ####

Quantifiers indicate numbers of characters or expressions to match. By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible. The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match.
___
"some <foo> <bar> new </bar> </foo> thing".match(/<.*>/) ➞ "<foo> <bar> new </bar> </foo>"
"some <foo> <bar> new </bar> </foo> thing".match(/<.*?>/) ➞ "<foo>"
_____

Find all HTML comments in the text. Use the ? in your expression.
___
let str = `... <!-- My -- comment test --> ..  <!----> .. `;

str.match(regexp) ➞ "<!-- My -- comment test -->", "<!---->"
_____



[Notes]

Check the Resources if you get stuck.


[regex] 



-------------------------------------------------------------------
[Resources]
_________
Greedy and Lazy Quantifiers
https://javascript.info/regexp-greedy-and-lazy
Quantifiers are very simple from the first sight, but in fact they can be tricky. We should understand how the search works very well if we plan to look for something …
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Quantifiers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
Quantifiers indicate numbers of characters or expressions to match.
_________

*/
//Your code should go here:

