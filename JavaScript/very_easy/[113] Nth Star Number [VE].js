/*
####  Nth Star Number  ####

Create a function that takes a positive integer n and returns the nth "star number".
A star number is a centered figurate number that represents a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.



[Examples]

___
starNumber(2) ➞ 13
n = 2
2nd star number = 13

starNumber(3) ➞ 37
n = 3
3rd star number = 37

starNumber(5) ➞ 121
n = 5
5th star number = 121
_____



[Notes]

___
*) n will always be a positive integer.
*) The nth term of a star number can be represented as 6n(n-1) + 1
*) See Resources for more information.
___



[algebra] [math] 



-------------------------------------------------------------------
[Resources]
_________
Star Number
https://en.wikipedia.org/wiki/Star_number
Is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
_________
_________
Program to Find Star Number
https://www.geeksforgeeks.org/program-to-find-star-number/
A number is termed as star number, if it is a centered figurate number that represents a centered hexagram (six-pointed star) similar to Chinese checker game. The few s …
_________

*/
//Your code should go here:

function starNumber(n) {
    return 6 * n * (n - 1) + 1;
}

if (require.main == module) {
    console.log("####  Nth Star Number  ####")

    // Test cases.
    console.log(starNumber(2));
    console.log(starNumber(3));
    console.log(starNumber(5));
}

// 12-09-2023
// complete.