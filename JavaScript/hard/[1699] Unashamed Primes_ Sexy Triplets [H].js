/*
####  Unashamed Primes: Sexy Triplets  ####

A sexy (from sex, the Latin word for six) prime triplet is a group of three primes that differ by each other by 6, with the sum of the smallest prime plus 18 being a composite number.
You must implement a function that returns an array of triplets (triplets being arrays in turn) found in a range, which included bounds are the two given integers low and high.


[Examples]

___
sexyTriplets(1, 19) ➞ [ [7, 13, 19] ]
// 7 + 6 = 13 + 6 = 19 and 7 + 18 = 25 (composite)

sexyTriplets(5, 17) ➞ []
// Despite [5, 11, 17] can seem a triplet, 5 + 18 = 23 (not composite)

sexyTriplets(64, 88) ➞ [ [67, 73, 79] ]
// 67 + 6 = 73 + 6 = 79 and 67 + 18 = 85 (composite)
_____



[Notes]

___
*) If no triplets are found in the range, return an empty array (see example #2).
*) A composite number is trivially a not prime number.
___



[arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Sexy Prime
https://en.wikipedia.org/wiki/Sexy_prime
Prime numbers that differ from each other by 6. For example, the numbers 5 and 11 are both sexy primes, because 11 - 5 = 6.
_________

*/
//Your code should go here:

