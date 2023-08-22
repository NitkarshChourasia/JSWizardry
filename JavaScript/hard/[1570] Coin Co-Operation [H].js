/*
####  Coin Co-Operation  ####

Let's say that there exists a machine that gives out free coins, but with a twist!
Separating two people is a wall, and this machine is placed in such a way that both people are able to access it. Spending a coin in this machine will give the person on the other side 3 coins and vice versa.
If both people continually spend coins for each other (SHARING), then they'll both gain a net profit of 2 coins per turn. However, there is always the possibility for someone to act selfishly (STEALING): they spend no coins, yet they still receive the generous 3 coin gift from the other person!
Here's an example of Red taking advantage of Green! 


[The Challenge]

Assuming that both people start with 3 coins each, create a function that calculates both people's final number of coins. You will be given two arrays of strings, with each string being the words "share" or "steal".


[Examples]

___
getCoinBalances(["share"], ["share"]) ➞ [5, 5]
// Both people spend one coin, and receive 3 coins each.

getCoinBalances(["steal"], ["share"]) ➞ [6, 2]
// Person 1 gains 3 coins, while person 2 loses a coin.

getCoinBalances(["steal"], ["steal"]) ➞ [3, 3]
// Neither person spends any coins and so no one gets rewarded.

getCoinBalances(["share", "share", "share"], ["steal", "share", "steal"]) ➞ [3, 11]
_____



[Notes]

___
*) No tests will include a negative number of coins.
*) All words will be given in lowercase.
*) This challenge is adapted from a famous game theory example called the Prisoner's Dilemma, which you can learn more about in the Resources tab.
___



[algorithms] [interview] [language_fundamentals] [loops] 



-------------------------------------------------------------------
[Resources]
_________
The Evolution of Trust
https://ncase.me/trust/
A very fun simulation of the Prisoner's Dilemma, which this whole challenge is based on. Playtime is 30 minutes.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Prisoner's Dilemma
https://en.wikipedia.org/wiki/Prisoner%27s_dilemma
A standard example of a game analyzed in game theory that shows why two completely rational individuals might not cooperate, even if it appears that it is in their best …
_________
_________
The Prisoner's Dilemma
https://www.youtube.com/watch?v=t9Lo2fgxWHw
The prisoners dilemma is a hypothetical game set up showing a situation where people won't want to work together even when it's beneficial to do so. It's jus...
_________

*/
//Your code should go here:

