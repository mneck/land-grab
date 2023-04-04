class Tiles {
  constructor(type, canBeBuiltOn, playerBuilt, charmValue, industryValue) {
    this.type = type;
    this.canBeBuiltOn = canBeBuiltOn;
    this.playerBuilt = playerBuilt;
    this.industryValue = industryValue;
    this.charmValue = charmValue;
  }

  landTile() {
    const land = "land";
    this.type = land;
    this.canBeBuiltOn = true;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }

  waterTile() {
    const water = "water";
    this.type = water;
    this.canBeBuiltOn = false;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    // adds 1 charm to adjacent tiles
    return this.type;
  }

  mountainTile() {
    const mountain = "mountain";
    this.type = mountain;
    this.canBeBuiltOn = false;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    // adds 1 industry & 1 charm to adjacent tiles
    return this.type;
  }

  forestTile() {
    const forest = "forest";
    this.type = forest;
    this.canBeBuiltOn = true;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    // adds 1 industry to adjacent tiles
    return this.type;
  }

  farmTile() {
    const farm = "farm";
    this.type = farm;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }

  resortTile() {
    const resort = "resort";
    this.type = resort;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }

  mineTile() {
    const mine = "mine";
    this.type = mine;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    // subtracts 1 charm from adjacent tiles
    return this.type;
  }
}
