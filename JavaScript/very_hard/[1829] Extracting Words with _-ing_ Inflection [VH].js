/*
####  Extracting Words with "-ing" Inflection  ####

Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.


[Examples]

___
ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]

ingExtractor("going Ping, king sHrink dOing") ➞ ["going", "dOing"]

ingExtractor("zing went ring, ding wing SINk") ➞ []
_____



[Notes]

___
*) Mono-syllabic means a word containing just one syllable.
*) It's probably best to use RegEx for this challenge.
___



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() method …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Regex Tester and Debugger
https://regex101.com/
With syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java. Features a regex quiz & library.
_________

*/
//Your code should go here:

