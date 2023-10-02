/*
####  Flip the Boolean  ####

Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
Create a function that returns the opposite of the given boolean, as a number.


[Examples]

___
flipBool(true) ➞ 0

flipBool(false) ➞ 1

flipBool(1) ➞ 0

flipBool(0) ➞ 1
_____



[Notes]

N/A


[conditions] [language_fundamentals] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Logical NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used wit …
_________
_________
Number() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
Creates a Number object.
_________
_________
Logical Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
Typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the speci …
_________
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute …
_________
_________
xkcd: Types
https://xkcd.com/1537/
Jokes on JavaScript typing. Hope people may want to see a bit of humor.
_________

*/
//Your code should go here:

function flipBoolTernary(bool) {
    return bool ? 0 : 1;
}

function flipBoolCasting(boolFlag) {
    return Number(!boolFlag);
}

function flipBoolIfElse(bool) {
    if (bool === true || bool === 1) {
        return 0;
    }
    return 1;
}

if (require.main == module) {
    console.log(flipBoolTernary(true));
    console.log(flipBoolTernary(false));
    console.log(flipBoolTernary(1));
    console.log(flipBoolTernary(0));
    console.log(flipBoolTernary(3));

    console.log();

    console.log(flipBoolCasting(true));
    console.log(flipBoolCasting(false));
    console.log(flipBoolCasting(1));
    console.log(flipBoolCasting(0));
    console.log(flipBoolTernary(3));

    console.log();

    console.log(flipBoolIfElse(true));
    console.log(flipBoolIfElse(false));
    console.log(flipBoolIfElse(1));
    console.log(flipBoolIfElse(0));
    console.log(flipBoolTernary(3));


}


// 08-09-2023
// complete.