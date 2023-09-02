/*
####  Ping Pong!  ####

A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
___
*) If win equals true, end the list with Pong!.
*) If win equals false, end with Ping! instead.
___



[Examples]

___
pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]

pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]

pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
_____



[Notes]

___
*) You will always return the ball (i.e. the Pongs are yours).
*) Player 1 serves the ball and makes Ping!.
*) Return an array of strings.
___



[algorithms] [arrays] [games] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map …
_________

*/
//Your code should go here:

