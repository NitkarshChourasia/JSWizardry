/*
####  Nico Cipher  ####

In Nico Cipher, encoding is done by creating a numeric key and assigning each letter position of the message with the provided key.
Create a function that takes two arguments, key and message, and returns the encoded message.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
message = "mubashirhassan"
key = "crazy"

nicoCipher(message, key) ➞ "bmusarhiahass n"
_____

Step 1: Assign numbers to sorted letters from the key:
___
"crazy" = 23154
_____

Step 2: Assign numbers to the letters of the given message:
___
2 3 1 5 4
---------
m u b a s
h i r h a
s s a n
_____

Step 3: Sort columns as per assigned numbers:
___
1 2 3 4 5
---------
b m u s a
r h i a h
a s s   n
_____

Step 4: Return encoded message Rows-wise:
___
eMessage = "bmusarhiahass n"
_____



[Examples]

___
nicoCipher("mubashirhassan", "crazy") ➞ "bmusarhiahass n"

nicoCipher("edabitisamazing", "matt") ➞ "deabtiismaaznig "

nicoCipher("iloveher", "612345") ➞ "lovehir    e"
_____



[Notes]

Keys will have alphabets or numbers only.


[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
Concatenates the string arguments to the calling string and returns a new string.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
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

*/
//Your code should go here:

