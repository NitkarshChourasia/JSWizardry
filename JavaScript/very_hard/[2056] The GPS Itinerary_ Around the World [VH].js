/*
####  The GPS Itinerary: Around the World  ####

In this challenge, use the haversine formula to calculate the distances between various cities and establish an itinerary for a series of cities to visit. You have to build an utility class GPS that supports a function itinerary.


[The utility class GPS]

The class GPS must have three static methods:
___
*) .decimal() transforms a DMS coordinate into a decimal coordinate: as parameters, it accepts three integers which are the degrees, the minutes and the seconds and a capital letter to represent the cardinal direction.
*) .radians() transforms a decimal coordinate into radians: as parameter, it accepts a decimal coordinate as a float number.
*) .distance() calculates the shortest distance (in kilometers) between two given cities using the haversine formula and a constant radius of the Earth equal to 6371km, rounding the result down to the nearest integer: as parameters, it accepts two full DMS string coordinates.
___

___
London: 51° 30' 30" N 0° 7' 32" W
Sidney: 33° 52' 4" S 151° 12' 26" E

GPS.decimal(51, 30, 30, "N") ➞ 51.50833333333333
GPS.decimal(0, 7, 32, "W") ➞ -0.12555555555555556
// London's decimal latitude and longitude.
// West coordinates are negatives.

GPS.decimal(33, 52, 4, "S") ➞ -33.867777777777775
GPS.decimal(151, 12, 26, "E") ➞ 151.2072222222222
// Sidney's decimal latitude and longitude.
// South coordinates are negatives.

GPS.radians(-0.12555555555555556) ➞ -0.002191357838615103
// London's longitude in radians

GPS.radians(151.2072222222222) ➞ 2.6390638805725146
// Sidney's longitude in radians.

GPS.distance('51° 30' 30" N 0° 7' 32" W', '33° 52' 4" S 151° 12' 26" E') ➞ 16993
// Shortest distance between London and Sidney (in kilometers).
_____



[The function itinerary]

Given a starting city start and an array of cities toVisit, implement a function that returns an array with two elements:
___
*) A sub-array containing the cities (the first one will always be the start city) to visit, in the order given by the shortest distance from the last visited city;
*) An integer being the total number of kilometers necessary to complete the travel.
___

Let's suppose that @Matt decides to see Moscow, Sidney, Buenos Aires and Los Angeles. He starts his travel from Kitchener and the nearest city is Los Angeles (3,403 km). From Los Angeles, he goes to Moscow (9,769 km). From Moscow, the nearest city is Buenos Aires (13,475 km). From Buenos Aires, Matt ends his travel in Sidney (11,801 km). The result with the itinerary and the total kilometers is:
___
[["Kitchener", "Los Angeles", "Moscow", "Buenos Aires", "Sidney"], 38448]
_____



[Examples]

___
itinerary("Naples", ["New York", "Johannesburg", "Beijing", "Quito"]) ➞ [["Naples", "New York", "Quito", "Johannesburg", "Beijing"], 35001]

itinerary("Tokyo", ["London", "Montevideo", "Jakarta", "Auckland"]) ➞ [["Tokyo", "Jakarta", "Auckland", "Montevideo", "London"], 34931]

itinerary("Rio de Janeiro", ["Naples", "New York", "Sidney", "Kitchener"]) ➞ [["Rio de Janeiro", "New York", "Kitchener", "Naples", "Sidney"], 31897]
_____



[Notes]

___
*) The coordinates of the cities are stored in an object literal cities in the Code tab, as well as the constant for the radius of the Earth (in this challenge, is 6371Km).
*) The given data will be always valid, without exceptions to handle. The format for full DMS coordinates will be always like 140° 1' 59" N 99° 59' 1 E" (no leading zeros or negative values, values separated by a space, capital letters for the four cardinal directions).
*) Do not round decimal coordinates or radians. Round distances down to the nearest integer.
*) The decimal (and radians) values of W (West) and S (South) coordinates are negatives.
*) Obviously, the distances are intented as the crow flies, hypotizing a flat surface.
*) Look at the Resources tab for a series of useful links about all the arguments of this challenge.
___



[classes] [data_structures] [geometry] [math] 



-------------------------------------------------------------------
[Resources]
_________
Haversine Formula
https://en.wikipedia.org/wiki/Haversine_formula
Determines the great-circle distance between two points on a sphere given their longitudes and latitudes. Important in navigation, it is a special case of a more genera …
_________
_________
Decimal Degrees
https://en.wikipedia.org/wiki/Decimal_degrees
Express latitude and longitude geographic coordinates as decimal fractions and are used in many geographic information systems (GIS), web mapping applications such as O …
_________
_________
Calculate Distance, Bearing and More between Latitude/Longitude Points
https://www.movable-type.co.uk/scripts/latlong.html
This page presents a variety of calculations for lati­tude/longi­tude points, with the formulas and code fragments for implementing them. All these formulas are for cal …
_________
_________
Distance Calculator
https://gps-coordinates.org/distance-between-coordinates.php
Calculates the distance between two gps coordinates. Enter the two gps coordinates in latitude and longitude format below, and our distance calculator will show you the …
_________
_________
Degrees to Radians Conversion Calculator
https://www.rapidtables.com/convert/number/degrees-to-radians.html
Enter angle in degrees and press the Convert button (e.g:30°, -60°).
_________

*/
//Your code should go here:

