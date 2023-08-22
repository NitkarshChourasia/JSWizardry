/*
####  Dungeon Gold Farming  ####

In the role-playing game EdaQuest (no official affiliation with Edabit), a particular dungeon has a bunch of rooms designated by the grid. Each room in the dungeon is represented by an object with two properties:
___
*) m: The amount of damage done by the monster lurking in that room.
*) g: The amount of gold available for you to collect in that room.
___

You enter the dungeon, from any room at the edge of the dungeon, with a certain amount of health hp. During each turn, you:

Return this maximum gold. If you cannot obtain any gold from the dungeon (or if you cannot survive the dungeon), return 0.


[Examples]

___
dungeonCrawl([[{ g: 0, m: 3 }]], 6) ➞ 0

// You enter the one-room dungeon, but there is no gold.
// Fortunately, you survive. What a waste of time!
_____

___
dungeonCrawl([[{ g: 6, m: 2 }]], 5) ➞ 6

// You enter the one-room dungeon, grab your 6 gold, and
// leave with 6 gold and 5-2 = 3 health.
_____

___
dungeonCrawl([
  [{ g: 5 }, { g: 0 }, { g: 8 }],
  [{ g: 4, m: 5 }, { g: 7 }, { g: 7, m: 4 }],
  [{ g: 1 }, { g: 5, m: 4 }, { g: 0 }],
  [{ g: 1, m: 4 }, { g: 0 }, { g: 0 }]
], 10) ➞ 32

// The best path produces 32 gold.
_____

___
dungeonCrawl([
  [{ g: 5, m: 6 }, { g: 2, m: 1 }],
  [{ g: 4, m: 10 }, { g: 1, m: 1 }]
], 1) ➞ 0

// You can't survive any room in this dungeon with only 1 hp!
_____

___
dungeonCrawl([
  [{ g: 2 }, { g: 4, m: 3 }, { g: 7, m: 3 }],
  [{ g: 2 }, { g: 1, m: 1 }, { g: 1, m: 4 }],
  [{ g: 8 }, { g: 9, m: 4 }, { g: 5 }],
  [{ g: 1 }, { g: 3, m: 1 }, { g: 1 }]
], 5) ➞ 18

// Note that the maximum available gold in the dungeon is 44,
// but you cannot survive long enough to get all of that gold!
_____



[Notes]

Monsters vs Gold: If a monster kills you, it doesn't matter how much gold you've collected; You're dead! As such, even if adding that room's gold would increase your "best path" gold, don't add it! In other words, if your current "best path" is 20 gold, you're at 19 gold and 4 health, and this room is:
___
{
  m: 6,
  g:5
}
_____

then your "best path" should not be updated to 24 gold (you died before collecting that gold!).
Edge Rooms: To reiterate, you must enter the dungeon from one of the rooms at the edge of that dungeon. So if your dungeon is a 3x3 dungeon, for example, you could enter via any room other than the room at position (1, 1) (the "middle" room):
___
[
  [yes, yes, yes],
  [yes, no, yes],
  [yes, yes, yes]
]
_____

Health Potions: The dungeon crafters are cheap and there is no health restore potions. So once you lose health points, that's it!


[Updates:]

I realized (thanks to some awesome commenters!) that my old code makes some mistakes. I've (hopefully) updated, which unfortunately means some of the old solutions no longer work. Here's some hints for those who were making the same mistake I was:
___
*) You do not have to hit every cell, and can "stop" at any time.
*) Namely, if the next move would kill you and you have a really high amount of coin, stop there!
___



[arrays] [data_structures] [games] [logic] [recursion] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

