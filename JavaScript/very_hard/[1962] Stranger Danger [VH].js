/*
####  Stranger Danger  ####

For this challenge, the input will be a (long) string.
A word encountered for the first time is a stranger. A word encountered thrice becomes an acquaintance. A word encountered 5 times becomes a friend.
Create a function that takes the string and returns an array of two arrays. The first is an array of acquaintances in the order they became an acquaintance (see example). The second is an array of friends in the order they became a friend. Words in the friend array should no longer be in the acquaintance array.


[Examples]

___
noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")
➞ [["spot", "see"], []]
// "see" was encountered first but "spot" became an acquaintance earlier.
_____



[Notes]

___
*) All words should be in lowercase.
*) Punctuation should be stripped except for apostrophes (e.g. doesn't, aren't, etc).
___



[conditions] [language_fundamentals] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Creates a regular expression object for matching text with a pattern.
_________

*/
//Your code should go here:

