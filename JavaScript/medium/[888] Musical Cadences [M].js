/*
####  Musical Cadences  ####

In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:
___
*) V followed by I is a Perfect Cadence
*) IV followed by I is a Plagal Cadence
*) V followed by Any chord other than I is an Interrupted Cadence
*) Any chord followed by V is an Imperfect Cadence
___

Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.


[Examples]

___
findCadence(["I", "IV", "V"]) ➞ "imperfect"

findCadence(["ii", "V", "I"]) ➞ "perfect"

findCadence(["I", "IV", "I", "V", "vi"]) ➞ "interrupted"
_____



[Notes]

___
*) Return strings all in lowercase.
*) Only focus on the last two chords of a progression.
*) Return "no cadence" if none of the criteria match up.
*) I is a capital i, not a lowercase L.
___



[algorithms] [arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
Cadences
https://www.musictheoryacademy.com/how-to-read-sheet-music/cadences/
A cadence is a chord progression of at least 2 chords that ends a phrase or section of a piece of music. The easiest way to understand cadences in music is to think of …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________

*/
//Your code should go here:

