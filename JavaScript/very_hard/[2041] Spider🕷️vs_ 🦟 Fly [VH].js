/*
####  Spider🕷️vs. 🦟 Fly  ####

A spider web is defined by rings numbered from 0-4 from the center and radials labeled clock-wise from the top as A-H.
Create a function that takes the coordinates of spider and fly and returns the shortest path for the spider to get to the fly.
It's worth noting that the shortest path should be calculated "geometrically", not by counting the number of points that path goes through. We could arrange that:
___
*) Angle between every pair of radials is the same (45 degrees).
*) Distance between every pair of rings is always the same (let's say "x").
___


In the above picture, spider coordinates are "H3" and fly coordinates are "E2". The spider will follow the shortest path "H3-H2-H1-A0-E1-E2" to reach the fly.


[Examples]

___
spiderVsFly("H3", "E2") ➞ "H3-H2-H1-A0-E1-E2"

spiderVsFly("A4", "B2") ➞ "A4-A3-A2-B2"

spiderVsFly("A4", "C2") ➞ "A4-A3-A2-B2-C2"
_____



[Notes]

The center of the web will always be A0.


[algorithms] [logic] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.substr()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________

*/
//Your code should go here:

