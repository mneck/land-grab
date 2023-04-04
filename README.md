# Land Grab

## What is this?

Land Grab is a 2-player strategy game. Players take turns building settlements to get income to generate points. When a player attains 100 points, they win the game.

Both players can build farms and settlements on an island with features that are randomly generated at the start of the game.

Player 1 places a farm at the start of their turn to begin the game. Players alternate by building one farm or settlement per turn. Player 1, an industrialist, generates income from building mining/logging settlements near mountains or forests. Player 2 specializes in tourism and generates income by building resort settlements on land near water or mountains. Both players need to build farms to feed their settlements; a player cannot have more settlements than farms.

## Details

### The Map

The map is a 12x12 grid. The edges of the map are water tiles. The 11x11 border of the island is composed of either land (50% chance) or water (50% chance) tiles. The 2x2 interior of the island is composed of either forest (50% chance) or mountain (50% chance) tiles. The 4x4 tiles at the center of the map are either land (33% chance), mountain (33% chance), or land (34% chance) tiles. Even if in the very unlikely event that the 4x4 interior of the map is composed entirely of mountains and the 11x11 edges of the map are entirely composed of water, the players are still left with 36 tiles on which to build settlements and farms.

#### Map template

> `W = Water` >`L = Land` >`M = Mountain` >`F = Forest`

![Template of map](/assets/map_template.png)

#### An example of a map generated from the above template

![Layout of a typical map](/assets/map_example.png)

### Tile types

There are four types of tiles generated on the map: water, land, mountain, and forest. Each tile has two important properties affecting play: charm/industry and canBeBuiltOn. A tile's "charm" value gives adjacency bonuses to Player 2, while a tile's "industry" value gives adjaceny bonuses to Player 1. There are also resort, mining, and farm settlement tiles built by the players. Adjacency bonuses refer to the tiles to the immediate North, South, West, and East of a given tile. All player-built tiles must be built adjacent to or to the immediate Northwest, Southwest, Northeast, or Southeast of a farm or settlement that belongs to that player.

**Water** tiles cannot be built on and surround the playable area of the map. Each water tile adds 1 additional income to adjacent resort settlement tiles.

**Land** tiles can be build on and form the playable area in the middle 11x11 grid of the map.

**Mountain** tiles cannot be built on. They provide adjacent mining and resort settlements with 1 additional income per turn.

**Forest** tiles can be built on. After a player builds a settlement on a forest, the forest is changed into a land tile and loses its industry adjacency bonuses. They provide adjacent mining settlements with 1 additional income per turn.

**Farm** tiles are built by players and do not affect the income of adjacent tiles. They do not affect the income of a player or any adjacency bonuses (except when built on top of a forest, converting the forest to a land tile). A player cannot build more settlements than the number of farms they have on the map.

**Mining** settlement tiles are built by Player 1. They produce 1 base income and 1 additional income for each adjacent forest or mountain tile. For example, a mining settlement built on a land tile that has 3 adjacent mountains and 1 adjacent forest will provide Player 1 with 5 income per turn. A mining settlement that is adjacent to 2 land tiles and 2 water tiles will provide Player 1 with 1 income per turn. A mining settlement adjacent to a resort settlement will subtract 1 income from that resort settlement.

**Resort** settlement tiles are built by Player 2. They produce 1 base income and 1 additional income for each adjacent water or mountain tile. They lose 1 income for each adjacent mining settlement to a base of 0 income. For example, a resort settlement built on a land tile that has 3 adjacent water tiles will provide Player 1 with 4 income per turn. A resort settlement adjacent to 1 land tile and 3 mining settlements will yield 0 income per turn.

### Rules of play

Player 1 places their first farm at a place of their choosing. Player 2 follows. Players then alternate turns, each placing one farm or settlement per turn. Income is received at the beginning of each turn according to the number of and placement of settlements. A player with 2 settlements that each has 2 adjacency bonuses, for example, will receive 6 income at the beginning of their turn. When a player reaches an income of 100, they win the game.

### Technical Details

Assets are from kenney.nl and itch.io. The P5 library is used to generate the map and display assets. JavaScript is used to create and implement the game's logic.
