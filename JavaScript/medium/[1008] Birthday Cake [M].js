/*
####  Birthday Cake  ####

Create a function which constructs a rectangular birthday cake, based on someone's name and age! Build it out of strings in an array and make sure to surround the birthday message with the character that fits the rule:
___
*) If the age is an even number, surround the message with "#".
*) If the age is an odd number, surround the message with "*".
___

Other important rules:
___
*) The message should be in the format: {age} Happy Birthday {name}! {age}
*) Leave a space between the edge of the cake and the age numbers.
___



[Examples]

___
getBirthdayCake("Jack", 10) ➞ [
  "##############################",
  "# 10 Happy Birthday Jack! 10 #",
  "##############################"
]

getBirthdayCake("Russell", 19) ➞ [
  "*********************************",
  "* 19 Happy Birthday Russell! 19 *",
  "*********************************"
]

getBirthdayCake("Isabelle", 2) ➞ [
  "################################",
  "# 2 Happy Birthday Isabelle! 2 #",
  "################################"
]
_____



[Notes]

The amount of characters in the banner should be the same length as the message to pass the tests.


[arrays] [formatting] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________

*/
//Your code should go here:

