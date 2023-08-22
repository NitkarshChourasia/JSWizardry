/*
####  Big Integers, Big Errors  ####

In this challenge, you have to create a class to deal with Big Integers. It will use just a single static method called max, used to find the Big Integer with the highest value among the given data.
You'll have to also manage a series of exceptions, establishing if the given input is valid:
___
*) A given Big Integer will always be valid.
*) A given integer lower or equal than the JS MAX_SAFE_INTEGER will be converted into a Big Integer (before calculating the max value).
*) A given string containing an integer lower or equal than the JS MAX_SAFE_INTEGER will be converted into a Big Integer (before calculating the max value).
*) If no input is given, the function must return null.
*) If none of the previous conditions are satisfied, the given input is not valid.
___

The max method applied to the input has to return:
___
*) If the input is valid, the highest given value as a Big Integer.
*) null if no input is given.
*) A string "Big Error" if the input contains invalid data.
___



[Examples]

___
Big.max(1n, 10n, 5n) ➞ 10n

Big.max("10", 5n, 1) ➞ 10n

Big.max() ➞ null

Big.max(2 ** 53 - 1) ➞ 9007199254740991n

Big.max(2 ** 53) ➞ "Big Error"

Big.max("10" / 3) ➞ "Big Error"

Big.max("10" / 2) ➞ 5n

Big.max(10 - 12, 10 - 10, 10 - 11) ➞ 0n

Big.max(0n) ➞ 0n

Big.max("") ➞ "Big Error"
_____



[Note]

___
*) Reading the specific link about BigInt behaviors (look at the Resources tab) is highly recommended.
*) Inputs and values will be given in various ways trying to represent a real scenario. For coding easiness, tests are grouped separately.
___



[classes] [conditions] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Allows us to represent an indefinite number of arguments as an array.
_________
_________
BigInt, arbitrary precision integers in JavaScript
https://golb.hplar.ch/2018/09/javascript-bigint.html
BigInt is a primitive that can represent integers with arbitrary precision, unlike the Number primitive that can only safely store integer values up to 2^53. BigInts al …
_________
_________
static
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
Defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself.
_________
_________
Number.MAX_SAFE_INTEGER
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
Constant represents the maximum safe integer in JavaScript (253 - 1).
_________

*/
//Your code should go here:

