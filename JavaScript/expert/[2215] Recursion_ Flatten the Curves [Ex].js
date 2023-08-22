/*
####  Recursion: Flatten the Curves  ####

The nesting of arrays can be viewed indirectly as curves and barriers of the real data embedded in arrays, thus, defeats the very purpose of directly accessing them thru indexes and slices. In this challenge, a function is required to flatten those curves (i.e. level, iron, compress, raze, topple) and expose those data as a single array and not as an array of arrays.


[Examples]

___
flatten([[[[[["direction"], [372], ["one"], [[[[[["Era"]]]], "Sruth", 3337]]], "First"]]]])
➞ ["direction", 372, "one", "Era", "Sruth", 3337, "First"]

flatten([[4666], [5394], [466], [[["Saskia", [[[[["DXTD"]], "Lexi"]]]]]]])
➞ [4666, 5394, 466, "Saskia", "DXTD", "Lexi"]

flatten([[696], ["friend"], ["power"], [[[["Marcus"]]]], ["philus"]])
➞ [696, "friend", "power", "Marcus", "philus"]

flatten([[["deep"], [[["ocean"]]], [["Marge"]], ["rase", 876]]])
➞ ["deep", "ocean", "Marge", "rase", 876]
_____



[Notes]

___
*) There are no empty arrays to handle.
*) You're expected to solve this challenge using a recursive approach.
*) You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
*) A collection of challenges about recursion can be found via this link.
___



[arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________
_________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() i …
_________

*/
//Your code should go here:

