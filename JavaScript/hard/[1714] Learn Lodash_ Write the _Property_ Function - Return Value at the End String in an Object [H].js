/*
####  Learn Lodash: Write the "Property" Function - Return Value at the End String in an Object  ####

Write your own version of the lodash _.property function using vanilla JavaScript.
It receives a string or an array representing a path in an object, it returns a function that receives an object. The new function will then return the value at the end of the path.
For instance when using the normal javascript map method you could map an array like so:
___
arrayOfCars.map(car => car.engine.sparkPlugs.replacementYear)
returns [2020, 2021]
_____

But if you were using property you could write it like this:
___
arrayOfCars.map(property('engine.sparkPlugs.replacementYear'))
also returns [2020, 2021]
_____

This is a helper function that is often used by other more advanced lodash functions. As we write more of our own lodash functions, we need to use this.
For instance, the "takeWhile" lodash function maps an array of objects and returns the ones that are a match. You can write it as _.takeWhile(users, 'active') and it will know that you wanting to use the "property" helper function because it received a string. It will then apply it to each value in the array and if 'active' is true it returns it. This is helpful when trying to write descriptive functions that describe what is happening at each step in your code.


[Arguments]

___
*) path (Array or String): The path of the property to get.
*) returns: A new function.
___



[Examples]

___
const objects = [
  { "a": { "b": 2 } },
  { "a": { "b": 1 } }
]

objects.map(object, _.property("a.b"));
// => [2, 1]

objects.map(object, _.property(["a", "b"]));
// => [2, 1]
_____



[Notes]

___
*) Please don't import lodash, your challenge is to write your own version.
*) This entire series of challenges can be found here.
___



[objects] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

