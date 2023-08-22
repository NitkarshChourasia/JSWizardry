/*
####  Sort Names According to the Length of Their Last Names  ####

Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.


[Examples]

___
lastNameLensort([
  "Jennifer Figueroa",
  "Heather Mcgee",
  "Amanda Schwartz",
  "Nicole Yoder",
  "Melissa Hoffman"
]) ➞ ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]
_____



[Notes]

If last names are of the same length, sort alphabetically by last name.


[algorithms] [control_flow] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String Length Property
https://www.w3schools.com/jsref/jsref_length_string.asp
Returns the length of a string (number of characters). The length of an empty string is 0.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order. A negative number if referenceStr occur …
_________

*/
//Your code should go here:

