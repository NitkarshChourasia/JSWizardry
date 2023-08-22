/*
####  Numeric Seesaw  ####

A number is left-heavy if the digits on the left side are larger than the digits on the right. It is right-heavy if the digits on the right side are larger than the digits on the left. Else, it is balanced.
Create a function that takes in an integer and classifies it into one of the three mutually exclusive categories: left, right or balanced. For inputs with an odd number of integers, ignore the fulcrum (the middle number).


[Examples]

___
seesaw(3449) ➞ "right"
// since 34 < 49

seesaw(1143113) ➞ "left"
// since 114 > 113 (3 is the fulcrum)

seesaw(585585) ➞ "balanced"
// since 585 == 585
_____



[Notes]

If input is null or undefined return "balanced".


[arrays] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
Object.prototype.toString()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
Number.EPSILON
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.
_________

*/
//Your code should go here:

