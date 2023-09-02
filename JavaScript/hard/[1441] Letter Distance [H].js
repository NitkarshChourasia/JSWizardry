/*
####  Letter Distance  ####

Given two words, the letter distance is calculated by taking the absolute value of the difference in character codes and summing up the difference.
If one word is longer than another, add the difference in lengths towards the score.
To illustrate:
___
letterDistance("house", "fly") = dist("h", "f") + dist("o", "l") + dist("u", "y") + dist(house.length, fly.length)

= |104 - 102| + |111 - 108| + |117 - 121| + |5 - 3|
= 2 + 3 + 4 + 2
= 11
_____



[Examples]

___
letterDistance("sharp", "sharq") ➞ 1

letterDistance("abcde", "Abcde") ➞ 32

letterDistance("abcde", "bcdef") ➞ 5
_____



[Notes]

___
*) Always start comparing the two strings from their first letter.
*) Excess letters are not counted towards distance.
*) Capital letters are included.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Math.abs()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________
_________
JavaScript For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value.
_________
_________
String charCodeAt() Method
https://www.w3schools.com/jsref/jsref_charcodeat.asp
Tip: You can use the charCodeAt() method together with the  length property to return the Unicode of the last character in a string. The  index of the last character …
_________

*/
//Your code should go here:

