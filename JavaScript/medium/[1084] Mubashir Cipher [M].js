/*
####  Mubashir Cipher  ####

In Mubashir Cipher, encoding is done by simply replacing paired letters from the provided key.
Create a function that takes a string containing the message to be encoded with a fixed given 2D array of letters key.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
    ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
    ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]

message = "edabit is amazing !"

mubashirCipher(message) ➞ "uqkgzf zv kckizlb !"
_____

Step 1: Search letter in the given key and replace it with paired letter:
___
e = u
d = q
a = k
b = g
.
.
.
g = b
_____

Step 2: Keep all characters (including spaces) other than letters in their original positions:
___
"uqkgzf zv kckizlb !"
_____

See the below examples for a better understanding:


[Examples]

___
mubashirCipher("mubashir is not amazing") ➞ "cegkvxzy zv ljf kckizlb"

mubashirCipher("%$ &%") ➞ "%$ &%"

mubashirCipher("evgeny sh is amazing") ➞ "usbulr vx zv kckizlb"
_____



[Notes]

N/A


[algorithms] [cryptography] [logic] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

