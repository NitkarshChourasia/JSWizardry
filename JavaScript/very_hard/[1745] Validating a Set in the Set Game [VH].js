/*
####  Validating a Set in the Set Game  ####

In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

The four properties are:

Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.
Here is an example of a set:
___
[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
_____

The following is not a set:
___
[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.
_____



[Examples]

___
isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false
_____



[Notes]

___
*) A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
*) You can play Set by checking the Resources tab.
___



[games] [objects] [validation] 



-------------------------------------------------------------------
[Resources]
_________
The Daily SET Puzzle
https://www.setgame.com/set/puzzle
You can play the game Set here.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Object.keys() Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________

*/
//Your code should go here:

