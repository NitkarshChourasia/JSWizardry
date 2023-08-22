/*
####  Leaderboard Sort  ####

Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard.
The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score.
Once you know the trueScore of each user, sort the array according to it in descending order.


[Examples]

___
leaderboards([
  { name: "a", score: 100, reputation: 20 },
  { name: "b", score: 90, reputation: 40 },
  { name: "c", score: 115, reputation: 30 },
]) ➞ [
  { name: "c", score: 115, reputation: 30 },  // trueScore = 175
  { name: "b", score: 90, reputation: 40 },   // trueScore = 170
  { name: "a", score: 100, reputation: 20 }   // trueScore = 140
]
_____



[Notes]

N/A


[arrays] [objects] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________

*/
//Your code should go here:

