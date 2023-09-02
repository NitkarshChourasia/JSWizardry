/*
####  Learn Lodash (21): OrderBy, Write Your Own Version of Lodash's orderBy Sorting Function  ####

Write your own version of the Lodash _.oderBy function which allows you to sort an array or object in ascending or descending order with different criteria.


[Real-Life Example]

You work at a car dealership. Your boss would like the cars to be parked in the lot sorted by year so customers will see the newest ones first. You park the cars in descending order by year. He then wants to show the ones with the lowest mileage first, so after the cars are sorted by year you park them in ascending order according to mileage. So all the cars for 2021 are in the first row and the lowest mileage is at the front. Then the next row has all cars from 2020 with the lowest mileage first.
If he passed you this order as an orderBy function, he would write it like so:
___
orderBy(cars, ["year", "mileage], ["desc", "asc"])
_____



[Arguments]

___
*) collection ( Array | Object): The collection to iterate over. - in this case the unsorted parking lot.
*) iteratee The specific items to sort by. - each car you are checking.
*) order eg. "asc" or "desc" - the sort orders - either ascending or descending order.
___

If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for:
___
var users = [
  { "user": "fred",   "age": 48 },
  { "user": "barney", "age": 34 },
  { "user": "fred",   "age": 40 },
  { "user": "barney", "age": 36 }
]
_____

Sort by user in ascending order and by age in descending order.
___
orderBy(users, ["user", "age"], ["asc", "desc"]);
=> objects for [["barney", 36], ["barney", 34], ["fred", 48], ["fred", 40]]
_____



[Notes]

___
*) Please don't import lodash, your challenge is to write your own version. I can write complicated checking functions to prevent you from importing lodash, but that can cause problems in the tests. If you cheat, everyone will be able to see it and it will defeat the purpose of the challenge.
*) This entire series of challenges can be found here.
___



[arrays] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

