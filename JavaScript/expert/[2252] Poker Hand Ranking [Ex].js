/*
####  Poker Hand Ranking  ####

In this challenge, you have to establish which kind of Poker combination is present in a deck of five cards. Every card is a string containing the card value (with the upper-case initial for face-cards) and the lower-case initial for suits, as in the examples below:
___
"Ah" ➞ Ace of hearts
"Ks" ➞ King of spades
"3d" ➞ Three of diamonds
"Qc" ➞ Queen of clubs
_____

There are 10 different combinations. Here's the list, in order of importance:

Given an array hand containing five strings being the cards, implement a function that returns a string with the name of the highest combination obtained, accordingly to the table above.


[Examples]

___
pokerHandRanking(["10h", "Jh", "Qh", "Ah", "Kh"]) ➞ "Royal Flush"

pokerHandRanking(["3h", "5h", "Qs", "9h", "Ad"]) ➞ "High Card"

pokerHandRanking(["10s", "10c", "8d", "10d", "10h"]) ➞ "Four of a Kind"
_____



[Notes]

N/A


[conditions] [data_structures] [games] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Set Object
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Poker Hand Rankings
https://www.cardplayer.com/rules-of-poker/hand-rankings
What hands are ranked highest in Poker.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

