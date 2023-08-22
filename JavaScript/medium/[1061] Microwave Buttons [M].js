/*
####  Microwave Buttons  ####

In microwave ovens, when buttons are pressed from 0-9, it will add that number to the microwave oven timer (starting from the left). All microwave ovens have the functionality where you can hit a "+30" button and it will add 30 seconds to the timer to cook your food. If you want to heat something for 5 mins, you can hit the "+30" button 10 times instead of thinking if there are fewer button presses that can give you the same result.
Create a function that takes an argument time and returns the shortest amount of button presses to set the given time on the microwave oven. The microwave oven timer always starts at 00:00.


[Buttons]

___
Buttons from "0-9"

// It will add that number to the microwave oven timer (starting from the left).
// If the number "5" is pressed followed by "0" twice, it will put 05:00 on the timer.
// If the number "3" is pressed followed by "0", it will put 00:30 on the timer.

Button "+30", which adds 30 seconds to the current timer.

// If the number "+30" is pressed twice, it will put 00:60 on the timer.

A "Start" button which you have to finally press to start the microwave oven.

// Remember to press this!
_____



[Examples]

___
microwaveButtons("00:30") ➞ 2
// "+30" to put 30 seconds on the timer.
// "Start" button to start the oven.

microwaveButtons("00:70") ➞ 3
// "7" followed by "0" to put 70 seconds on the timer.
// "Start" button to start the oven.

microwaveButtons("00:00") ➞ 1
// "Start" button to start the oven.
_____



[Notes]

___
*) Input may not always be what you expect (e.g. you can put in 00:70, which is valid).
*) No exception handling is required for this challenge.
___



[math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________

*/
//Your code should go here:

