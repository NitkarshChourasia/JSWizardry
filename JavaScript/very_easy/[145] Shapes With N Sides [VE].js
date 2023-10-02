/*
####  Shapes With N Sides  ####

Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.



[Examples]

___
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"
_____



[Notes]

___
*) There won't be any tests with a number below 1 or greater than 10.
*) Return the output in lowercase.
*) The challenge is intended to be completed without conditionals (it would take too long)!
___



[arrays] [geometry] [math] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Switch Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow …
_________
_________
Objects
https://www.w3schools.com/js/js_objects.asp
In real life, a car is an object. A car has properties like weight and color, and methods like start and stop...
_________
_________
if-else Statement
https://www.geeksforgeeks.org/else-statement-javascript/
Decision Making in programming is similar to decision making in real life. In programming also we face some situations where we want a certain block of code to be execu …
_________
_________
Indexed Collections
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
This chapter introduces collections of data which are ordered by an index value. This includes arrays and array-like constructs such as Array objects and TypedArray obj …
_________

*/
//Your code should go here:

// Method 1: Using an object.
function nSidedShape(n) {
    shapes = { 1: "circle", 2: "semi-circle", 3: "triangle", 4: "square", 5: "pentagon", 6: "hexagon", 7: "heptagon", 8: "octagon", 9: "nonagon", 10: "decagon" };

    return shapes[n];
}

// Method 2: Using an array.
function nSidedShape(n) {
    return ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"][n - 1];
}

if (require.main == module) {
    // Title.
    console.log("####  Shapes With N Sides  ####");
    // Test cases.
    console.log(nSidedShape(3)); // "triangle"
    console.log(nSidedShape(1)); // "circle"
    console.log(nSidedShape(9)); // "nonagon"

    // End of script.
}

// 2-October-2023
// complete.