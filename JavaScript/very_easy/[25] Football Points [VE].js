/*
####  Football Points  ####

Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
___
*) wins get 3 points
*) draws get 1 point
*) losses get 0 points
___



[Examples]

___
footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0
_____



[Notes]

Inputs will be numbers greater than or equal to 0.


[algebra] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript Arithmetic
https://www.w3schools.com/js/js_arithmetic.asp
In arithmetic, the division of two integers produces a quotient and a remainder.
 In mathematics, the result of a modulo operation is the remainder of an arithmetic div …
_________
_________
Using Math Expressions in JavaScript
https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/a/using-math-expressions-in-js
When you use multiple math operators in a single expression, the computer follows an "order of operations" to make sure it computes the result the same way each time. I …
_________
_________
Soccer Scoring Rules
https://www.rookieroad.com/soccer/rules-and-regulations/scoring-rules/
In the sport of soccer, teams work together to to score goals, because goals win the game. A goal is when the ball fully crosses the goal line between the goalposts and …
_________
_________
Three Points for a Win
https://en.wikipedia.org/wiki/Three_points_for_a_win
Is a standard used in many sports leagues and group tournaments, especially in association football, in which three (rather than two) points are awarded to the team win …
_________
_________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________

*/
//Your code should go here:

function footballPoints(wins, draws, losses) {
    return wins * 3 + draws
}

if (require.main == module ){
    console.log(footballPoints(3, 4, 2))
    console.log(footballPoints(5, 0, 2))
    console.log(footballPoints(0, 0, 1))
}

// complete.