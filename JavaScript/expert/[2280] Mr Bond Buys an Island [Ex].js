/*
####  Mr Bond Buys an Island  ####

Having spent decades doing dangerous stuff like running away from explosions, running towards explosions, running alongside explosions, and other Cool Spy Things, Commander James Bond has finally decided to retire. Mr. Bond wishes to follow (somewhat) in Dr. No's footsteps, and buy a private island.
Fortunately, the illustrious archipelago nation of Edabitia has decided to offer its land up for sale. The problem, however, is that most of the unoccupied islands of Edabitia are... rather small. As in, they wouldn't even be able to fit a broom closet, much less the sprawling mansion deserving of Bond!
Bond, not wanting to deal with all this nasty real estate stuff, hires you to find him an island.


[Your Job]

Given a grid of an area of Edabitia, and a desired that describes the area Bond desires for his mansion, determine whether there exists, on that map, an island that would be suitable.


[Map]

The map will be represented by a 2-dimensional array with two possible values for each "cell":
___
*) 1: The cell is land.
*) 0: The cell is water.
___



[Build Rules]

Bond's house base will be built up of square subsections, with each subsection occupying one cell of the map. So that Bond can actually walk between sections, each section must be connected to other sections in the house by a full wall. In other words, two cells connected by only a diagonal don't "count". In "math" terms: Two cells A and B are part of the same island only if B is directly north, east, south, or west of A.
Other than that, a mansion can be any shape.
Confused? Let's look at a few examples:
___
enoughRoom([
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
],  5) ➞ false


enoughRoom([
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0]
],  4) ➞ false


enoughRoom([
  [1, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0]
],  6) ➞ true
_____

In the first example, we only have a 4x4 square. We're asked to find an area for a mansion of 5 cells in size, so that won't work.
In the second example, while we do have 4 total squares of land (our desired land total), the two islands (one "wide" and one "tall") are only connected by a diagonal, and so must be treated as two separate islands.
In the third example, even though the island itself is a weird, snakey, z-shape, it still is one island of area = 7, which is more than enough for our needs.


[Notes]

___
*) For the sake of this problem, assume that Bond can build his house right up against the water's edge. That is, while normally you'd want to avoid building right at the water (because of, you know, erosion), you can safely ignore that here.
*) Again, other than the No Diagonals rule, Bond's house can be any shape.
*) Assume that the current map you're looking at is entirely surrounded by water. That is, assume that the only nearby land available is the land you see.
___



[algorithms] [arrays] [logic] [recursion] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

