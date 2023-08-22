/*
####  Unusual Subtraction  ####

Create a function that subtracts 1 from n (unless it ends in 0) k number of times. If n ends in 0, remove the 0.
To illustrate:
___
n = 22
k = 3
_____

This means our number is 22 and we have to repeat the algorithm three times. 22 does not end in 0 so we continue subtracting 1.
___
22 - 1 = 21
k = 1
21 - 1 = 20
k = 2
_____

Now 20 ends in 0, so we can remove it. We get 2; k = 3. The algorithm ends there because we applied it three times.
___
N:  K:
22
21  1
20  2
2   3
_____



[Examples]

___
notGoodMath(540, 5) ➞ 50

notGoodMath(1000000000, 9) ➞ 1

notGoodMath(42023110, 10) ➞ 4201
_____



[Notes]

N/A


[algorithms] [logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
Wrong Subtraction
https://codeforces.com/problemset/problem/977/A
You are given an integer number n. Tanya will subtract one from it k times. Your task is to print the result after all k subtractions.
_________
_________
Recursion
https://developer.mozilla.org/en-US/docs/Glossary/Recursion
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (e …
_________
_________
Recursion
https://javascript.info/recursion
Is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplif …
_________

*/
//Your code should go here:

