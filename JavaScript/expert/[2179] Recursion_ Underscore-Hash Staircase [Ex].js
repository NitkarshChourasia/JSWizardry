/*
####  Recursion: Underscore-Hash Staircase  ####

Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and downwards for a negative value.


[Examples]

___
staircase(3) ➞ "__#\n_##\n###"
__#
_##
###

staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
______#
_____##
____###
___####
__#####
_######
#######

staircase(2) ➞ "_#\n##"
_#
##

staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
########
_#######
__######
___#####
____####
_____###
______##
_______#
_____



[Notes]

___
*) All inputs are either positive or negative values.
*) The string to be returned should be adjoined with the newline character \n.
*) You're expected to solve this challenge using a recursive approach.
*) You can read more on recursion (see Resources tab) if you aren't familiar with it or haven't fully understood the concept before taking this challenge.
*) An iterative version of this challenge can be found via this link.
*) A collection of recursive challenges in JS can be found via this link.
___



[recursion] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________

*/
//Your code should go here:

