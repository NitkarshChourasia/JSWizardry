/*
####  RegEx XVI : Quantifiers - x*, x+, x?  ####

Quantifiers indicate numbers of characters or expressions to match.
x* matches the preceding item "x" 0 or more times.
___
"A ghost booooed".match(/bo*/) ➞ "boooo"
_____

x+ matches the preceding item "x" 1 or more times. Equivalent to {1,}.
___
"caaaaaaandy".match(/a+/) ➞ "aaaaaa"
_____

x? matches the preceding item "x" 0 or 1 times. If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).
___
"angle.".match(/e?le?/) ➞ "le"
"angel.".match(/e?le?/) ➞ "el"
_____

___
*) Write the regex to match only the street.
*) Use a quantifier in your expression.
___



[Example]

___
let address = "Harry Potter, 4 Privet Drive, Little Whinging, Surrey"
address.match(REGEXP) ➞ "4 Privet Drive"
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
Quantifiers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
Quantifiers indicate numbers of characters or expressions to match.
_________
_________
Regular Expressions Reference: Quantifiers
https://www.regular-expressions.info/refrepeat.html
JGsoft .NET Java Perl PCRE PCRE2 PHP Delphi R JavaScript VBScript XRegExp Python Ruby std::regex Boost Tcl ARE POSIX BRE POSIX ERE GNU BRE GNU ERE …
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

