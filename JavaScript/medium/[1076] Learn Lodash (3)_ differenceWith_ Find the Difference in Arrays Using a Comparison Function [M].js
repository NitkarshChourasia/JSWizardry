/*
####  Learn Lodash (3): _.differenceWith, Find the Difference in Arrays Using a Comparison Function  ####

According to the lodash documentation, This method is like _.difference except it accepts a comparator which is invoked to compare elements of the array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
Using a car dealership example, if you have two parking lots and want to see which cars are different this function enables you to check each car in one lot against each car in the other using a comparison function which checks two values and returns true or false if they are equal or not. So you could check engine size and compare to see which cars are different according to the size of their engines. If lot one has a car that has a v6 engine and lot two doesn't have any cars that have v6 engines this would be the difference and the function would return the car with the v6 engine.
There is only one first array that is used to look for the difference but there can be many values arrays that are used to check against.


[Examples]

___
differenceWith([
  { make: "mazda", engine: "v8" },   // This is the first array we compare with.
  { make: "toyota",  engine: "v6" },
],
  [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
  (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
) ➞ [
  { make: "toyota",  engine: "v6" },  // This is in the first array but none of the others.
]
_____



[Notes]

___
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
___



[arrays] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
_.differenceWith(array, [values], [comparator])
https://lodash.com/docs/4.17.15#differenceWith
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
_________
_________
Comparing Two Arrays Returning Differences
https://www.codegrepper.com/code-examples/javascript/comparing+two+arrays+in+javascript+returning+differences
Get code examples like "comparing two arrays in javascript returning differences" instantly right from your google search results with the Grepper Chrome Extension.
_________
_________
JSON.stringify()
https://www.w3schools.com/js/js_json_stringify.asp#:~:text=Stringify%20a%20JavaScript%20Object&text=Use%20the%20JavaScript%20function%20JSON,string%20following%20the%20JSON%20notation.
If you send functions using JSON, the functions will lose their scope, and the receiver  would have to use eval() to convert them back into functions.
_________

*/
//Your code should go here:

