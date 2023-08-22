/*
####  RegEx XXII : Unicode property escapes  ####

Unicode property escapes match characters based on their Unicode properties - Binary ("boolean-like") or non-binary. They can be used to match emojis, punctuations, letters (even letters from specific languages or scripts), etc.
___
const sentence = "A ticket to 大阪 costs ¥2000 👌."

sentence.match(/\p{Emoji_Presentation}/gu) ➞ ["👌"]
_____

Note: For Unicode property escapes to work, a regular expression must use the u flag which indicates a string must be considered as a series of Unicode code points. See also RegExp.prototype.unicode.
Note: Some Unicode properties encompasses much more characters than some character classes (such as \w which matches only latin letters, a to z) but the latter is better supported among browsers (as of January 2020).
Match all words in the nonEnglishText using a unicode property escape.
___
const nonEnglishText = "Приключения Алисы в Стране чудес"

const regex = /\w+/gu
nonEnglishText.match(regex) ➞ null, \w doesn't work with non english text

const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu
nonEnglishText.match(regexpBMPWord) ➞ [ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ], this works

const regexpUPE = /YOUR SOLUTION HERE/gu
nonEnglishText.match(regexpUPE) ➞ [ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ], an easier way
_____



[Notes]

You will more than likely have to check the references in the Resource tab to solve.


[formatting] [regex] 



-------------------------------------------------------------------
[Resources]
_________
Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
Unicode property escapes vs. character classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes#Unicode_property_escapes_vs._character_classes
With JavaScript regular expressions, it is also possible to use character classes and especially \w or \d to match letters or digits. However, such forms only match cha …
_________
_________
RegEx Tester and Debugger
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
New JavaScript Features That Will Change How You Write Regex
https://www.smashingmagazine.com/2019/02/regexp-features-regular-expressions/#named-capture-groups
If you have ever done any sort of sophisticated text processing and manipulation in JavaScript, you’ll appreciate the new features introduced in ES2018. In this article …
_________

*/
//Your code should go here:

