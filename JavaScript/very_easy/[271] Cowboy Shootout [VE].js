/*
####  Cowboy Shootout  ####

Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:
___
*) He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
*) Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
___

Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.


[Examples]

___
rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5

rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2
_____



[Notes]

All the bottles will be shot down in all the tests.


[arrays] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

