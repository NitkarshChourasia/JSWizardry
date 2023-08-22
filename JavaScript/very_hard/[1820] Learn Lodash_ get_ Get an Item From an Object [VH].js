/*
####  Learn Lodash: _.get, Get an Item From an Object  ####

According to the lodash documentation, _.get gets the value at the path of the object. If the resolved value is undefined, the defaultValue is returned in its place.


[Arguments]

___
*) object (Object): The object to query.
*) path (Array or string): The path of the property to get.
*) defaultValue (*): The value returned for undefined resolved values.
___



[Returns]

___
*) (*): Returns the resolved value.
___



[Real World Example]

You work at a car dealership and your boss asks you to get the color of a car. He tells you the parking lot to get it from (the object you're searching) and then writes exactly where it is. row1[0].color, he could also give you this direction as an array ["row1", "[0]", "color"]. If there is no color he tells you to tell him "no color found" (the default value). You follow his instructions and return "red".


[Examples]

___
var object = { "a": [{ "b": { "c": 3 } }] }

get(object, "a[0].b.c")  ➞ 3

get(object, ["a", "0", "b", "c"])  ➞ 3

get(object, "a.b.c", "default") ➞ "default"
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
_.get()
https://lodash.com/docs/#get
Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
_________
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________

*/
//Your code should go here:

