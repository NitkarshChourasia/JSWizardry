/*
####  Morse Code Decoded  ####

Create a function that takes a string (morse code) as an argument and returns an unencrypted string.


[Examples]

___
decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"

decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"

decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .") ➞ "EDABBIT CHALLENGE"
_____

The following object can be used for coding:
___
morseToDots = {
  ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
  "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
  "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  ".-.-.-":".", ".----.":""", "---...":":", "--..--":", ", " ":""
}
_____



[Notes]

___
*) Return values are all uppercase.
*) Input string can have digits.
*) Input string can have some special chararacters (e.g. comma, colon, apostrophe, period, question mark, exclamation mark).
___



[arrays] [conditions] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Full Dictionary
https://pastebin.com/NQ2mLUs2
Complete dictionary of morse code.
_________
_________
International Morse Code
https://morsecode.scphillips.com/morse2.html
International Morse code: all letters, digits, accented letters and punctuation marks are tabulated along with the common prosigns, Q codes and abbreviations.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

