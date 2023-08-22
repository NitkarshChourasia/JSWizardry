/*
####  RegEx: Character Classes IX ⁠- \w  ####

You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
Here is a list of the character classes in JavaScript:
___
., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
_____

There is a hidden word in this string:
___
const str = "**^&$Regular#$%Expressions$%$$%^**"
_____

Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.


[Notes]

Check the Resources tab for details on character classes if you're stuck.


[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Difference Between /\w/ and /\w+/
https://forum.freecodecamp.org/t/difference-between-w-and-w-regex/349218
\w just matches one alphanumeric character. \w+ matches one or more alphanumeric characters. Pattern matching is greedy by default, so the \w+ means “find the first alp …
_________
_________
Character Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
Distinguish kinds of characters (e.g. distinguishing between letters and digits).
_________
_________
RegEx Tester and Debugger
https://regex101.com/
With highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() method …
_________

*/
//Your code should go here:

