class Tiles {
  constructor(type, canBeBuiltOn, playerBuilt, charmValue, industryValue) {
    this.type = type;
    this.canBeBuiltOn = canBeBuiltOn;
    this.playerBuilt = playerBuilt;
    this.industryValue = industryValue;
    this.charmValue = charmValue;
  }

  land() {
    const land = "land";
    this.type = land;
    this.canBeBuiltOn = true;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }

  water() {
    const water = "water";
    this.type = water;
    this.canBeBuiltOn = false;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    // adds 1 charm to adjacent tiles
    return this.type;
  }

  mountain() {
    const mountain = "mountain";
    this.type = mountain;
    this.canBeBuiltOn = false;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    // adds 1 industry & 1 charm to adjacent tiles
    return this.type;
  }

  forest() {
    const forest = "forest";
    this.type = forest;
    this.canBeBuiltOn = true;
    this.playerBuilt = false;
    this.charmValue = 0;
    this.industryValue = 0;
    // adds 1 industry to adjacent tiles
    return this.type;
  }

  player1Farm() {
    const farm1 = "farm1";
    this.type = farm1;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }

  player2Farm() {
    const farm2 = "farm2";
    this.type = farm2;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }

  mine() {
    const mine = "mine";
    this.type = mine;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    // subtracts 1 charm from adjacent tiles
    return this.type;
  }

  resort() {
    const resort = "resort";
    this.type = resort;
    this.canBeBuiltOn = false;
    this.playerBuilt = true;
    this.charmValue = 0;
    this.industryValue = 0;
    return this.type;
  }
}
