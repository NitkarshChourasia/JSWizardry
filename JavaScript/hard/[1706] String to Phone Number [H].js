/*
####  String to Phone Number  ####

You're able to call numbers like 1-800-flowers which replace the characters with the associated numbers on a cellular device keyboard.


[Conversion]

___
abc  = 2
def  = 3
ghi  = 4
jkl  = 5
mno  = 6
pqrs = 7
tuv  = 8
wxyz = 9
_____

This is your task:
___
*) Create a function that takes a string as argument.
*) Convert all letters to numbers by using a cellular device keyboard as reference and leave any other characters in.
*) Return a string containing the argument with replaced letters.
___



[Examples]

___
dial("1-800-HOTLINEBLING") ➞ "1-800-468546325464"

dial("abc-def-ghi-jkl!!") ➞ "222-333-444-555!!"

dial("adgjmptw :)") ➞ "23456789 :)"
_____



[Notes]

___
*) While when you would write a SMS back in the day, to enter "b", you would have to press "2" twice. When calling numbers this is not the case as the range a-c gets converted to "2".
*) Given string can contain upper and lowercase letters.
*) Enjoy and good luck!
___



[arrays] [formatting] [numbers] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Telephone keypad - Wikipedia
https://en.wikipedia.org/wiki/Telephone_keypad
A telephone keypad is the keypad installed on a push-button telephone or similar telecommunication device for dialing a telephone number. It was standardized when the …
_________

*/
//Your code should go here:

