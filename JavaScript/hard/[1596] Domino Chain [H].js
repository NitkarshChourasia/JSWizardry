/*
####  Domino Chain  ####

Mubashir was playing with dominos. He concluded that:
___
*) If the first domino is pushed over, it will keep tipping next dominos to its right.
*) Reaction will stop if a domino is already tipped over, or if there is an empty space.
___


Create a function which takes a string of current status of the dominos and returns the string after dominos chain reaction.
___
*) "|" represents a standing domino.
*) "/" represents a tripped domino.
*) " " represents an empty space.
___



[Examples]

___
dominoChain("||| ||||//| |/") ➞ "/// ||||//| |/"
// A space will stop the reaction.

dominoChain("||//||") ➞ "////||"
// An already tripped domino will stop the reaction.

dominoChain("||||") ➞ "////"
_____



[Notes]

N/A


[algorithms] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
splice() Method
https://www.w3schools.com/jsref/jsref_splice.asp
Adds/removes items to/from an array, and returns the removed item(s). Note: This method changes the original array.
_________
_________
includes() Method
https://www.w3schools.com/jsref/jsref_includes.asp
Verify whether a string contains a certain element or not.
_________
_________
split() Method
https://www.w3schools.com/jsref/jsref_split.asp
Can divide an string into array of substring.
_________

*/
//Your code should go here:

