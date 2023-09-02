/*
####  Epidemiology: the Chi-Squared Test  ####

The Edabit Medical Industries are developing a new drug, the Edabitin™, which will (hopefully) increase the programming skills of patients. Various tests are carried out on different programmers: for a week some are given the Edabitin™, while others are supplied simple generic Tutorial powder. After a week, the number of programmers able to solve ten exercises of an average level in half an hour and the number of those that instead take two hours is recorded for both control groups.
You are asked to establish if Edabitin™ has a statistical influence over performances with a Chi-Squared Test.
Look at the table below:

The first thing to do is to calculate the total population of programmers involved in the test, so you have to sum all the four cells' values. Then you must calculate the totals of the rows: the Edabitin™ total treatments and the Tutorial total treatments. Calculate the totals also for the columns: normal programmers that spent 2 hours solving the exercises and improved programmers that spent just 1/2 hour. The new table now is:

The value in the lower-right corner is the overall total. Each cell now has to be transformed into the corresponding expected result: multiply the row total for the column total (crossing them), and divide the result by the overall total. The table now is:

Now for each cell you have to subtract the obtained expected value from the original cell value, square the result, and divide it by the expected value: The table now is:

Finally, you can sum all cell values and get the Chi-Squared value (χ²) rounded to the nearest tenth:
χ² = 1.099 + 0.918 + 1.136 + 0.949 = 4.1
To establish if the effect of Edabitin is statistically significant, you must confront the Chi-Squared value with two different alpha values (or levels of confidence): alpha1 and alpha5.
If the Chi-Squared value is greater than 6.635 (alpha1), than there is the 1% of possibilities that the Edabitin™ effect is a false positive, but the 99% of possibilities that it actually works; if it is lower than alpha1 but greater than 3.841 (alpha5), then the possibilities of an effective improvement are equals to the 95% (with the 5% of false positives possibilities). If the Chi-Squared value is lower than alpha5 than the effect of Edabitin™ is not statistically relevant for the programming performances.
For the example table above, the Chi-Squared value is lower than alpha1 and greater than alpha5, so we can assert that: improvements in programmers treated with Edabitin™ are caused by 95% by the drug effectiveness.
Given an object data being the table containing the results to analyze ("E" is the Edabitin's row, "T" is the Tutorial's row, with the two columns being the "2 hours passed" and "1/2 hour passed" registered cases, as in the tables above) implement a function that returns an array containing two elements:
___
*) The Chi-Squared value rounded to the nearest tenth.
*) A string with the final analysis being:
"Edabitin effectiveness = 99%" if the Chi-Squared value is greater than alpha1.
"Edabitin effectiveness = 95%" if the Chi-Squared value is lower than alpha1 and greater than alpha5.
"Edabitin is ininfluent" if the Chi-Squared value is lower than alpha5.
___



[Examples]

___
chiSquaredTest({"E": [207, 282], "T": [231, 242]}) ➞ [4.1, "Edabitin effectiveness = 95%"]

chiSquaredTest({"E": [100, 50], "T": [100, 20]}) ➞ [9.6, "Edabitin effectiveness = 99%"]

chiSquaredTest({"E": [90, 50], "T": [80, 40]}) ➞ [0.2, "Edabitin is ininfluent"]
_____



[Notes]

___
*) Round just the final result to the nearest tenth, values of the example are actually rounded for readability scopes.
*) Besides epidemiology, the Chi-Squared Test is used also in agriculture, surveys, economics and in cases where "categorical" data is implied instead of "numerical" data. This test is used for medium-to-large recorded cases: for smaller numbers, other tests are used. The alpha1 and alpha5 values are constants related to this specific exercise's tables with two rows and two columns (1 degree of freedom results), so they change for different sized tables. For more info look at the specific links in the Resources tab.
*) No programmers were harmed in the making of this challenge!
___



[algorithms] [data_structures] [math] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Chi-squared test
https://en.wikipedia.org/wiki/Chi-squared_test
Any statistical hypothesis test where the sampling distribution of the test statistic is a chi-squared distribution when the null hypothesis is true. Without other qua …
_________
_________
Chi-Square Test
https://www.mathsisfun.com/data/chi-square-test.html
You research two groups and put them in categories single, married or divorced. The numbers are definitely different, but ... Is that just random chance? Or have you fo …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

