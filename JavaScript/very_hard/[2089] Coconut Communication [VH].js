/*
####  Coconut Communication  ####

___
*) "coconuts" has 8 letters.
*) A byte in binary has 8 bits.
*) A byte can represent a character.
___

We can use the word "coconuts" to communicate with each other in binary if we use upper case letters as 1s and lower case letters as 0s.
Create a function that translates a word in plain text, into Coconut.


[Worked Example]

___
The binary for "coconuts" is
01100011 01101111 01100011 01101111 01101110 01110101 01110100 01110011
c         o        c       o       n        u        t       s

Since 0s are lowercase and 1s are uppercase, we can map the binary like this.
cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS

coconut_translator("coconuts") ➞ "cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS"
_____



[Examples]

___
coconutTranslator("Hi") ➞ "cOcoNuts cOCoNutS"

coconutTranslator("edabit") ➞ "cOConUtS cOConUts cOConutS cOConuTs cOCoNutS cOCOnUts"

coconutTranslator("123") ➞ "coCOnutS coCOnuTs coCOnuTS"
_____



[Notes]

___
*) All inputs will be strings.
*) Make sure to separate the coconuts with spaces.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
How to convert text to binary code in JavaScript?
https://stackoverflow.com/questions/14430633/how-to-convert-text-to-binary-code-in-javascript
I want JavaScript to translate text in a textarea into binary code. For example, if a user types in "TEST" into the textarea, the value "01010100 01000101 01010011 010 …
_________
_________
String to Binary in JavaScript
https://www.youtube.com/watch?v=ilGiplwtOmI
Script that converts text into an array of "0"'s and "1"'s in JavaScript.
_________
_________
.charCodeAt()
https://www.w3schools.com/jsref/jsref_charcodeat.asp
A guide on the ".charCodeAt()" function in JavaScript that converts a character into its Unicode code value.
_________

*/
//Your code should go here:

