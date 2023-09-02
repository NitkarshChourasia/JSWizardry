/*
####  Growing and Shrinking Potions  ####

There are two types of potions:

___
*) If "A" immediately follows a digit, add 1 to the digit.
*) If "B" immediately follows a digit, subtract 1 from the digit.
___

Create a function that returns a string according to these rules, removing the potions once they've been consumed.


[Examples]

___
afterPotion("3A78B51") ➞ "47751"
// 3 grows to 4, 8 shrinks to 7

afterPotion("9999B") ➞ "9998"

afterPotion("9A123") ➞ "10123"

afterPotion("567") ➞ "567"
_____



[Notes]

___
*) Digits that do not have a potion on their immediate right should be left alone.
*) A digit will always either be followed by zero or exactly 1 potion.
___



[higher_order_functions] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
How to find index of all occurrences of element in array?
https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array
I tried jQuery.inArray, or similarly, .indexOf(), but it only gave the index of the last instance of the element, i.e. 5 in this case.
_________

*/
//Your code should go here:

