/*
####  Kinetic Energy  ####

Kinetic energy can be calculated with the following formula:

___
*) m is mass in kg
*) v is velocity in m/s
*) KE is kinetic energy in J
___

Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.


[Examples]

___
kineticEnergy(60, 3) ➞ 270

kineticEnergy(45, 10) ➞ 2250

kineticEnergy(63.5, 7.35) ➞ 1715
_____



[Notes]

Expect only positive numbers for inputs.


[math] [numbers] [physics] 



-------------------------------------------------------------------
[Resources]
_________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________
_________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
_________
_________
How to Calculate Kinetic Energy
https://www.wikihow.com/Calculate-Kinetic-Energy
There are two basic forms of energy: potential and kinetic energy. Potential energy is the energy an object has relative to the position of another object.
_________
_________
Kinetic Energy Calculator
https://www.calculatorsoup.com/calculators/physics/kinetic.php
This calculator will find the missing variable in the physics equation for Kinetic Energy of a rigid body, when two of the variables are known.
_________
_________
toFixed() Method
https://www.w3schools.com/jsref/jsref_tofixed.asp
Converts a number into a string, rounding to a specified number of decimals. Note: if the desired number of decimals are higher than the actual number, zeros are added …
_________

*/
//Your code should go here:

function kineticEnergy(mass, velocity) {
    return Math.round(0.5 * mass * Math.pow(velocity, 2));
}

if (require.main == module) {
    // Test cases.

    console.log(kineticEnergy(60, 3));
    console.log(kineticEnergy(45, 10));
    console.log(kineticEnergy(63.5, 7.35));
}

// 08-09-2023
// complete.