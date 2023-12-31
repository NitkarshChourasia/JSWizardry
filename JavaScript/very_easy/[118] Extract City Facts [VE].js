/*
####  Extract City Facts  ####

Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).


[Examples]

___
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
_____



[Notes]

Don't add a period at the end.


[language_fundamentals] [objects] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Working with Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the p …
_________
_________
Template Literals (template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals are string literals allowing embedded expressions.
_________
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________
_________
Destructuring Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________

*/
//Your code should go here:

function cityFacts(cityInfo) {
  return `${cityInfo.name} has a population of ${cityInfo.population} and is situated in ${cityInfo.continent}.`;
}


// function cityFactsSqBrackets(cityInfo) {
//   return `${cityInfo[cityInfo.name]} has a population of ${cityInfo[cityInfo.population]} and is situated in ${cityInfo[cityInfo.continent]}`;
// }

if (require.main == module) {
  console.log("####  Extract City Facts  ####\n")
  // Test cases.
  // console.log("Using dot notation.");
  console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }));

  console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
  }));


  // console.log("Using Square brackets.");
  // console.log(cityFactsSqBrackets({
  //   name: "Paris",
  //   population: "2,140,526",
  //   continent: "Europe"
  // }));

  // console.log(cityFactsSqBrackets({
  //   name: "Tokyo",
  //   population: "13,929,286",
  //   continent: "Asia"
  // }));

}


// 17-09-2023
// complete.