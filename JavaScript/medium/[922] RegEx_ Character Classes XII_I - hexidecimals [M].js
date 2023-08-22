/*
####  RegEx: Character Classes XII⁠I - hexidecimals  ####

You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
Here are a list of the characters classes in JavaScript:
___
., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh,
_____

You might get text that looks like it's all English characters but it very well may not be:
___
pànts !== pants
_____

To ensure that you only get the characters you want in a string you will need to use the character classes that accept hexadecimal digits.
Create a regex that matches the word "edabit". You cannot use character classes \w, \d, [], or . to solve.


[Notes]

Use the handy text to hex converter tool in the Resources tab.


[formatting] [regex] [validation] 



-------------------------------------------------------------------
[Resources]
_________
RegEx Tester and Debugger
https://regex101.com
With highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Convert Text to Hex
https://www.browserling.com/tools/text-to-hex
Useful, free online tool that converts plain text to hex string. No ads, nonsense or garbage, just a text to hex converter. Press button, get result.
_________
_________
Character Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
Distinguish kinds of characters (e.g. distinguishing between letters and digits).
_________
_________
Unicode-aware Regular Expressions
https://mathiasbynens.be/notes/es6-unicode-regex
Without the flag, things like \u{1234} can technically still occur in patterns, but they won’t be interpreted as Unicode code point escapes. /\u{1234}/ is equivalent to …
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
List of Unicode Characters
https://en.wikipedia.org/wiki/List_of_Unicode_characters
There are 143,859 characters, with Unicode 13.0, covering 154 modern and historical scripts, as well as multiple symbol sets. As it is not technically possible to list …
_________
_________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
_________

*/
//Your code should go here:

