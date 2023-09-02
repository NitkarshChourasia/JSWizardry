/*
####  N-ary Tree Height  ####

A Tree is a special type of data structure in programming where each element (called a "node") may contain a reference to one or more child elements (again, "nodes"). The maximum number of children that a single node points to may be indicated by the phrase "n-ary tree", where n is that maximum number. Confused? Let's look at some examples, starting with a 1-ary tree.

If the maximum number of child elements each node can 'point' to is 1, we call this a 1-ary tree:
___
NodeA ---> NodeB ---> NodeC --> NodeD
_____

In other words, NodeA has a reference to its child element NodeB, and NodeB has a its child element NodeC, and so on. Because each element has at most 1 and only 1 child, this is a 1-ary tree (also known as a linked list).

If the maximum number of child elements each node can 'point' to is 2, we call this a 2-ary tree, or a binary tree (from Latin bis, meaning "two" or "twice"). Here's a quick example:
___
     A
   /  \
  B    C
 /    / \
D    E   F
     \
      G
_____

Remember that the n term is the maximum number of children for each node; node B and E only have 1 child, and nodes D, F, and G have 0 children.


[Navigating an n-ary tree.]

When given an n-ary tree, you're normally given the root node (A in the case of my binary tree above). The only way to access nodes other than this root would be to recursively "ask" for those nodes:
___
Given: root(A), we wanna find E's value:
1. Get A's child C
2. We're now on node C.
3. Get C's child E.
4. We're now on node E.
_____

In other words, given root node A above, we cannot simply jump directly to node E. Instead, we've gotta jump down from grandparent to parent to child, and so on, until we reach our desired node.



[Your Goal]

Given an n-ary tree, return the maximum height (or put more simply, just the height!) of the tree. For my binary tree above, you'd want to return 4. Think of it this way: what's the longest path you could follow, from parent to child to grandchild and so on, without ever going back "up" the tree?


[Examples]

___
In:
     A
   /  \
  B    C
 /    / \
D    E   F
     \
      G 
Out: 4 (A,C,E,G)

In:    E --> D --> A --> B --> I --> T
Out: 6 (E,D,A,B,I,T)

In:   
    A
  / | \
 B  C  D
/       \
E        H
\
 F
/
G 
Out: 5 (A,B,E,F,G)
_____



[Notes and Suggestions]

___
*) For anyone wondering, the trees are not necessarily either balanced or ordered.
*) Similarly, the values of each node are trivial for this exercise. They're really only used so that I can construct the initial trees for you.
*) You are only required to return the maximum height. The sequences of nodes included in the examples are for illustrative purposes only!
*) As the tag for this exercise indicates, one of the "usual" solutions for this exercise is a recursive one. If you really wanna impressive everyone, there is an iterative solution too!
*) As usual, please point out any bugs in the tests (or suggest new ones!).
*) There are specific names for other "levels" of n:
1: unary tree
3: ternary tree
4: quadtree
9: nonary tree
🎄: Christmas tree
___



[data_structures] [recursion] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

