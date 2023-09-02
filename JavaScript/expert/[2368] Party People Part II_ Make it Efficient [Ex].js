/*
####  Party People Part II: Make it Efficient  ####

Ava, Mark, Sheila, and Pete are at a party. However, Ava and Sheila are only staying if there are at least 4 people, Pete is only staying if there's 1 person, and Mark is only staying if there are at least 5 people. Therefore, Mark leaves, which makes Ava and Sheila leave, and Pete is left alone.
Given an array with the preferences of every person at a party for the minimum number of people present, determine how many people will stay.


[Examples]

___
partyPeople([4, 5, 4, 1]) ➞ 1
// Ava's minimum number is 4, Mark's is 5, Sheila's is 4, and Pete's is 1.
// Only 1 person (Pete) stays.

partyPeople([10, 12, 15, 15, 5]) ➞ 0

partyPeople([2, 1, 2, 0]) ➞ 4
_____



[Notes]

___
*) All attendees are included in the array.
*) Any person's count includes themself.
*) Expect valid input only.
___



[algorithms] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

