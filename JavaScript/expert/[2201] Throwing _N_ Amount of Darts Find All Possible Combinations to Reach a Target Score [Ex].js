/*
####  Throwing <N> Amount of Darts Find All Possible Combinations to Reach a Target Score  ####

You're given a dartboard divided into sections, each section has a unique score. That means there won't be two sections with the same score.

Throwing a certain amount of valid darts, find how many solutions there are to reach the target score. Your function will be passed three parameters...
___
*) Sections: An array of values for the sections (e.g. [3, 6, 8, 11, 15, 19, 22], the array is already sorted).
*) Darts: The amount of darts to throw.
*) Target: The target score.
___

Return an empty array if no solution is found, otherwise an array of non-duplicate strings for each solution (e.g. ["3-11-18", "7-7-18", "7-11-14"]).


[Examples]

If there are duplicate values, keep only the one sorted from smallest to biggest.
___
"8-19-8"

"8-8-19" <-- This is the one you would keep.

"19-8-8"
_____

Multiple solutions should be sorted before returning them.
___
["3-11-18", "7-7-18", "7-11-14"] is ok.

["7-11-14", "7-7-18", "3-11-18"] is not ok.
_____



[Notes]

___
*) Multiple darts can land in the same section.
*) A dart must land in a valid section (it can't miss).
___



[arrays] [loops] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Combinations with Replacement
https://outlier.ai/data-driven-daily/combinatorics-combinations-with-replacement/
The last type of combination we will talk about is combinations with replacement. One example of this type of counting problem is buying products in a store. For exampl …
_________
_________
Problem Walkthrough
https://youtu.be/_bKsaqpvduE
The video goes over the strategy behind getting combinations via recursion.
_________

*/
//Your code should go here:

