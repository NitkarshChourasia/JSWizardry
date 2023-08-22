/*
####  Learn Lodash: matchesProperty, Check if an Object Contains a Key Value Pair  ####

Write your own version of the lodash _.matchesProperty function using vanilla JavaScript. matchesProperty returns a function that that compares the given object and a path, which is a key-value pair, then determines if the object includes the pair.
For instance, when using the regular JavaScript find method you would write it like so:
___
arrayOfCars.find(car => car.year === 2020)
_____

Because the matchesProperty function returns a function it can be used to replace the callback function written in the find method. Using matchesProperty it could look like this:
___
arrayOfCars.find(matchesProperty("year", 2020))
_____

This is a helper function that is often used by other more advanced lodash functions that want to check for a match. As we write more lodash functions we will need this helper.
This is very similar to the matches function. The only difference is the way the arguments are passed in, matches requires an object, matchesProperty requires two strings representing a key value pair.


[Arguments]

___
*) path (Array or String): The path key-value pair you are using to see if it is included in the object.
*) returns: A new function.
___



[Examples]

___
const objects = [
  { "a": 1, "b": 2, "c": 3 },
  { "a": 4, "b": 5, "c": 6 }
]
_.find(objects, _.matchesProperty("a", 4))
➞ [{ "a": 4, "b": 5, "c": 6 }]
_____



[Notes]

___
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
___



[objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
A Beginner’s Guide to Understanding JavaScript Closures
https://itnext.io/a-beginners-guide-to-understanding-javascript-closures-b5eb57fdbeb4
Closures are one of those topics that will pop up in most JavaScript interviews. Developers who are just starting out are usually scared of them (I know I was), but the …
_________
_________
I Never Understood JavaScript Closures
https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
When a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the …
_________

*/
//Your code should go here:

