/*
####  Climbing Competition  ####

You are in some climbing competition. You start with some stamina which is a positive integer number. And you have obstacles in an array. Each number in array represents obstacle height.
While climbing up you lose 2 stamina for up to 1 meter climbed. So if you climb 0.3m up you lose 2 stamina, if you climb 1m you lose 2 stamina, if you climb 1.8m you lose 4 stamina(2 for 1m and 2 for 0.8m) and so on.
While climbing down you lose 1 stamina for up to 1 meter climbed. So if you climb 0.5m you lose 1 stamina, if you climb 1.2m you lose 2 stamina (1 for 1m and 1 for 0.2m) etc.
You start by standing on first obstacle in array.
Given a stamina number and an array of obstacles write a function that returns how many obstacles you can pass.


[Examples]

___
climb(5, [5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]) ➞ 3
_____

Starting with 5 stamina.
Climing down from 5m to 4.2m ➞ 0.8m so we lose 1 stamina (so stamina =4) and we pass 1 obstacle.
From 4.2m to 3m we climb down 1.2m so we lose 2 stamina (so stamina = 2) and we pass 2 obstacles in total.
From 3m to 3.5m we climb up 0.5m so we lose 2 stamina (stamina=0 - exhaustion!) and we pass 3 obstacles in total.
We can't go further becouse we don't have stamina to do so.
___
climb(10, [5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]) ➞ 3
_____

Same example as above but more stamina so when we are standing on 3.5m obstacle we have 5 stamina left.
To climb up from 3.5m to 6m we would need 6 stamina (0.5m +1m +1m ➞2+2+2) but we have only 5 so we can't got further.


[Notes]

___
*) In all test cases: Stamina - integer greater than 0, all numbers in arrays are positive floats or integers.
*) Result should be an integer.
___



[algorithms] [arrays] [conditions] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest integer.
_________

*/
//Your code should go here:

