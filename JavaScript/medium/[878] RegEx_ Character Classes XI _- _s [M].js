/*
####  RegEx: Character Classes XI ⁠- \s  ####

You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
Here are a list of the characters classes in JavaScript:
___
., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
_____

You probably know already know the string method trim(). It will remove all of the leading and trailing whitespaces in a string.
Create a regular expression that will function like the trim() method. Your regex will work together with this function: string.replace(REGEXP, ""). You must use the \s character class in your expression.


[Example]

___
const str = "    Hello World    "
// "Hello World"

const str = "    We need more space   "
// "We need more space"
_____



[Notes]

Check the Resources tab for details on character classes if you're stuck.


[regex] 



-------------------------------------------------------------------
[Resources]
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Character Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
Distinguish kinds of characters (e.g. distinguishing between letters and digits).
_________
_________
Regex to Trim Spaces From the End of Unknown Length Strings of Words
https://stackoverflow.com/questions/38064731/regex-to-trim-spaces-from-the-end-of-unknown-length-strings-of-words/56010232
In each of the above examples I have strings of words of varying lengths. Each of these strings is followed by a series of spaces and nothing after that. My applicatio …
_________

*/
//Your code should go here:

