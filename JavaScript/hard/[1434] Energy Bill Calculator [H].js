/*
####  Energy Bill Calculator  ####

Create a function that calculates an energy bill.
Given a billing start date and end date, start and end meter reading, a unit price in pence, and a standing charge (a daily rental fee for your meter) as arguments, calculate your bill.
An energy bill is calculated by multiplying the difference between meter readings with the unit price and adding the number of days multiplied by the standing charge. You then have to add 5% tax.
(days between dates x standing charge) + (diference bewteen meter readings x unit price) + 5% tax


[Examples]

___
energyBill("2020,01,01", "2020,04,01", 1000, 2000, 0.188, 0.243),  = "£220.62"
"2020,04,01" (end date) - "2020,01,01" ( start date ),  = 91 days
  2000 ( end meter read )- 1000 ( start meter read ) = 1000 units used
  1000 (units) * 0.188p (each unit cost) = £188
  91 (days) * 0.243p (standing charge) == £22.113
  22.113 (Total standing charge cost) + £188 (total unit cost) = £210.113
  210.113 (cost) * 0.05 (uk tax on energy) = 10.50565
  210.113 (cost) + 10.50565 (tax) = 220.61865
  answer = "£220.62"
_____



[Notes]

___
*) If the end date is an earlier date from the start date return "Invalid date".
*) If the end meter reading is less then the start meter reading return "Invalid meter readings".
*) Please bring to my attention any clarity issues.
___



[dates] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Dates
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
_________
_________
Pound Sign
https://www.alt-codes.net/pound_alt_code.php
Press and hold the ALT key and type the number 0163 to make a Pound symbol. Use unicode Pound symbol in a html document or copy paste the character.
_________

*/
//Your code should go here:

