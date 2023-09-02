/*
####  Mona's Sort  ####

Mona has created a method to sort an array in ascending order.
Starting from the left of the array, she compares numbers by pairs. If the first pair is ordered [smaller number, larger number], she moves on. If the first pair is ordered [larger number, smaller number], she swaps the two integers before moving on to the next pair. She repeats this process until she reaches the end of the array.
Then, she moves back to the beginning of the array and repeats this process until the entire array is sorted.
If the unsorted array is: [3, 9, 7, 4], she will perform the following steps (note Swaps here refers to cumulative swaps):

Sorting the array [3, 9, 7, 4] takes her 3 swaps. Write a function that takes in an unsorted array and returns the number of swaps it takes for the array to be sorted according to Mona's algorithm.


[Examples]

___
numberOfSwaps([5, 4, 3]) ➞ 3

numberOfSwaps([1, 3, 4, 5]) ➞ 0

numberOfSwaps([5, 4, 3, 2]) ➞ 6
_____



[Notes]

N/A


[loops] [scope] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
How does JavaScript's sort() work?
https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work
How does the following code sort this array to be in numerical order? I know that if the result of the computation is... Less than 0: "a" is sorted to be a lower inde …
_________
_________
JavaScript Array Sort
https://www.w3schools.com/js/js_array_sort.asp
When the sort() function compares two values, it sends the values to the  compare function, and sorts the values according to the returned (negative,  zero, positive) …
_________

*/
//Your code should go here:

