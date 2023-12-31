/*
####  Layers in a Rug  ####

Write a function that counts how many concentric layers a rug has.


[Examples]

___
countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]) ➞ 2

countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]) ➞ 3

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]) ➞ 5
_____



[Notes]

___
*) Multiple layers can share the same component so count them separately (example #2).
*) Layers will be horizontally and vertically symmetric.
*) There will be at least one layer for each rug.
___



[logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Set.prototype.size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
Returns the number of (unique) elements in a Set object.
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor?retiredLocale=it
Always rounds down and returns the largest integer less than or equal to a given number.
_________

*/
//Your code should go here:

