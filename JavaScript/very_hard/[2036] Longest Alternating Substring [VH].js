/*
####  Longest Alternating Substring  ####

Given a string of digits, return the longest substring with alternating odd/even or even/odd digits. If two or more substrings have the same length, return the substring that occurs first.


[Examples]

___
longestSubstring("225424272163254474441338664823") ➞ "272163254"
// substrings = 254, 272163254, 474, 41, 38, 23

longestSubstring("594127169973391692147228678476") ➞ "16921472"
// substrings = 94127, 169, 16921472, 678, 476

longestSubstring("721449827599186159274227324466") ➞ "7214"
// substrings = 7214, 498, 27, 18, 61, 9274, 27, 32
// 7214 and 9274 have same length, but 7214 occurs first.
_____



[Notes]

The minimum alternating substring size is 2, and there will always be at least one alternating substring.


[language_fundamentals] [math] [regex] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

