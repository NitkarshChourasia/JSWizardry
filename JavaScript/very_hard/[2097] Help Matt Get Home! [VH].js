/*
####  Help Matt Get Home!  ####

It's been a long day for Matt. After working on Edabit for quite a bit, he decided to go out and get a beer at the local bar a few miles down the road. However, what Matt didn't realise, was that with too much drinks you can't find the way home properly anymore. Your goal is to help Matt get back home by telling him how long the path to his house is if he drives the optimal route.
Matt lives in a simple world: there is only dirt (represented by a dot), a single house (Matt's house, represented by the letter "h") and there are trees (represented by the letter "t") which he obviously can't drive through. Matt has an unlimited amount of moves and each move he can go north, north-east, east, south-east, south, south-west, west and north-west. There will only be one Matt and one house, which is Matt's.
The world is given to you as a comma-delimited string which represents the cells in the world from top-left to bottom-right. A 3x3 world with Matt on the top-left and his house on the bottom-right, with a tree in the middle would be represented as:
___
m,.,.,.,t,.,.,.,h
_____

The answer to this world would be 3: Matt would first move east, then south-east, then south (or south > south-east > east). The function call related to this example would be the following:
___
getPathLength("m,.,.,.,t,.,.,.,h", 3, 3)
_____

If Matt is unable to get home from his current location, return -1, otherwise return the amount of moves Matt has to make to get home if he follows the optimal path. You are given the world, it's width and it's height.
Good luck!


[algorithms] [loops] 



-------------------------------------------------------------------
[Resources]
_________
A* Search Algorithm
https://en.wikipedia.org/wiki/A*_search_algorithm
In computer science, A* (pronounced as "A star") is a computer algorithm that is widely used in pathfinding and graph traversal, the process of plotting an efficiently …
_________
_________
Dijkstra's Algorithm
https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by compu …
_________

*/
//Your code should go here:

