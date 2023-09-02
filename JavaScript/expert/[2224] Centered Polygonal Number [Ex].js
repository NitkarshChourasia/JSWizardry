/*
####  Centered Polygonal Number  ####

The centered polygonal numbers are a family of sequences of 2-dimensional figurate numbers, each formed by a central dot, sorrounded by polygonal layers with a constant number of sides. Each side of a polygonal layer contains one dot more than a side in the previous layer.

In the following table are listed the first 12 terms of the sequences of centered k-polygonal numbers, with k from 3 to 22:

As you can see:
___
*) 6 is the 1st pentagonal number;
*) 16 is the 2nd pentagonal number and the 1st pentadecagonal number;
*) 19 is the 3rd triangular number, the 2nd hexagonal number and the 1st octadecagonal number.
___

Write a function that takes an integer n as argument and returns its classification as polygonal number:
___
*) return "0th of all" if n is 1, since it is the 0th term of every centered polygonal number sequence;
*) return a list whose generic element is a string formatted as "{i}th {k}-gonal number" if n is the i-th k-gonal number, in k-ascending order;
*) return false if n is not a k-gonal number for any k > 2.
___



[Examples]

___
isPolygonal(3) ➞ false

isPolygonal(4) ➞ ["1st 3-gonal number"]

isPolygonal(16) ➞ ["2nd 5-gonal number", "1st 15-gonal number"]
_____



[Notes]

N/A


[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Centered Polygonal Numbers (OeisWiki)
http://oeis.org/wiki/Centered_polygonal_numbers
A family of sequences of 2-dimensional regular polytope numbers (among the 2-dimensional figurate numbers), each formed by a central dot (for  n = 0 ), surrounded by po …
_________
_________
Centered Polygonal Number
https://en.wikipedia.org/wiki/Centered_polygonal_number
A class of series of figurate numbers, each formed by a central dot, surrounded by polygonal layers with a constant number of sides. Each side of a polygonal layer cont …
_________

*/
//Your code should go here:

