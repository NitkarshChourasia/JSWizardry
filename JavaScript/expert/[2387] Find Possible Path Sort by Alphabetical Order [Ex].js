/*
####  Find Possible Path Sort by Alphabetical Order  ####

Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from A. Thus, the itinerary must begin with A.


[Examples]

___
findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]) ➞ ["A", "C", "F", "I", "Z"]

findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]]) ➞ ["A","B","A","C","B","C"]
// Another possible reconstruction is ["A","C","B","A","B","C"].
// But it is larger in lexical order.

findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]]) ➞  ["A", "D", "A", "R", "Y", "L"]
_____



[Notes]

___
*) If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["A", "B"] has a smaller lexical order than ["A", "C"].
*) You may assume all tickets form at least one valid itinerary.
*) One must use all the tickets once and only once.
___



[algorithms] [arrays] [logic] [loops] [sorting] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

