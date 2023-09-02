/*
####  Strip URL Query Parameters  ####

Create a function that takes a URL (string), removes duplicate query parameters and parameters specified within the 2nd argument (which will be an optional array).


[Examples]

___
stripUrlParams("https://edabit.com?a=1&b=2&a=2") ➞ "https://edabit.com?a=2&b=2"

stripUrlParams("https://edabit.com?a=1&b=2&a=2", ["b"]) ➞ "https://edabit.com?a=2"

stripUrlParams("https://edabit.com", ["b"]) ➞ "https://edabit.com"
_____



[Notes]

___
*) The 2nd argument paramsToStrip is optional.
*) paramsToStrip can contain multiple params.
*) If there are duplicate query parameters with different values, use the value of the last occurring parameter (see examples #1 and #2 above).
___



[algorithms] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Holds key-value pairs and remembers the original insertion order of the keys.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain element, returning true or false as appropriate.
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own property names, in the same order as we get with a normal loop.
_________
_________
Online Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

