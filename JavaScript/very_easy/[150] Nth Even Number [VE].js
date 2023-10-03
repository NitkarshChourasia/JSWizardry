/*
####  Nth Even Number  ####

Create a function that takes a number n and returns the nth even number beginning with 0 as the first.


[Examples]

___
nthEven(1) ➞ 0
0 is first even number

nthEven(2) ➞ 2
2 is second even number

nthEven(100) ➞ 198
_____



[Notes]

N/A


[language_fundamentals] [math] [numbers]



-------------------------------------------------------------------
[Resources]
_________
List of Even Numbers
https://www.chilimath.com/lessons/introductory-algebra/list-of-even-numbers/
To review the concept of an even number, please check out my lesson on Even Numbers. You may click the image below with your mouse 🐭 to take you to the lesson.
_________
_________
JavaScript - Operators
https://www.tutorialspoint.com/javascript/javascript_operators.htm
Let us take a simple expression 4 + 5 is equal to 9. Here 4 and 5 are called operands and ‘+’ is called the operator. JavaScript supports the following types of operators.
_________
_________
Program for Nth Even Number
https://www.geeksforgeeks.org/program-for-n-th-even-number/
Given a number n, print the nth even number. The 1st even number is 2, 2nd is 4 and so on.
_________

*/
//Your code should go here:

function nthEven(n) {
    return n * 2 - 2;
}

if (require.main == module) {
    // Title.
    console.log("####  Nth Even Number  ####");
    // Test cases.
    console.log(nthEven(1)); // 0
    console.log(nthEven(2)); // 2
    console.log(nthEven(100)); // 198

    // End of script.
}

// 3-October-2023
// complete.