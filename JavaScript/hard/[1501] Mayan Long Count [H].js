/*
####  Mayan Long Count  ####

Ever heard about 13.0.0.0.0 and the end of the world? The Maya civilization used to record the passed days from their mythological creation date (11 August 3114BC in the proleptic Gregorian calendar is the most accredited date) with a system that nowadays is called "The Long Count".
Days were recorded in a 5-place counter with a mixed base20 and base18 system. Starting from the left the names and values of the counter-places are:
___
*) Baktun = 20 Katun = 144000 days (from 1 to 13)
*) Katun = 20 Tun = 7200 days (from 0 to 19)
*) Tun = 18 Uinal = 360 days (from 0 to 19)
*) Uinal = 20 Kin = 20 days (from 0 to 17)
*) Kin = 1 day (from 0 to 19)
___

A complete calendar cycle is equal to 1872000 days (13 Baktun).
The initial total Kin number is equal to the passed days from starting point to the date of interest less 365. Then, for every counter place, the value is obtained dividing the Kin by the corresponding counter-place days value (144000 for Baktun, 7200 for Katun, and so on) with the Kin that at every step becomes the remainder of the division.
Given a date as a string you must return a string representing the Mayan Long Count Date, joining the values of Baktun, Katun, Tun, Uinal and Kin with a dot between them.


[Examples]

___
getMayanDate("2012, 12, 21") ➞ "13.0.0.0.0"
// Whole part of 1872000 passed days / Baktun = 13, Kin (remainder) is 0

getMayanDate("1776, 7, 4") ➞ "12.8.0.1.13"
// Whole part of 1785633 passed days / Baktun = 12, Kin (remainder) is 57633
// Whole part of Kin / Katun = 8, Kin is now 33.
// Whole part of Kin / Tun = 0, Kin is  33.
// Whole part of Kin / Uinal = 1, Kin is 13.

getMayanDate("1200, 1, 1") ➞ "10.18.15.3.8"
_____



[Notes]

___
*) The starting date is already in the Code tab.
*) Remember to subtract 365 days from the total passed days before starting calculations.
*) Kin is literally a variable that changes at every step.
*) Given dates are in the "YYYY, MM, DD" format.
*) In the Resources tab you can find more info about the Mayan Long Count and a tool for calculate it given any date.
___



[dates] [formatting] [math] 



-------------------------------------------------------------------
[Resources]
_________
Numbers in JavaScript
https://javascript.info/number
This resource has a section that compares the differences in the various ways to round numbers in JavaScript.
_________
_________
Mesoamerican Long Count Calendar
https://en.wikipedia.org/wiki/Mesoamerican_Long_Count_calendar
A non-repeating, vigesimal (base-20) and base-18 calendar used by several pre-Columbian Mesoamerican cultures, most notably the Maya. For this reason, it is often known …
_________
_________
Date Object
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.
_________
_________
Maya Calendar Converter
https://maya.nmai.si.edu/calendar/maya-calendar-converter
Any date in the Gregorian calendar can be converted into a corresponding one in the Maya calendar system. A particular day, month, and year can be expressed as a Long C …
_________

*/
//Your code should go here:

