/*
####  RegEx: Character Classes VIII ⁠— Wildcard .  ####

You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character. The . is the only exception. It requires no \ and it is a wildcard character. It matches any character except for line terminators.
ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.
Here are a list of the characters classes in JavaScript:
___
., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
_____

___
const str = "eta, edu, etc, ele, epa, eye, exe, emf, ete, eon, era"

// Instead of a string we want an array like this:
// ["eta", "edu", "etc", "ele", "epa", "eye", "exe", "emf", "ete", "eon", "era"]

// You could use the split() method but let's try with a regular expression.
_____

Write the regular expression that returns an array of all words. Use the character class . in your expression.


[Notes]

Check the Resources tab for details on character classes if you're stuck.


[formatting] [language_fundamentals] [regex] 



-------------------------------------------------------------------
[Resources]
_________
Character Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
Distinguish kinds of characters (e.g. distinguishing between letters and digits).
_________
_________
RegEx Tester and Debugger
https://regex101.com/
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
Regular Expressions
http://zetcode.com/javascript/regularexpressions/
Shows how to use regular expressions in JavaScript. The examples work with quantifiers, character classes, alternations, and groups.
_________

*/
//Your code should go here:

