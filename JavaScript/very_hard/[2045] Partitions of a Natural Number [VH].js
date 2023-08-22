/*
####  Partitions of a Natural Number  ####

Create a function that determines the number of partitions of a natural number.
A partition of a number n is an unordered sum of one or more numbers which totals n. For example, the partitions of the number 4 are:
___
1 + 1 + 1 + 1 = 4
1 + 1 + 2 = 4
1 + 3 = 4
2 + 2 = 4
4 = 4
_____

Since partitions are unordered, the sums 1 + 1 + 2 = 1 + 2 + 1 = 2 + 1 + 1 = 4 are considered the same partition.


[Examples]

___
partitions(4) ➞ 5

partitions(10) ➞ 42

partitions(0) ➞ 1

partitions(1) ➞ 1

partitions(2) ➞ 2
_____



[Notes]

Remember the trivial partition n = n. Also, we say there is one way to partition zero; namely, 0 = 0.


[algorithms] [logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
Partition
https://en.wikipedia.org/wiki/Partition_(number_theory)
In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums …
_________
_________
Generating Integer Partitions
http://jeromekelleher.net/generating-integer-partitions.html
The purpose of this page is to give an informal presentation of the algorithms I developed for my PhD thesis and subsequently turned into a research article. The basic …
_________
_________
a(n) is the number of partitions of n (the partition numbers)
https://oeis.org/A000041
1, 1, 2, 3, 5, 7, 11, 15, 22, 30, 42, 56, 77, 101, 135, 176, 231, 297, 385, 490, 627, 792, 1002, 1255, 1575, 1958, 2436, 3010, 3718, 4565, 5604, 6842, 8349, 10143, 1231 …
_________
_________
Partition Function P
https://mathworld.wolfram.com/PartitionFunctionP.html
P(n), sometimes also denoted p(n) (Abramowitz and Stegun 1972, p. 825; Comtet 1974, p. 94; Hardy and Wright 1979, p. 273; Conway and Guy 1996, p. 94; Andrews 1998, p. 1 …
_________

*/
//Your code should go here:

