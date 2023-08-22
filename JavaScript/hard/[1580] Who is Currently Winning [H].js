/*
####  Who is Currently Winning  ####

You are given an array of scores. The even-indexed numbers are your scores at each turn. The odd-indexed numbers are your opponent's scores.
Create a function that turns this list of scores into an array of who is currently winning.
To illustrate (You - Y, Opponent - O):
___
Scores: [5, 15, 17, 35, 16, 40, 66, 12, 10, 9]

Y scores: [5, 17, 16, 66, 10]
O scores: [15, 35, 40, 12, 9]

Y cumulative scores: [5, 22, 38, 104, 114]
O cumulative scores: [15, 50, 90, 102, 111]

Who is currently winning: ["O", "O", "O", "Y", "Y"]
_____



[Examples]

___
currentlyWinning([10, 10, 22, 30, 5, 40]) ➞ ["T", "O", "O"]

currentlyWinning([5, 1, 2, 10]) ➞ ["Y", "O"]

currentlyWinning([10, 10, 5, 5, 2, 2, 1, 3, 100, 5]) ➞ ["T", "T", "T", "O", "Y"]
_____



[Notes]

Write "T" if there is a tie at that point in the game.


[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.push()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.map()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.from()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________

*/
//Your code should go here:

