/*
####  Unfair Hurdles  ####

Unfair hurdles are hurdles which are either too high, or way too close together.
Create a function which takes in an array of strings, representing hurdles, and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:
___
*) At least 4 characters tall.
*) Strictly less than 4 spaces apart.
___



[Examples]

___
// Hurdle are good distance apart but are way too tall.

isUnfairHurdle([
  "#    #    #    #",
  "#    #    #    #",
  "#    #    #    #",
  "#    #    #    #"
]) ➞ true


// Hurdles are a fine height but are way too close together.

isUnfairHurdle([
  "#  #  #  #",
  "#  #  #  #",
  "#  #  #  #"
]) ➞ true


// These hurdles are mighty splendid.

isUnfairHurdle([
  "#      #      #      #",
  "#      #      #      #"
]) ➞ false
_____



[Notes]

___
*) Hurdles will be represented with a hashtag "#".
*) There will be the same spacing between hurdles.
*) Hurdles are always as high as the length of the array.
*) Hurdles are always evenly spaced.
___



[arrays] [logic] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript test() Method
https://www.w3schools.com/jsref/jsref_regexp_test.asp
Tests for a match in a string. This method returns true if it finds a match, otherwise it returns false.
_________

*/
//Your code should go here:

