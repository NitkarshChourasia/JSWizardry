/*
####  Bracket Logic  ####

Brackets and parentheses in mathematical expressions have to conform to certain logical rules. Every opening bracket must have a closing mate somewhere further down the line. Although brackets can be nested, different types cannot overlap:
___
*) ([<x+y>+3]-1) makes sense because each set of brackets contains or is contained by another set.
*) ([<x+y>+3)-1] makes no sense because the parentheses and the square brackets overlap.
___

Given a string expression that can contain four types of brackets: () <> [] {}, create a function that returns true if the bracket logic is valid and false if it is not.


[Examples]

___
bracketLogic("[<>()]") ➞ true

bracketLogic("[<(>)]") ➞ false

bracketLogic("[(a*b+<7-c>+9]") ➞ false
// Opening parenthesis has no mate.

bracketLogic("[{(h*i+3)-12]/4*x+2}") ➞ false
// Square and curly brackets overlap.

bracketLogic("[ab(c/d<e-f+(7*6)>)+2]") ➞ true
_____



[Notes]

Any characters other than the brackets can be ignored.


[logic] [validation] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

