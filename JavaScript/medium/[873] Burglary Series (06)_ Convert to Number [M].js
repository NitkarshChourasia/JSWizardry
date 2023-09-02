/*
####  Burglary Series (06): Convert to Number  ####

You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.


[Examples]

___
convertToNumber({ piano: "200" }) ➞ { piano: 200 }

convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }

convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
_____



[Notes]

N/A


[arrays] [loops] [numbers] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________
_________
Changing Properties of a Javascript Object From String to Int
https://stackoverflow.com/questions/39836839/changing-properties-of-a-javascript-object-from-string-to-int
Those properties are strings and I want to create a loop that goes through the array and converts them to int. I tried the following loop...
_________
_________
Unary plus (+)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
Precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
_________
_________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties
_________
_________
Ways of Converting a String into a Number
https://medium.com/better-programming/what-is-the-best-way-to-convert-a-string-to-a-number-in-javascript-67052a1706c6
There are a variety of ways to convert a string to an integer in JavaScript.
_________
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
_________
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a …
_________

*/
//Your code should go here:

