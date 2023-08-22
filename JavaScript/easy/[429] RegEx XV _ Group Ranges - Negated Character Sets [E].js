/*
####  RegEx XV : Group Ranges - Negated Character Sets  ####

Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].
___
"1234cba5678".match(/[^abc]/g)
// "12345678", matches any character that are not a, b, or c.
_____

You can also negate ranges, but like with regular character sets, if the hyphen is at the beginning or ending of a range then it will be considered a literal hyphen.
___
"excludenumbers123".match(/[^1-3]/g)
// "excludenumbers", matches any character that are not the numbers 1, 2 or 3.
_____

Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.
___
 "alice15@gmail.com".match(/REGEXP/gi) ➞ ["@", "."]
_____



[Notes]

Check the Resources tab if you get stuck.


[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Regex CheatSheet
https://www.debuggex.com/cheatsheet/regex/javascript
A resource to find regex syntax. Very concise and all on one page.
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Sets and Ranges [...]
https://javascript.info/regexp-character-sets-and-ranges
Several characters or character classes inside square brackets […] mean to “search for any character among given”.
_________
_________
Groups and Ranges
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Indicate groups and ranges of expression characters.
_________
_________
RegExr: Learn, Build and Test Regular Expressions
https://regexr.com/
RegExr is an online tool to learn, build, & test Regular Expressions (RegEx / RegExp). Supports JavaScript & PHP/PCRE RegEx. Results update in real-time as you type. Ro …
_________
_________
Matching a Space in Regex
https://stackoverflow.com/questions/559363/matching-a-space-in-regex
If you're looking for a space, that would be " " (one space). If you're looking for one or more, it's " *" (that's two spaces and an asterisk) or " +" (one space and …
_________

*/
//Your code should go here:

