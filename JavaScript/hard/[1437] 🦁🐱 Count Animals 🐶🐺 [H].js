/*
####  🦁🐱 Count Animals 🐶🐺  ####

Mubashir needs your help to find out number of animals hidden in a given string txt.
You are provided with an array of animals given below:
___
animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]
_____

Rule: Return the maximum number of animal names. See the below example:
___
txt = "goatcode"

countAnimals(txt) ➞ 2
// First animal = "dog"
// Remaining string = "atcoe",
// Second animal = "cat".
// count = 2 (correct)

// If you got a "goat" first time
// remaining string = "code",
// no animal will be found during next time.
// count = 1 (wrong)
_____



[Examples]

___
countAnimals("goatcode") ➞ 2
// "dog", "cat"

countAnimals("cockdogwdufrbir") ➞ 4
// "cow", "duck", "frog", "bird"

countAnimals("dogdogdogdogdog") ➞ 5
_____



[Notes]

N/A


[language_fundamentals] [regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
Regex
https://regex101.com/
Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java. Features a regex quiz & library.
_________
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________
_________
Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you acc …
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the …
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
The forEach() method executes a provided function once for each array element.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represe …
_________

*/
//Your code should go here:

