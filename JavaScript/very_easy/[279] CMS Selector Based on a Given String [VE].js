/*
####  CMS Selector Based on a Given String  ####

Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.


[Examples]

___
cmsSelector(["WordPress", "Joomla", "Drupal"], "w") ➞ ["WordPress"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ➞ ["Drupal"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]
_____



[Notes]

___
*) The given letter(s) are case sensitive and can be more than one.
*) In the case of an empty string, return the entire array.
*) A CMS is a Content Management System.
___



[arrays] [formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Methods of RegExp and String
https://javascript.info/regexp-methods
If the regexp doesn’t have flag g, then it returns the first match as an array with capturing groups and properties index (position of the match), input (input string, …
_________
_________
if else else if
https://www.w3schools.com/js/js_if_else.asp
If time is less than 10:00, create a "Good  morning"  greeting, if not, but time is less than 20:00, create a "Good day" greeting,  otherwise a "Good evening":
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
How do you use a variable in a regular expression?
https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
How do you use a variable in a regular expression?
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
What Is a Regular Expression?
https://www.w3schools.com/js/js_regexp.asp
A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations.
_________
_________
includes() Method
https://www.w3schools.com/jsref/jsref_includes_array.asp
Determines whether an array contains a specified element.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

