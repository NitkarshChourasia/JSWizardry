/*
####  Pokémon Specials Contest  ####

You are given data containing information for the first 100 Pokémon as well as special effectiveness relationships. Use this data to define a function that takes two Pokémon numbers and calculates which Pokémon wins based on their types.


[How to calculate?]

___
*) Given two Pokémon, say #3 (Venusaur) and #6 (Charizard), use the given data to obtain their respective types—(grass, poison), (fire, flying).
*) We'll start with Venusaur. His first type is grass. For each of Venusaur's opponent's types, use the data to obtain grasss effectiveness. The grass is 0.5x (not very) effective against both fire and flying. Multiply these together: 0.5 * 0.5 = 0.25. So 'grass' is 0.25 effective against Charizard. You'll repeat this with Venusaur's second type, poison, and Venusar will receive two scores for his two types: (0.25, 1.0). Average these together to get Venusaur's final score: 0.625. When Pokémon only have one type they will only have one score and no averaging is necessary.
*) When you've done this for both Pokémon you'll end up with two scores—one for each Pokémon. Return the number of the Pokémon with the higher score or return -1 for a tie.
___


___
pkSpecialWinner(33, 28) ➞ 28

pkSpecialWinner(77, 52) ➞ -1

pkSpecialWinner(25, 44) ➞ 44

pkSpecialWinner(57, 51) ➞ -1

pkSpecialWinner(98, 34) ➞ 98
_____



[Notes]

___
*) A type is doubled when it is very effective and halved for not very effective uses. For combinations, such as fire against a bug and grass type Pokémon, the effectiveness scores are multiplied. So fire would be four times as effective against such an opponent. See this for more information.
Note that when a Pokémon has two types they will have two effectiveness scores and this function requires these to be averaged. Don't mix up the multiplications and averages.
___

Thanks to the providers of the data:
___
*) https://www.kaggle.com/dizzypanda/gen-1-pokemon
*) https://bulbapedia.bulbagarden.net/wiki/Type
___



[Bonus Challenge]

Which Pokémon beats the most of its opponents in this dataset? See my answer in the comments.


[games] [loops] [math] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Types
https://bulbapedia.bulbagarden.net/wiki/Type
Types (Japanese: タイプ Type) are properties for Pokémon and their moves. As of Generation VI, there are 18 types, as listed to the right. Most of these were introduced du …
_________

*/
//Your code should go here:

