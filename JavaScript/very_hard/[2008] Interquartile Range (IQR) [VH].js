/*
####  Interquartile Range (IQR)  ####

The median of a data sample is the value that separates the higher half and the lower half of the data. For example, the median of [1, 2, 3] is 2, and the median of [1, 2, 3, 4] is 2.5 (because (2 + 3) / 2 = 2.5). Another way of saying "median" is to say "Q2" (it's the second quartile). Q1 and Q3 are the medians of the values above or below the Q2. The IQR is equal to Q3 - Q1. Here's an example:
Let's say your data sample is: 1, 2, 3, 4
___
*) The median (Q2) is: (2+3)/2 =2.5
*) The lower half is: 1, 2
*) The upper half is: 3, 4
*) Q1 (median of the first half): (1+2)/2 = 1.5
*) Q3 (median of the second half): (3+4)/2 = 3.5
*) IQR = Q3 - Q1 = 3.5 - 1.5 = 2
___

If the length of the data sample is odd, as in: 1, 2, 3, 4, 5
___
*) The median (Q2) is: 3 (the number is in the middle, so no need to average).
*) 3 is the number that separates the upper and lower data, so we exclude it.
*) The lower half is: 1, 2
*) The upper half is: 4, 5
*) Q1 (median of the first half): (1+2)/2 = 1.5
*) Q3 (median of the second half): (4+5)/2 = 4.5
*) IQR = Q3 - Q1 = 4.5 - 1.5 = 3
___

For a more detailed explanation, please check the Resources tab.
Make a function that takes an array of floats and/or integers and returns the IQR for that array. The return type can be float or int. It doesn't matter.


[Examples]

___
iqr([1, 2, 3, 4]) ➞ 2.0

iqr([5, 4, 3, 2, 1]) ➞ 3.0

iqr([-3.1, -3.8, -14, 23, 0]) ➞ 20.4
_____



[Notes]

___
*) In all test cases, none of the solutions have repeating decimals, so you shouldn't need to worry about rounding the result.
*) There is no universal agreement on how to select quartile values, so if you use an online calculator (such as Wolfram Alpha), you could get a different result depending on how the quartile values were calculated. You need to obtain the quartile values in the way described in the description, which is taken from the description given on khanacademy.com (see the Resources tab).
___



[algorithms] [math] [numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Interquartile Range (IQR)
https://www.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap/measuring-spread-quantitative/v/calculating-interquartile-range-iqr
The IQR describes the middle 50% of values when ordered from lowest to highest. To find the interquartile range (IQR), ​first find the median (middle value) of the lowe …
_________
_________
Quartile
https://en.wikipedia.org/wiki/Quartile
A type of quantile. The first quartile (Q1) is defined as the middle number between the smallest number and the median of the data set. The second quartile (Q2) is the …
_________

*/
//Your code should go here:

