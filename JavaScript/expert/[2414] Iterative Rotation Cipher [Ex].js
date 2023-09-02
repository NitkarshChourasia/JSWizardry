/*
####  Iterative Rotation Cipher  ####

In Iterative Rotation Cipher encoding is done by performing a series of character and substring rotations on a string input.
Create a function that takes two arguments; a positive integer and a string and returns a coded message.
___
message = `If you wish to make an apple pie from scratch, you must first invent the universe.`

iterativeCiph(10, message)➞ `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet'
_____

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
Step #1: Remove all spaces from the message.
___
`Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventtheuniverse.`
_____

Step #2: Shift the order of string characters to the right by 10.
___
`euniverse.Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventth`
_____

Step #3: Place the spaces back in their original positions.
___
`eu niv erse .I fyou wi shtom ake anap plepiefr oms crat ch,yo umustf irs tinventth`
_____

Step #4: Shift the order of characters for each space-separated substring to the right by 10:
___
`eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt`
_____

Repeat all steps 9 more times before returning the string with 10 prepended.
___
encodedMessage = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`
_____

See the examples below for more understanding:


[Examples]

___
iterativeCiph(12, "Oh, Fortuna, you capricious sprite!")➞ "12 ory ,auruiec i,i OtacsuF!ht orpsnpo"

iterativeCiph(6, "Time is an illusion. Lunchtime doubly so.") ➞ "6 im.T ei no .lLnicsan iluushted imouys blo"

iterativeCiph(22, "There is nothing more atrociously cruel than an adored child.") ➞ "22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa"
_____



[Notes]

Want to decipher the encoded code ? Checkout this challenge !!


[cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
toString() Method
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Convert a number to a string.
_________

*/
//Your code should go here:

