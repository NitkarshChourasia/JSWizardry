/*
####  Text Twist!  ####

In Text Twist, players try to score points by forming words using the letters from a 6-letter scrambled word. They win the round if they can successfully unscramble the 6-letter word.
Create a function that takes in an array of already-guessed words, the unscrambled 6-letter word and returns the total number of points the player scored in a particular round using the following rubric:

Remember that invalid words (words that cannot be formed from the 6-letter unscrambled words) count as 0 pts.


[Examples]

___
totalPoints(["cat", "create", "sat"], "caster") ➞ 2
// Since "create" is an invalid word.

totalPoints(["trance", "recant"], "recant") ➞ 108
// Since "trance" and "recant" score 54 pts each.

totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed") ➞ 13
// Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13
_____



[Notes]

___
*) If a 6-letter word has multiple anagrams, count each 6-letter unscramble as an additional 54 pts. For example, if the word is arches, and the player guessed arches and chaser, add 108 pts for both words.
*) You can play Text Twist here: http://text-twist2.com
___



[games] [higher_order_functions] [strings] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

