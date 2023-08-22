/*
####  Who's That Polygon?  ####

Every polygon has an official name. Individual polygons are named according to the number of sides, combining a Greek-derived numerical prefix with the suffix -gon, e.g. pentagon, dodecagon.
Write a function that takes an integer n as argument and returns the official name of a n-sided polygon.
The following prefixes table is used to construct the name of a polygon.

For polygons with 3 through 9 sides, simply add "-gon" to the ones prefixes. For 10 through 99 sides, you return the tens prefix followed by the ones prefix and then by "-gon". For 100 through 999 sides, you start from the hundreds prefix, then add the tens prefix and finally the ones prefix followed by "-gon".
For polygons with more than 999 sides, the following prefixes are used similarly to how "conta-" and "hecta-" are used for tens and hundreds places respectively:

And finally, the 10¹⁰⁰-gon is called googolgon and the ∞-gon (with a countable infinite number of sides) is called apeirogon.


[Examples]

___
polygonName(3) ➞ "triangle"
// exception of: tri-gon

polygonName(4) ➞ "quadrilateral"
// exception of: tetra-gon

polygonName(5) ➞ "pentagon"
// penta-gon

polygonName(7) ➞ "heptagon"
// hepta-gon

polygonName(19) ➞ "enneadecagon"
// ennea-deca-gon

polygonName(36) ➞ "triacontahexagon"
// triaconta-hexa-gon

polygonName(428) ➞ "tetrahectaicosioctagon"
// tetrahecta-icosi-octa-gon

polygonName(12345) ➞ "myriadichiliatriahectatetracontapentagon"
// myria-dichilia-triahecta-tetraconta-penta-gon
_____



[Notes]

___
*) The triangle, quadrilateral and nonagon are exceptions, although the regular forms trigon, tetragon, and enneagon are sometimes encountered as well.
*) Check Tests to spot other exceptions.
___



[data_structures] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Naming Polygons
http://faculty.kutztown.edu/schaeffe/Tutorials/General/Polygons.html
To "construct" the name, we start with the prefix for the hundreds digit taken from the "Ones Digit" table above, follow it by "hecta," then proceed as before.
_________
_________
List of Polygons
https://en.wikipedia.org/wiki/List_of_polygons
A plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed chain. These segments are called its edges or sides, and t …
_________

*/
//Your code should go here:

