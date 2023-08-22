/*
####  The Most Brilliant Exciting Fantastic Number  ####

Given a number n, return a sentence which describes the number in the following ways.
___
*) Always start the string with "The most ".
*) If n is evenly divisible by 1, add "brilliant " to the sentence.
*) If n is evenly divisible by 2, add "exciting " to the sentence.
*) ... 3, add "fantastic " to the sentence.
*) ... 4, add "virtuous " to the sentence.
*) ... 5, add "heart-warming " ...
*) ... 6, add "tear-jerking " ...
*) ... 7, add "beautiful " ...
*) ... 8, add "exhilarating " ...
*) ... 9, add "emotional " ...
*) If n is evenly divisible by 10, add "inspiring " to the sentence.
*) Always end the string with "number is n!".
___



[Examples]

___
describeNum(13) ➞ "The most brilliant number is 13!"
// 13 is evenly divisble by 1 only

describeNum(4) ➞ "The most brilliant exciting virtuous number is 4!"
// 4 is evenly divisible by 1, 2 and 4

describeNum(21) ➞ "The most brilliant fantastic beautiful number is 21!"
// 21 is evenly divisible by 1, 3 and 7

describeNum(60) ➞ "The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 60!"
// 60 is evenly divisible by 1, 2, 3, 4, 5, 6 and 10
_____



[Notes]

___
*) Add words to the sentence in the order going down the list.
*) Remember to add a space between each word.
*) BONUS: Try to find the lowest number which uses all possible words in the sentence!
___



[control_flow] [math] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Template literals (Template strings)
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

