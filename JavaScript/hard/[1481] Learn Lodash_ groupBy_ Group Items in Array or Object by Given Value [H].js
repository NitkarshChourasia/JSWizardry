/*
####  Learn Lodash: _.groupBy, Group Items in Array or Object by Given Value  ####

Challenge: write your own version of groupBy called myGroupBy using vanilla JavaScript that can do the same thing as the lodash version.
The lodash helper function, groupBy, recieves an array and groups the items of the array into an object according to a given criteria. A real life example would be if you had a parking lot of cars you could group them by color. Then you would put the reds ones in one place and the blue ones in another. The array represents the parking lot and the object represents the postitions you've placed the cars in.


[Arguments]

___
*) collection (Array or Object): The collection to iterate over.
*) [iteratee=_.identity] (Function or String or Object): The iteratee to transform keys.
___



[Returns]

___
*) (Object): Returns the composed aggregate object.
___



[Examples]

___
groupBy(["one", "two", "three"], "length"); returns  { "3": ["one", "two"], "5": ["three"] }
_____



[Notes]

Where lodash shines is its versitility. This function can receive a string, an object or a function and return an answer. This makes it difficult for us to write our version in vanilla JS as we have to account for so many different types of inputs.


[arrays] [objects] 



-------------------------------------------------------------------
[Resources]
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#grouping_objects_by_a_property
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

