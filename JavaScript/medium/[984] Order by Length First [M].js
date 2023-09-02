/*
####  Order by Length First  ####

Graded lexicographic order (grlex order for short) is a way of ordering words that:

For example, in grlex order:
___
*) "tray" < "trapped" since "tray" has length 4 while "trapped" has length 7.
*) "trap" < "tray" since both have length 4, but "trap" comes before "tray" in the dictionary.
___

Given an array of words, return that array in grlex order.


[Examples]

___
makeGrlex(["small", "big"]) ➞ ["big", "small"]

makeGrlex(["cat", "ran", "for", "the", "rat"]) ➞ ["cat", "for", "ran", "rat", "the"]

makeGrlex(["this", "is", "a", "small", "test"]) ➞ ["a", "is", "test", "this", "small"]
_____



[Notes]

N/A


[conditions] [math] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________
_________
Array Sort
https://www.w3schools.com/js/js_array_sort.asp
When the sort() function compares two values, it sends the values to the  compare function, and sorts the values according to the returned (negative,  zero, positive) …
_________
_________
sort() Method
https://www.w3schools.com/jsref/jsref_sort.asp
Sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). By default, the sort() method sorts t …
_________

*/
//Your code should go here:

