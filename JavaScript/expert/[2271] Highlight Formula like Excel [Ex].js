/*
####  Highlight Formula like Excel  ####

You need to highlight a typed excel formula for your website, to do this u need to create a function named "hightlightFormula".


[Explanations :]

___
*) hightlightFormula have only one string as parameter with simple text inside.
*) hightlightFormula return a html string created from first parameter string.
*) A formula should begin with "=" or there is no colors.
*) Excel add colors on each cell names and same colors to same ranged
*) An excel cell name can look like this : A1, $A1,$A$1,A$1
*) An excel cell name can be ranged with this : A1:A1 or A1:A3
*) An excel cell row syntax is : $1:$ or 1:3
*) An excel cell col syntax is: $A:$B or A:B
*) As exemple :
___

___
"=A1;A1:$A$1" <= A1 and A1:$A$1 should have same color.
_____

___
*) A cell name can have one or multiple signs (+ and -) without syntax error. Exemple :
___

___
''+++---A1" or "-A1" or "+A1" 
_____

___
*) Each new detected cells should have a new color (colors are on notes), when all color was used, we start again from first color.
*) Cell name separator is ";" .
*) To Avoid syntax error about number, they should have only a sign with a cellname and not a separator (execpt if number is first argument of formula or if number is in a function). Exemple :
___

___
=A1+12+A12
=12;A1+A12+1+B12
=SUM(A1;2)+A2
_____

___
*) Formula function syntax is "MYFUNCTION(param1;param2)" and should count as syntax error without parameters
*) Formula string syntax is "exemple" (quotes included), to avoid syntax error a string can placed only in function as parameter. Exemple :
___

___
SUM(1;"5")
_____

___
*) If formula's cell name, sign, separator or function syntax screwed up, last cells from error keep colors but nexts don't get any color, exemple :
___

___
"=A1;$B$;A2" <= '=<span style="color:#326ac7">A1</span>;$B$;A2'
"=A1;BBBBB;A2" <= '=<span style="color:#326ac7">A1</span>;BBBBB;A2'
"=A1+/B1;A2" <= '=<span style="color:#326ac7">A1</span>+/B1;A2'
"=A1;;B1;A2" <= '=<span style="color:#326ac7">A1</span>;;B1;A2'
"=A1;SUM();A2" <= '=<span style="color:#326ac7">A1</span>;SUM();A2'
_____



[Examples]

___
highLightFormula("=A1+1,2+A2") ➞ '=<span style="color:#326ac7">A1</span>+1,2+<span style="color:#c0353e">A2</span>'

highLightFormula("=$A1+($A$2+A3+A4)+IF(A5>=A6;A7)+A8") ➞ '=<span style="color:#326ac7">$A1</span>+(<span style="color:#c0353e">$A$2</span>+<span style="color:#8157b7">A3</span>+<span style="color:#007c20">A4</span>)+IF(<span style="color:#b03e84">A5</span>>=<span style="color:#b64900">A6</span>;<span style="color:#267392">A7</span>)+<span style="color:#326ac7">A8</span>'

highLightFormula("=$A1+A1+$A$1+/A2") ➞ '=<span style="color:#326ac7">$A1</span>+<span style="color:#326ac7">A1</span>+<span style="color:#326ac7">$A$1</span>+/A2'
_____



[Notes]

___
*) The only allowed signs syntax is : "+" ; "-" ; "+-" ; "-+" ; "/" ; "/+" ; "/-" ; "+" ; "-" ; "<" ; ">" ; "<=" ; ">=" ; "<>"
*) Other allowed symbols are : ";" ; "(" ; ")" ; ":" ; "=" (All others are syntax error)
*) Sign <> don't do syntax error (it seems : not equal)
*) Cells colors are : '#326ac7', '#c0353e', '#8157b7', '#007c20', '#b03e84', '#b64900', '#267392' (in same order)
*) Colored html span should be like this: <span style="color:{rightColor}">{rightCellName}</span>
*) The final result (Error like #VALUE! etc..) of formula is not important only hightlighting is.
*) Parenthesis color will be ignored in this challenge.
*) Letters case isn't important.
___



[conditions] [formatting] [loops] [regex] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

