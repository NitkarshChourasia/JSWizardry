/*
####  Backspace Attack  ####

Suppose a hash # represents the BACKSPACE key being pressed. Write a function that transforms a string containing # into a string without any #.


[Examples]

___
erase("he##l#hel#llo") ➞ "hello"

erase("major# spar##ks") ➞ "majo spks"

erase("si###t boy") ➞ "t boy"

erase("####") ➞ ""
_____



[Notes]

___
*) In addition to characters, backspaces can also remove whitespaces.
*) If the number of hashes exceeds the previous characters, remove those previous characters entirely (see example #3).
*) If there only exist backspaces, return an empty string (see example #4).
___



[regex] [scope] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

