/*
####  Puzzle: Gather and Order  ####

Create a gather function that accepts a string argument and returns another function. The function calls should support continued chaining until order is called.
order should accept a number as an argument and return another function. The function calls should support continued chaining until get is called.
get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.


[Examples]

___
gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"

gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"

gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello!"
_____



[Notes]

Expect gather and order to chain any number of times, but always with the same number of invocations for each (i.e both fuctions will always be chained the same nubmer of times).


[functional_programming] [higher_order_functions] [recursion] [scope] 



-------------------------------------------------------------------
[Resources]
_________
Function.prototype.bind()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new functio …
_________

*/
//Your code should go here:

