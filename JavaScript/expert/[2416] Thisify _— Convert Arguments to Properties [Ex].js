/*
####  Thisify ⁠— Convert Arguments to Properties  ####

Consider a constructor function, foo:
___
const foo = function(x, y, z)
{
  this.x = x
  this.y = y
  this.z = z
}
_____

foo takes three parameters, x, y, z. Upon an instance of foo being created, the instance receives the properties x, y, z.
___
const bar = new foo(1, 2, 3)
// bar.x = 1
// bar.y = 2
// bar.z = 3
_____

The goal of this challenge is to accomplish an equivalent result without assigning the properties explicitly. Instead, create a function thisify to do it automatically and dynamically.
Here is what foo should look like:
___
const foo = function(x, y, z)
{
  thisify(this, Object.values(arguments))
}
// same as before!

const bar = new foo(1, 2, 3)
// bar.x = 1
// bar.y = 2
// bar.z = 3
_____

thisify will take two arguments:
___
/**
 * @param {Object} instance - instance of the class
 * @param {Array} passed - arguments (values) passed to parameters of constructor
 *
 * @returns {void(0)}
 */

function thisify(instance, passed)
{
  // your code here
}
_____

When run, thisify is expected to assign properties with the same name and value as the argument. For example, if the x argument is given a value of 2, the object should have a property "x" with a value of 2.


[Examples]

___
const rectangle = function(l, w, color)
{
  thisify(this, Object.values(arguments))
}

console.log(new rectangle(5, 10, "Red")) ➞
{
  l: 5,
  w: 10,
  color: "Red"
}

console.log(new rectangle(3, 4)) ➞
{
  l: 3,
  w: 4,
  color: undefined
}
_____



[Notes]

___
*) If any arguments are left undefined, assign them undefined.
*) Use the Resources section if you need help.
___



[objects] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Object.prototype.constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
Returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not …
_________
_________
Constructors
https://www.w3schools.com/js/js_object_constructors.asp
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when  a new object is created.
_________
_________
The Arguments Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
_________
_________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() me …
_________

*/
//Your code should go here:

