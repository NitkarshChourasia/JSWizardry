/*
####  Coffee Shop  ####

Write a class called CoffeeShop, which has three instance variables:

and seven methods:

IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.


[Examples]

___
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
_____



[Notes]

Round off due amount up to two decimal places.


[arrays] [classes] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Classes
https://www.w3schools.com/js/js_classes.asp
A brief description of classes in JavaScript with examples on how to use them. ECMAScript 2015, also known as ES6, introduced JavaScript Classes. JavaScript Classes are …
_________

*/
//Your code should go here:

