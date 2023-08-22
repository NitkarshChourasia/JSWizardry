/*
####  Creating a Picture Frame  ####

Create a function that takes the width, height and character and returns a picture frame as a matrix.


[Examples]

___
getFrame(4, 5, "#") ➞ [
  ["####"],
  ["#  #"],
  ["#  #"],
  ["#  #"],
  ["####"]
]
// Frame is 4 characters wide and 5 characters tall.


getFrame(10, 3, "*") ➞ [
  ["**********"],
  ["*        *"],
  ["**********"]
]
// Frame is 10 characters and wide and 3 characters tall.


getFrame(2, 5, "0") ➞ "invalid"
// Frame's width is not more than 2.
_____



[Notes]

___
*) Remember the gap.
*) Return "invalid" if width or height is 2 or less (can't put anything inside).
___



[arrays] [formatting] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________

*/
//Your code should go here:

