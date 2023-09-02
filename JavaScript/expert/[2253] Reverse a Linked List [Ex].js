/*
####  Reverse a Linked List  ####

A linked list is a special type of data structure where a given item in the list - called a node - has one or two pointers to other nodes in the list. The linked list is either:
___
*) Singly-Linked: Each node points to the next node in the list only, but not back to the previous node.
*) Doubly-Linked: Each node points to both the next node and the previous node.
___

For example, consider the singly-linked list represented by the array [1, 2, 3, 4]
___
 1 --> 2--> 3 --> 4
_____

Note that from node 3, for example, you can follow its pointer to node 4, but you cannot travel from node 3 back to node 2!
___
 ... 2 <-x- 3
_____

Because there is no pointer from node 3 to node 2, 3 is "unaware" of its previous node (node 2).
Reverse a linked list.
To get the Super Mega Awesome Challenge prize (not really), you must also do the following:

Note that not doing these will still pass the challenge: these just earn extra coolness points!
Finally, please note that you MUST return the reversed linked list at the end of the function (however you do it!)


[Examples]

___
[1, 2, 3, 4] ➞ [4, 3, 2, 1]

[8, 6, 7, 5, 3, 0, 9] ➞ [9, 0, 3, 5, 7, 6, 8]

["a", "b", "c", "e"] ➞ ["e" ,"c", "b", "a"]
_____



[Tips]

___
*) Your initial linked list will be created with new LinkedList(arr), where arr is a list of items such as [1,2,3,4].
*) The linked list has three helper methods
insertHead(v): Inserts a new node with value v at the head of the list.
insertTail(v): Inserts a new node with value v at the tail of the list.
print(): Traverses the list (head to tail), pushes each value into an array, returns the array.
*) It also has two default properties:
head: the current head of the list. Default null.
tail: the default tail of the list. Default null. Note that if the list is exactly one node long, the tail will equal the head!
*) Generally speaking, if you're doing the reversing in place, you'll need to figure out a way to "reverse" those one-way pointers.
___



[data_structures] [higher_order_functions] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Linked List
https://en.wikipedia.org/wiki/Linked_list
Is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure …
_________
_________
Linked List
https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm
Is a sequence of data structures, which are connected together via links. Linked List is a sequence of links which contains items. Each link contains a connection to a …
_________

*/
//Your code should go here:

