/*
####  Sort Authors Last Names Alphabetically  ####

Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name.


[Examples]

___
sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]) ➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
]
_____



[Notes]

___
*) There will always be a name, rating, and author property on each object.
*) The array will never be empty.
*) The author property will always feature only a first and last name.
___



[arrays] [objects] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

