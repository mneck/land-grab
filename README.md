### Land Grab

#### What is this?

Land Grab is a simple strategy game where two players take turns building settlements to get income and generate coins. When a player attains 100 coins, they win the game.

Both players can build farms and settlements on an island with features that are randomly generated at the start of the game. The middle of the island is obscured by fog, which disappears as players build settlements and farms near the edge of the fog.

Players alternate by building one farm or settlement per turn. Player 1, an industrialist, generates additional income from building mining and logging settlements near mountains and forests. Player 2 specializes in tourism and gains more income by building resort settlements on land near water and mountains. Both players need to build farms to feed their settlements; a player cannot have more towns than farms after placing their initial settlement.

#### Details

##### The Map

The map is a 12x12 grid. The edges of the map are water tiles. The 11x11 grid composing the island has edges that are randomly either land (66% chance) or water (33% chance) tiles. The 2x2 interior of the island is composed of either forest (50% chance) or mountain (50% chance) tiles. The 4x4 edge tiles of the map are either land (33% chance), mountain (33% chance), or land tiles. Even if the 4x4 interior of the map and the 11x11 exterior of the map is entirely composed of mountains or water, respectively, the players are still left with 36 tiles on which to build settlements and farms.

Map template:

//Template image here

Typical map layout

//Typical map image here


>`W = Water`
>`L = Land`
>`M = Mountain`
>`F = Forest`
>` `

`W W W W W W W W W W W W`
`W L L L W W L W L W L W`
`W L L L L L L L L L L W`
`W W L L L L L L L L L W`
`W L L L M L F M L L W W`
`W L L L F M L M L L L W`
`W W L L M F M L L L L W`
`W L L L M L M M L L W W`
`W W L L L L L L L L L W`
`W W L L L L L L L L W W`
`W L W L L L L W L L L W`
`W W W W W W W W W W W W`

//Rules on each tile here

//Rules on play here

#### Technical Details

Assets are from kenney.nl. The P5 is used to create the map. JavaScript's object-oriented programming tools are used to create the game's logic.