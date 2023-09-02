/*
####  Simplified Square Root  ####

Create a function that takes in a positive integer n and returns the simplified square root of n as [_a_, _b_], where a⋅sqrt(b) = sqrt(n) and b is as small as possible.


[Examples]

___
simplifySqrt(72) ➞ [6, 2]

simplifySqrt(160) ➞ [4, 10]

simplifySqrt(36) ➞ [6, 1]

simplifySqrt(35) ➞ [1, 35]
_____

A common way to simplify square roots is to repeatedly factor out perfect squares from the number underneath the square root. For example, if you need to simply sqrt(72), you can factor out perfect squares from 72 according to the following process:
___
sqrt(72)
_____

72 is divisible by 4, so factor 4 out of 72:
___
sqrt(4⋅18)
_____

The perfect square 4 can now be square rooted and pulled out of the square root:
___
2⋅sqrt(18)
_____

Now repeat the process until no further perfect squares can be factored out. 18 is divisible by 9, so factor it out:
___
2⋅sqrt(9⋅2)
_____

Pull the 9 out, square root it, and simplify:
___
2⋅3⋅sqrt(2)
_____

___
= 6⋅sqrt(2)
_____

2 does not have any perfect square factors other than 1, so 6⋅sqrt(2) is the simplest form of sqrt(72). The function would therefore return [6, 2].
This is only one approach to solving this problem; there are probably other ways that are simpler/faster than this method. Feel free to use any method you want.


[Notes]

___
*) If n is a perfect square, b should be 1.
*) If n has no perfect square factors (other than 1), a should be 1.
___



[algebra] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Simplifying Square Roots
https://www.mathsisfun.com/numbers/simplify-square-roots.html
Make the number inside the square root as small as possible (but still a whole number).
_________

*/
//Your code should go here:

