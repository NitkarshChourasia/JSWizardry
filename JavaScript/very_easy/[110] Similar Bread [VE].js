/*
####  Similar Bread  ####

Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.


[Examples]

___
hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) ➞ true

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
) ➞ false

hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
) ➞ false
_____



[Notes]

___
*) The arrays will always be three elements long.
*) The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
___



[arrays] [language_fundamentals] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array Class
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Is a global object that is used in the construction of arrays; which are high-level, list-like objects.
_________
_________
Property Accessors
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
Provide access to an object's properties by using the dot notation or the bracket notation.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:


function hasSameBread(sandwich1, sandwich2) {
  return sandwich1[0] === sandwich2[0] && sandwich1[sandwich1.length - 1] === sandwich2[sandwich2.length - 1];
}

if (require.main == module) {
  // Test cases.
  console.log(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]));
  console.log(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]));
  console.log(hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]));
}

// 12-09-2023
// complete.