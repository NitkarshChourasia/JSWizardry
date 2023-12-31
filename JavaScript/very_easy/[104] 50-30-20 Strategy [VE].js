/*
####  50-30-20 Strategy  ####

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.


[Examples]

___
fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
_____



[Notes]

N/A


[algebra] [arrays] [data_structures] [numbers] [objects] 



-------------------------------------------------------------------
[Resources]
_________
4 Ways to Create an Object
https://www.developerdrive.com/4-ways-to-create-an-object-in-javascript-with-examples/
JavaScript is a modern object-oriented programming language. It has been designed as a set of objects that interact with each other. Object-oriented languages such as J …
_________
_________
How to Add a New Item to an Object at a Specific Position With Vanilla
https://gomakethings.com/how-to-add-a-new-item-to-an-object-at-a-specific-position-with-vanilla-js/
So here’s the thing: unlike arrays, objects don’t have an index. Technically the browser can order them however it wants. If you need a specific order, you’re supposed …
_________
_________
How to Create Objects in JavaScript
https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
We all deal with objects in one way or another while writing code in a programming language. In JavaScript, objects provide a way for us to store, manipulate, and send …
_________

*/
//Your code should go here:

function fiftyThirtyTwenty(income) {
    return { Needs: income * 0.5, Wants: income * 0.3, Savings: income * 0.2 };
}


if (require.main == module) {
    // Test cases.
    console.log(fiftyThirtyTwenty(10000));
    console.log(fiftyThirtyTwenty(50000));
    console.log(fiftyThirtyTwenty(13450));
}


// 10-09-2023
// complete.