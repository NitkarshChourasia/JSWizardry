/*
####  Where Are My Glasses?  ####

Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!
Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with any number of dashes in between!
___
*) This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
*) Search thoroughly, maybe you'll find my glasses in places such as 'dustO-Odust'
___



[Examples]

___
findGlasses(["phone", "O-O", "coins", "keys"]) ➞ 1

findGlasses(["OO", "wallet", "O##O", "O----O"]) ➞ 3

findGlasses(["O--#--O", "dustO---Odust", "more dust"]) ➞ 1
_____



[Notes]

___
*) All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
*) All elements in the list are strings.
___



[arrays] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element pas …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is n …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Medium
https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
A quick guide to effectively leveraging with regular expressions, with hands-on examples.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________

*/
//Your code should go here:

