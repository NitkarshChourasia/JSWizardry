/*
####  Wiggled Strings  ####

Create a function that returns an array of the given string but offset by spaces. Here are some more precise instructions:
___
*) Keep adding spaces on the left until you have the same number of spaces as the word length.
*) Then keep removing spaces until you reach the original word.
___

Below are some helpful examples!


[Examples]

___
wiggleString("hello") ➞ [
  "hello",
  " hello",
  "  hello",
  "   hello",
  "    hello",
  "     hello"
  "    hello",
  "   hello",
  "  hello",
  " hello",
  "hello"
]

wiggleString("EDABIT") ➞ [
  "EDABIT",
  " EDABIT",
  "  EDABIT",
  "   EDABIT",
  "    EDABIT",
  "     EDABIT",
  "      EDABIT",
  "     EDABIT",
  "    EDABIT",
  "   EDABIT",
  "  EDABIT",
  " EDABIT",
  "EDABIT"
]

wiggleString("Wiggle Time") ➞ [
  "Wiggle Time",
  " Wiggle Time",
  "  Wiggle Time",
  "   Wiggle Time",
  "    Wiggle Time",
  "     Wiggle Time",
  "      Wiggle Time",
  "       Wiggle Time",
  "        Wiggle Time",
  "         Wiggle Time",
  "          Wiggle Time",
  "           Wiggle Time",
  "          Wiggle Time",
  "         Wiggle Time",
  "        Wiggle Time",
  "       Wiggle Time",
  "      Wiggle Time",
  "     Wiggle Time",
  "    Wiggle Time",
  "   Wiggle Time",
  "  Wiggle Time",
  " Wiggle Time",
  "Wiggle Time"
]
_____



[Notes]

N/A


[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
_________

*/
//Your code should go here:

