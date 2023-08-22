/*
####  Learn Lodash (14) _.countBy, Count Items in an Array  ####

According to the lodash documentation, _.countBy creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).
Recreate lodash's _.countBy with your own function using vanilla JavaScript.


[Input]

___
*) collection (Array or Object): The collection to iterate over.
*) [iteratee=_.identity] (Function or string): The iteratee to check the keys and count them.
___

Returns an object the counted values.


[Real Life Scenario]

You work at a car dealership. Your boss asks you to count the cars in the lot according to color. You come back to him and say there are 5 red ones, two blue ones and a green one. The color to search is the iteratee and the parking lot is the object or array you are searching. He might also give you a function to check the cars which could be, count the cars with milieage over 100,000 kilometers. You come back and say "true": 3, "false": 4 essentially 3 cars are over 100k and 4 cars are under.


[Examples]

___
houses = [
   {
    stories: 2,
    door: "blue"
   },
   {
    stories: 3,
    door: "blue"
   },
   {
    stories: 2,
    door: "green"
   }
]

countBy(houses, "door") ➞  { blue: 2, green: 1 }
_____



[Notes]

Do not attempt to import lodash; you are simply writing your own version.


[arrays] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________
_________
Object.prototype.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
_________
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final …
_________

*/
//Your code should go here:

