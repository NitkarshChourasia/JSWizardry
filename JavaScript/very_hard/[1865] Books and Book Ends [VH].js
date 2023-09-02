/*
####  Books and Book Ends  ####

Suppose a pair of identical characters serve as book ends for all characters in between them. Write a function that returns the total number of unique characters (books, so to speak) between all pairs of book ends.
The function will look like:
___
countUniqueBooks("stringSequence", "bookEnd")
_____



[Examples]

___
countUniqueBooks("AZYWABBCATTTA", "A") ➞ 4

// 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
// 2nd bookend group: "ATTTA": 1 unique book: "T"
// "ABBCA" not included since the first "A" was used in the 1st bookend group.

countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3

countUniqueBooks("ZZABCDEF", "Z") ➞ 0
_____



[Notes]

___
*) No book characters will be identical to the bookend character.
*) There will always be an even number of bookends.
*) Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
*) Return 0 if bookends contain zero books.
___



[higher_order_functions] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

