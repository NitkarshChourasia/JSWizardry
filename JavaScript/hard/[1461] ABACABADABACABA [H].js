/*
####  ABACABADABACABA  ####

Create a function that follows the "ABACABADABACABA" rule up to a certain letter.
The abacabadabacaba pattern is where you start with the first letter (a), and with each new letter, you add the letter in the middle and the others at the start and end.
For instance:
___
A ➞ **A**
B ➞ A**B**A
C ➞ ABA**C**ABA
D ➞ ABACABA**D**ABACABA
E ➞ ABACABADABACABA**E**ABACABADABACABA
F ➞ ABACABADABACABAEABACABADABACABA**F**ABACABADABACABAEABACABADABACABA

# And so on ...
_____



[Examples]

___
ABA("A") ➞ "A"

ABA("B") ➞ "ABA"

ABA("E") ➞ "ABACABADABACABAEABACABADABACABA"
_____



[Notes]

N/A


[algorithms] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of th …
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________

*/
//Your code should go here:

