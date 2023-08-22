/*
####  Learn Lodash: _.differenceBy, Find the Difference in Arrays According to Given Value  ####

According to the lodash documentation, _.differenceBy is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
The iteratee can be a function or a value.
This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
Imagine you have a car dealership with two parking lots. Using the lodash difference function you would compare one lot and get a list of all cars that are different than the other lot. But if your manager would like to know which cars are different only by the color you would want to use difference by. The comparison "color" is then the iteratee. In this case, it's just a value you are using to compare but differenceBy can also receive a function. Imagine your boss wants you to get difference by car age, you'd then have to calculate the age for each car. That is what makes this much more challenging than the difference function.


[Arguments]

___
*) array (Array): The array to inspect.
*) [values] (...Array): The number of arrays containing the values to exclude.
*) iteratee - a comparison function or value invoked per argument.
___



[Returns]

___
*) (Array): Returns the new array of filtered values.
___



[Examples]

___
differenceBy([{ "x": 2 }, { "x": 1 }], [{ "x": 1 }], "x");
➞ [{ "x": 2 }]

differenceBy(["orange", "pear", "banana"], ["apple", "pear", "grape"], ["apple", "pear", "banana"], (s) => s.includes("o")),
➞ ["orange"]
_____

___
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
___



[arrays] [functional_programming] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

