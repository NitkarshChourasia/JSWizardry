/*
####  Validate Credit Card Number  ####

Create a function that takes a number as an argument and returns true if the number is a valid credit card number, false otherwise.
Credit card numbers must be between 14-19 digits in length, and pass the Luhn test, described below:



[Examples]

___
validateCard(1234567890123456) ➞ false

// Step 1: check digit = 6, num = 123456789012345
// Step 2: num reversed = 543210987654321
// Step 3: digit array after selective doubling: [1, 4, 6, 2, 2, 0, 9, 8, 5, 6, 1, 4, 6, 2, 2]
// Step 4: sum = 58
// Step 5: 10 - 8 = 2 (not equal to 6) ➞ false

validateCard(1234567890123452) ➞ true

// Same as above, but check digit checks out.
_____



[Notes]

N/A


[numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Credit Card Number Generator & Validator
https://www.freeformatter.com/credit-card-number-generator-validator.html
These credit card numbers DO NOT work! They are for testing purposes only. Without a valid owner name, an expiration date and a valid CVV code, they can't be used for r …
_________

*/
//Your code should go here:

