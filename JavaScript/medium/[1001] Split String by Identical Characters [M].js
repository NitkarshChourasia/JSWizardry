/*
####  Split String by Identical Characters  ####

Create a function that splits a string into an array of identical clusters.


[Examples]

___
splitGroups("555") ➞ ["555"]

splitGroups("5556667788") ➞ ["555", "666", "77", "88"]

splitGroups("aaabbbaabbab") ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]

splitGroups("abbbcc88999&&!!!_") ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]
_____



[Notes]

___
*) Each cluster should only have one unique character.
*) The resulting array should be in the same order as the input string.
*) Should work with letters, numbers and other characters.
___



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Split String by Multiple Occurrences of Letters
https://stackoverflow.com/questions/21997437/javascript-split-string-by-multiple-occurrences-of-letters
I am trying to split a string by a single or multiple occurrence of letters. For example: aaabbcapppp, would yield the array, ["aaa", "bb", "c", "a", "pppp"] The most-I …
_________
_________
String​.prototype​.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Finding Duplicate Characters in a String in JavaScript
https://medium.com/@caymanbruce/finding-duplicate-characters-in-a-string-in-javascript-94e2cb23ab5e
A very common programming interview question is that given a string you need to find out the duplicate characters in the string. A string is just an array of characters …
_________

*/
//Your code should go here:

