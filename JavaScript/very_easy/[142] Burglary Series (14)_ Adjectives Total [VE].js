/*
####  Burglary Series (14): Adjectives Total  ####

You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.


[Examples]

___
totalAmountAdjectives({ a: "moron" }) ➞ 1

totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4
_____



[Notes]

The list will never be empty (no empty object).


[arrays] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________

*/
//Your code should go here:


"use strict";


// Method 1 : Using Object.values() and Array.prototype.length.
function totalAmountAdjectives(obj) {
    let arr = Object.values(obj);
    return arr.length;
}


// Method 2 : Directly returned Object.keys() and Array.prototype.length.
function totalAmountAdjectives_directReturn(obj) {
    return Object.keys(obj).length;
}

if (require.main == module) {
    // Title.
    console.log("#### Burglary Series : Adjectives Total ####");
    // Test cases.
    // Method 1 : Using Object.values() and Array.prototype.length.
    console.log("Method 1 : Using Object.values() and Array.prototype.length.")
    console.log(totalAmountAdjectives({ a: "moron" })); // 1
    console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); // 3
    console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); // 4

    // Method 2 : Directly returned Object.keys() and Array.prototype.length.
    console.log("Method 2 : Directly returned Object.keys() and Array.prototype.length.")
    console.log(totalAmountAdjectives_directReturn({ a: "moron" })); // 1
    console.log(totalAmountAdjectives_directReturn({ a: "idiot", b: "idiot", c: "idiot" })); // 3
    console.log(totalAmountAdjectives_directReturn({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); // 4
}

// 2-October-2023
// complete.