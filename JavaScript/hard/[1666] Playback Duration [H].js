/*
####  Playback Duration  ####

YouTube offers different playback speed options for users. This allows users to increase or decrease the speed of the video content. Given the actual duration and playback speed of the video, calculate the playback duration of the video.


[Examples]

___
playbackDuration("00:30:00", 2) ➞ "00:15:00"

playbackDuration("01:20:00", 1.5) ➞ "00:53:20"

playbackDuration("51:20:09", 0.5) ➞ "102:40:18"
_____



[Notes]

___
*) Both durations will be in hh:mm:ss format.
*) Playback speed will be up to one decimal place only.
*) Time units are expected to be truncated/floored.
___



[conditions] [logic] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
_________
_________
Convert seconds to HH-MM-SS with JavaScript?
https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
You can manage to do this without any external JavaScript library with the help of JavaScript Date method like following....
_________

*/
//Your code should go here:

