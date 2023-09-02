/*
####  Tidy Title and Author Strings  ####

You have an array of strings, each consisting of a book title and an author's name.
To illustrate:
___
[
  ["   Death of a Salesman - Arthur Miller    "],
  ["   Macbeth - William Shakespeare    "],
  ["    A Separate Peace - John Knowles     "],
  [" Lord of the Flies - William Golding"],
  ["A Tale of Two Cities - Charles Dickens"]
]
_____

Create a function that takes an array like the one above and transforms it into the same format as the one below:
___
[
  ["Death of a Salesman", "Arthur Miller"],
  ["Macbeth", "William Shakespeare"],
  ["A Separate Peace", "John Knowles"],
  ["Lord of the Flies", "William Golding"],
  ["A Tale of Two Cities", "Charles Dickens"]
]
_____



[Examples]

___
tidyBooks([
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
]) ➞ [
  "The Catcher in the Rye", "J. D. Salinger",
  "Brave New World", "Aldous Huley",
  "Of Mice and Men", "John Steinbeck"
]
_____



[Notes]

Some of these entries have excess white space. Remove this white space in your final output.


[arrays] [formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.trim()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminato …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.map()
https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________

*/
//Your code should go here:

