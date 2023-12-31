/*
####  Triangle and Parallelogram Area Finder  ####

Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.


[Examples]

___
areaShape(2, 3, "triangle") ➞ 3

areaShape(8, 6, "parallelogram") ➞ 48

areaShape(2.9, 1.3, "parallelogram") ➞ 3.77
_____



[Notes]

___
*) Area of a triangle is 0.5 * b * h
*) Area of a parallelogram is b * h
*) Assume triangle and parallelogram are the only inputs for shape.
___



[algorithms] [conditions] [geometry] [math] 



-------------------------------------------------------------------
[Resources]
_________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
Area of Plane Shapes
https://www.mathsisfun.com/area.html
Area is the size of a surface! Learn more about Area, or try the Area Calculator.
_________

*/
//Your code should go here:

function areaShapeTernary(base, height, shape) {
    return shape === "triangle" ? 0.5 * base * height : base * height;
}

function areaShape(base, height, shape) {
    triAreaFormula = 0.5 * base * height;
    parralelogramAreaFormula = base * height;
    ifShape = { triangle: triAreaFormula, parallelogram: parralelogramAreaFormula };



    // I want to add something like, 
    // If shape in ifShape.keys(): then return ifShape[shape]
    // else return no valid shape input.
    // Something like this I wanted to input.


    return ifShape[shape];
}

if (require.main == module) {
    // Test cases.

    console.log(areaShapeTernary(2, 3, "triangle"));
    console.log(areaShapeTernary(8, 6, "parallelogram"));
    console.log(areaShapeTernary(2.9, 1.3, "parallelogram"));
}

// 08-09-2023
// complete.