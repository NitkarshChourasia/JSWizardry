/*
####  Building a Pie Chart  ####

A pie chart is a circular graphical representation of a dataset, where each category frequency is represented by a slice (or circular sector) with an amplitude in degrees given by the single frequency percentage over the total of frequencies. You can obtain the degrees of sectors following these steps:
___
*) Calculate frequencies total.
*) Calculate percentage of every category frequency dividing it by the frequencies total.
*) Transform every percentage in degrees multiplying it for 360.
___

You are given an object data with keys being the data categories (represented by letters) and values being the data frequencies. Implement a function that returns a map to design a pie chart, like to say the same object with values transformed in degrees instead of frequencies. Round final values to the nearest tenth.



[Examples]

___
pieChart({ a: 1, b: 2 }) ➞ { a: 120, b: 240 }

pieChart({ a: 30, b: 15, c: 55 }) ➞ { a: 108, b: 54, c: 198 }

pieChart({ a: 8, b: 21, c: 12, d: 5, e: 4 }) ➞ { a: 57.6, b: 151.2, c: 86.4, d: 36, e: 28.8 }
_____



[Notes]

N/A


[data_structures] [math] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
_________
_________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
_________
_________
Pie Chart
https://en.wikipedia.org/wiki/Pie_chart
A circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its ce …
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________

*/
//Your code should go here:

