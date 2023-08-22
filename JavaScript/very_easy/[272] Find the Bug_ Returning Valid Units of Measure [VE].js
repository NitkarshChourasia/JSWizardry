/*
####  Find the Bug: Returning Valid Units of Measure  ####

There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.
The return value should be a Boolean.


[Expected results]

___
hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }) ➞ true

hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" }) ➞ false

hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }) ➞ false

hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }) ➞ false
_____



[Notes]

___
*) Run the tests first to see the results before making changes and understand why eggs is not returning a boolean.
*) Why is eggs not returning a boolean?
When merging conditions through ||, the returned value is the result of the last truthy condition.
___



[bugs] [conditions] [control_flow] [logic] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.prototype.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
_________
_________
Boolean Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
An object wrapper for a boolean value.
_________
_________
Logical NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
Takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can …
_________
_________
How to Check If a JavaScript Object Property Is Undefined
https://flaviocopes.com/how-to-check-undefined-property-javascript/
In a JavaScript program, the correct way to check if an object property is undefined is to use the `typeof` operator. See how you can use it with this simple explanation
_________
_________
Check if a Variable is a String
https://bobbyhadz.com/blog/javascript-check-if-variable-is-string#:~:text=Use%20the%20typeof%20operator%20to,the%20variable%20is%20a%20string.
Use the typeof operator to check if a variable is a string, e.g. if (typeof variable === 'string'). If the typeof operator returns "string", then the variable is a stri …
_________

*/
//Your code should go here:

