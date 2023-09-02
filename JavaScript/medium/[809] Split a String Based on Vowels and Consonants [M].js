/*
####  Split a String Based on Vowels and Consonants  ####

Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.


[Examples]

___
split("abcde") ➞ "aebcd"

split("Hello!") ➞ "eoHll!"

split("What's the time?") ➞ "aeieWht's th tm?"
_____



[Notes]

___
*) Vowels are a, e, i, o, u.
*) Define a separate isVowel() function for easier to read code (recommendation).
___



[conditions] [control_flow] [functional_programming] [regex] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Which regular expression operator means "Don't" match this character?
https://stackoverflow.com/questions/5925738/which-regular-expression-operator-means-dont-match-this-character/5925772
*, ?, + characters all mean match this character. Which character means 'don't' match this? Examples would help.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String start ^ and finish $
https://javascript.info/regexp-anchors
We can use both anchors together to check whether the string exactly follows the pattern. That’s often used for validation.
_________

*/
//Your code should go here:

