/*
####  Burglary Series (18): Detailed List  ####

The police call. They need a more detailed list of the stolen goods.
You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.
Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.


[Examples]

___
makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])
➞ { kitchen: { piano: 1000, tv: 50 } }


makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]) ➞ {
  basement: {
    "baseball bat": 500
  },
  garage: {
    horses : 110,
    cadillac: 2000,
    flowers: 30
  }
}
_____



[Notes]

This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.


[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
For Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________
_________
Array.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

