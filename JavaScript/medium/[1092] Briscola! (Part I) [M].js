/*
####  Briscola! (Part I)  ####

Briscola is an Italian card game, played with a deck of 40 cards that has four suits (hearts, diamonds, clubs, and spades), so that there are ten cards per suit: the Ace, the numbered cards from 2 up to 7, and the three face-cards (Jack, Queen, and King). In this challenge, the notation used for the cards is a string containing the card value (with the upper-case initial for face-cards) and the lower-case initial for suits, as in the examples below:
___
Ah = Ace of Hearts
2s = Two of Spades
Jc = Jack of Clubs
Kd = King of Diamonds
_____

The total number of points available is 120. When counting the points scored at the end of a game, the cards have the following values:
___
*) Ace: 11 points
*) Three: 10 points
*) King: 4 points
*) Queen: 3 points
*) Jack: 2 points
*) Any other card has no value (0 points).
___

Each game of Briscola is made of two rounds. After the first round, the points are counted for both you and your opponent, and these scores (plus 1) will set the target for winning the game, after that the second round is played.
___
- First Round -
Player score: 80
Opponent score: 40
- Second Round -
Player wins scoring 41 points or more.
Opponent wins scoring 81 points or more.
_____

If after the second round the total points are equal for both you and your opponent, it's a tie.
___
- First Round -
Player score: 80
Opponent score: 40
- Second Round -
Player score: 40
Opponent score: 80

It's a tie! 120 points for both players.
_____

You are given two arrays as parameters:
___
*) myDeck1 contains your collected cards during the first round.
*) myDeck2 contains your collected cards during the second round.
___

You have to implement a function that returns:
___
*) "You Win!" if in the second round you totalized a higher score than your opponent's score in the first round.
*) "You Lose!" if in the second round you totalized a lower score than your opponent's score in the first round.
*) "Draw!" if after the second round the total points are the same for both you and your opponent.
___



[Examples]

___
briscolaScore(
  ["3c", "3s", "Qd", "Jh", "5d", "Jc", "6d", "Ad", "Js", "Qc"],
  ["Jd", "Kd", "4c", "6s", "Ks", "5c", "3d", "As", "Jh", "6h"]
) ➞ "You Lose!"

// You score 43 points in the first round.
// You need to score at least 78 points in the second round.
// You score 33 points in the second round.

briscolaScore(
  ["Ac", "As", "3d", "3h", "3s", "Ah", "Kd"],
  ["3d", "Ad", "Ac", "As", "Ah"]
) ➞ "You Win!"

// You score 67 points in the first round.
// You need to score at least 54 points in the second round.
// You score 54 points in the second round.

briscolaScore(
  ["Ac", "As", "3d", "3h", "3s", "Ah", "Kd"],
  ["3d", "Ad", "Ac", "As", "3h"]
) ➞ "Draw!"

// You score 67 points in the first round.
// You need to score at least 54 points in the second round.
// You score 53 points in the second round.
// Your total score is 120, and so is for your opponent.
_____



[Notes]

___
*) You don't need to count the points scored by your opponent, because you know the maximum points available in a round (120).
*) Despite suits are important during the game, they do not influence the score when counting points.
*) The original standard suits and face-cards of an Italian deck are different from the international ones used for Poker. If you want to know more, take a look at the Resources tab.
___



[arrays] [data_structures] [games] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Replace Multiple Characters with One Replace Call
https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
Very simple little question, but I don't quite understand how to do it. I need to replace every instance of '_' with a space, and every instance of '#' with nothing/emp …
_________
_________
Briscola
https://en.wikipedia.org/wiki/Briscola
One of Italy's most popular games, together with Scopa and Tressette. A little-changed descendant of Brusquembille, the ancestor of Briscan and Bezique,[1] Briscola is …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

