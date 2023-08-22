/*
####  Climbing the Leaderboard  ####

An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
___
*) The player with the highest score is ranked number 1 on the leaderboard.
*) Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
___

Create a function that takes two arrays of integers.
___
ranked[[100, 90, 90, 80]]
player[[70, 80, 105]]
_____

The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, 3rd , and 1st. Return [[4,3,1]].


[Explanation]

___
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]) ➞ [6, 4, 2, 1]
_____

Alice starts playing with 7 players already on the leaderboard, which looks like this: 
After Alice finishes game 0, her score is 5 and her ranking is 6: 
After Alice finishes game 1, her score is 25 and her ranking is 4: 
After Alice finishes game 2, her score is 50 and her ranking is tied with Caroline at 2: 
After Alice finishes game 3, her score is 120 and her ranking is 1: 


[Examples]

___
climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]) ➞ [6, 5, 4, 2, 1]

climbingLeaderboard([80, 80, 80, 75, 70, 60, 60, 60], [70, 72, 78, 88]) ➞ [3, 3, 2, 1]
_____



[Notes]

N/A


[algorithms] [arrays] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then com …
_________
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
The Set object lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

