/*
####  Convert Minutes into Seconds  ####

Write a function that takes an integer minutes and converts it to seconds.


[Examples]

___
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[language_fundamentals] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Convert Minutes to Seconds
https://stackoverflow.com/questions/8907764/convert-minutes-to-seconds
This will not help you in solving the function entirely but will give you a basis and help you in learning how to further research the answer.
_________
_________
Conversion of Minutes into Seconds
https://www.math-only-math.com/conversion-of-minutes-into-seconds.html
We know 1 minute is equal to 60 seconds, which is required to convert the measuring time from minutes to seconds.
_________
_________
Convert Hours to Minutes, Minutes to Seconds and Date to Milliseconds
https://www.tutsmake.com/javascript-convert-hours-to-minutesminutes-to-secondsdate-to-milliseconds/
In this JavaScript convert time tutorial we will explain how to convert hours to minutes, seconds and millisecond, how to convert minutes to seconds and milliseconds, h …
_________
_________
edabit
https://edabit.com/challenges
This will not help you in solving the function entirely but will give you a basis and help you in learning how to further research the answer.
_________
_________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________
_________
Minutes to Seconds
https://www.metric-conversions.org/time/minutes-to-seconds.htm
Fractional results are rounded to the nearest 1/64. For a more accurate answer please select 'decimal' from the options above the result.
_________
_________
Basic math
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
In this article we have covered the fundamental information you need to know about numbers in JavaScript, for now. You'll see numbers used again and again, all the way …
_________
_________
Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Represent a single moment in time in a platform-independent format.
_________
_________
Date Objects
https://www.w3schools.com/js/js_dates.asp
Are created with the new Date() constructor. There are 4 ways to create a new date object...
_________
_________
Minutes to Seconds Converter
https://www.unitconverters.net/time/minutes-to-seconds.htm
Convert any number of minutes into the appropriate number of seconds.
_________

*/
//Your code should go here:

function convert(minutes) {
    // return `${minutes} minutes is equal to ${minutes * 60} seconds.`
    return `${minutes} mins = ${minutes * 60} secs`
}


if (require.main == module) {

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))

}