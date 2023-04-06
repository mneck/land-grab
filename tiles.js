let tiles = {
  land: {
    type: "land",
    canBeBuiltOn: true,
    playerBuilt: false,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 0,
    x: 0,
    y: 0,
    objMethod: function (event) {
      console.log(event);
      this.type;
    },
  },
  water: {
    type: "water",
    canBeBuiltOn: false,
    playerBuilt: false,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 0,
    x: 0,
    y: 0,
    // adds 1 charm to adjacent tiles
  },
  mountain: {
    type: "mountain",
    canBeBuiltOn: false,
    playerBuilt: false,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 0,
    x: 0,
    y: 0,
    // adds 1 charm & 1 industry to adjacent tiles
  },
  forest: {
    type: "forest",
    canBeBuiltOn: true,
    playerBuilt: false,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 0,
    x: 0,
    y: 0,
    // adds 1 industry to adjacent tiles
  },
  player1Farm: {
    type: "farm1",
    canBeBuiltOn: false,
    playerBuilt: true,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 0,
    x: 0,
    y: 0,
  },
  player2Farm: {
    type: "farm2",
    canBeBuiltOn: false,
    playerBuilt: true,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 0,
    x: 0,
    y: 0,
  },
  mine: {
    type: "mine",
    canBeBuiltOn: false,
    playerBuilt: true,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 1,
    x: 0,
    y: 0,
  },
  resort: {
    type: "resort",
    canBeBuiltOn: false,
    playerBuilt: true,
    charmValue: 0,
    industryValue: 0,
    incomeGenerated: 1,
    x: 0,
    y: 0,
  },
};
