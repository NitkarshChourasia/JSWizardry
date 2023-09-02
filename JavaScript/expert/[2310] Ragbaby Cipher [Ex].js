/*
####  Ragbaby Cipher  ####

In Ragbaby Cipher, encoding is done by a string of keys and their position in the plaintext word of a message.
Create a function that takes two arguments, key and message, and returns the encoded message.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
message = "This is an example."
key = "cipher"

ragbabyCipher(message, key) ➞ "Urew pu bq rzfsbtj."
_____

Step 1: Remove duplicate alphabets of the key. Rearrange alphabets from A-Z, such that the keyword appears first, followed by the rest of the alphabets in the usual order.
___
c i p h e r a b d f g j k l m n o q s t u v w x y z
_____

Step 2: Word-by-word, assign numbers to the letters of the given message:
___
T h i s   i s   a n   e x a m p l e .
1 2 3 4   1 2   1 2   1 2 3 4 5 6 7
_____

Step 3: Replace each alphabet of the word with the letter in the keyed alphabet the corresponding number of places to the right of it (wrapping if necessary). Keep all characters other than alphabets in the same order and without any change.
___
eMessage = "Urew pu bq rzfsbtj."
// 'u' is 1 place right to 't'
// 'r' is 2 places right to 'h'
// 'e' is 3 places right to 'i' and so on.
// keep the '.' in the same position.
_____

See the below examples for a better understanding:


[Examples]

___
ragbabyCipher("This is an example.", "cipher") ➞ "Urew pu bq rzfsbtj."

ragbabyCipher("mubashir", "edabit") ➞ "nwccyoke"

ragbabyCipher("mattttt", "eedddabit") ➞ "nighjkl"
_____



[Notes]

___
*) Keys will have lowercase letters only but encoded messages should keep the order of uppercase and lowercase as the original message.
*) The assigning of numbers to letters resets with every non-letter character.
___



[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
toUpperCase() Method
https://www.w3schools.com/jsref/jsref_touppercase.asp
Convert the string to uppercase letters.
_________
_________
toLowerCase() Method
https://www.w3schools.com/jsref/jsref_tolowercase.asp
Convert the string to lowercase letters.
_________
_________
toLocaleLowerCase() Method
https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp
Convert the string to lowercase letters.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

