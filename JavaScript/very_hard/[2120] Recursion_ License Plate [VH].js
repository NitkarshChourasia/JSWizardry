/*
####  Recursion: License Plate  ####

Traveling through Europe one needs to pay attention to how the license plate in the given country is displayed. When crossing the border you need to park on the shoulder, unscrew the plate, re-group the characters according to the local regulations, attach it back and proceed with the journey.
Create a solution that can format the dmv number into a plate number with correct grouping. The function input consists of string s and group length n. The output has to be upper case characters and digits. The new groups are made from right to left and connected by -. The original order of the dmv number is preserved.


[Examples]

___
licensePlate("5F3Z-2e-9-w", 4) ➞ "5F3Z-2E9W"

licensePlate("2-5g-3-J", 2) ➞ "2-5G-3J"

licensePlate("2-4A0r7-4k", 3) ➞ "24-A0R-74K"

licensePlate("nlj-206-fv", 3) ➞ "NL-J20-6FV"
_____



[Notes]

___
*) You are expected to solve this challenge via a recursive approach.
*) An iterative version of this challenge can be found via this link.
*) A collection of challenges in recursion can be found via this link.
___



[logic] [recursion] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Learn and Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________

*/
//Your code should go here:

