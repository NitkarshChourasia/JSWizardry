/*
####  Fruit Juices  ####

A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.
Create a function that creates the product IDs for the variety of fruit juices.


[Examples]

___
getDrinkID("apple", "500ml") ➞ "APP500"

getDrinkID("pineapple", "45ml") ➞ "PIN45"

getDrinkID("passion fruit", "750ml") ➞ "PASFRU750"
_____



[Notes]

___
*) Capacity will be given as a string and will always be given in ml.
*) Return the product ID in UPPERCASE.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Regex Tester and Debugger
https://regex101.com/
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and return …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
The match() method retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the …
_________

*/
//Your code should go here:

