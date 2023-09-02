/*
####  Spartans Cipher  ####

In Spartans Cipher, encoding is done by writing the text horizontally, across the strap in the plaintext word of a message. In ancient times, Spartans and Greeks invented an interesting way of encryption called Scytale.
The ancient Greeks, and the Spartans in particular, are said to have used this cipher to communicate during military campaigns.
Create a function that takes two arguments, a number of slides nSlide and a string message, and returns the encoded message.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
message = "Mubashir Scytale Code"
nSlide = 6

spartansCipher(message, nSlide) ➞ "Ms t euhSaC biclo aryed"
_____

Step 1: Imagine this Scytale:

Step 2: You can write the given message on a 6 slide Scytale like this:
___
| M | u | b | a |
| s | h | i | r |
|   | S | c | y |
| t | a | l | e |
|   | C | o | d |
| e |   |   |   |
_____

Step 3: Encode the message column-wise:
___
"Ms t euhSaC biclo aryed "
_____

Step 4: Trim all spaces at the end and return the final encoded message:
___
"Ms t euhSaC biclo aryed"
_____

See the below examples for a better understanding:


[Examples]

___
spartansCipher("Mubashir Scytale Code", 6) ➞ "Ms t euhSaC biclo aryed"

spartansCipher("Matt and Edabit are amazing", 8) ➞ "M  baai aaEirmn tndteag tda  z"

spartansCipher("", 99) ➞ ""
_____



[Notes]

N/A


[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.trim()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminato …
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Scytale
https://en.wikipedia.org/wiki/Scytale
A tool used to perform a transposition cipher, consisting of a cylinder with a strip of parchment wound around it on which is written a message. The ancient Greeks, and …
_________
_________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Rounds a number up to the next largest integer.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
Is used to create Array objects.
_________

*/
//Your code should go here:

