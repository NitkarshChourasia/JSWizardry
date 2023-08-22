/*
####  Fix the Error: Vowel Edition  ####

Your friend is trying to write a function that removes all vowels from a string. They write:
___
function removeVowels(str) {
  return str.replace(/[aeiou]/, "")
}
_____

However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.


[Examples]

___
removeVowels("candy") ➞ "cndy"

removeVowels("hello") ➞ "hllo"
// The "e" is removed, but the "o" is still there!

removeVowels("apple") ➞ "pple"
_____



[Notes]

All letters will be lowercase.


[bugs] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
What's the meaning of /gi in a regex?
https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex
I see an line in my JavaScript code like this: var regex = /[^\w\s]/gi; What's the meaning of this /gi in the regex? Other part I can understand as it accepts a group …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
JavaScript RegExp Object
https://www.w3schools.com/js/js_regexp.asp
Regular expression arguments (instead of string arguments) can be used in the methods above. Regular expressions can make your search much more powerful (case insensit …
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
How can I remove a character from a string using JavaScript?
https://stackoverflow.com/questions/9932957/how-can-i-remove-a-character-from-a-string-using-javascript?rq=1
I am so close to getting this, but it just isn't right. All I would like to do is remove the character "r" from a string. The problem is, there is more than one instanc …
_________

*/
//Your code should go here:

