class Game {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
    this.randomizer = this.randomNumbersArray();
    this.player1 = new Player1();
    this.player2 = new Player2();
    this.tile = tiles;
    // this.gridArray = this.gridArray();
  }

  preload() {
    this.waterImage = loadImage("./assets/1water_tile.png");
    this.landImage = loadImage("./assets/2land_tile.png");
    this.mountainImage = loadImage("./assets/3mountain_tile.png");
    this.forestImage = loadImage("./assets/4forest_tile.png");
    this.mineImage = loadImage("./assets/5mine_tile.png");
    this.resortImage = loadImage("./assets/6resort_tile.png");
    this.player1FarmImage = loadImage("./assets/7player1_farm.png");
    this.player2FarmImage = loadImage("./assets/8player2_farm.png");
  }

  gridArray() {
    function landWater() {
      let r = Math.random();
      if (r < 0.5) {
        return this.tile.water;
      } else {
        return this.tile.land;
      }
    }

    function mountainLandForest() {
      let r = Math.random();
      if (r < 0.4) {
        return this.tile.land;
      } else if (r < 0.8) {
        return this.tile.forest;
      } else {
        return this.tile.mountain;
      }
    }

    function mountainForest() {
      let r = Math.random();
      if (r < 0.5) {
        return this.tile.mountain;
      } else {
        return this.tile.forest;
      }
    }

    let grid = [];

    // row 0: elements 0-11
    for (let i = 0; i <= 11; i++) {
      grid.push(this.tile.water);
    }

    // row 1: elements 12-23
    grid.push(this.tile.water);
    for (let i = 0; i <= 9; i++) {
      grid.push(landWater());
    }
    grid.push(this.tile.water);

    // row 2: elements 24-35
    grid.push(this.tile.water);
    grid.push(landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(landWater());
    grid.push(this.tile.water);

    // row 3: elements 36-47
    grid.push(this.tile.water);
    grid.push(landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(landWater());
    grid.push(this.tile.water);

    // row 4: elements 48-59
    grid.push(this.tile.water);
    grid.push(landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    for (let i = 0; i <= 3; i++) {
      grid.push(mountainLandForest());
    }
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(landWater());
    grid.push(this.tile.water);

    // row 5: elements 60-71
    grid.push(this.tile.water);
    grid.push(landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(mountainLandForest());
    grid.push(mountainForest());
    grid.push(mountainForest());
    grid.push(mountainLandForest());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(landWater());
    grid.push(this.tile.land);

    // row 6: elements 72-83
    grid.push(this.tile.water);
    grid.push(landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(mountainLandForest());
    grid.push(mountainForest());
    grid.push(mountainForest());
    grid.push(mountainLandForest());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(landWater());
    grid.push(this.tile.land);

    // row 7: elements 84-95
    grid.push(this.tile.water);
    grid.push(landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    for (let i = 0; i <= 3; i++) {
      grid.push(mountainLandForest());
    }
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(landWater());
    grid.push(this.tile.water);

    // row 8: elements 96-107
    grid.push(this.tile.water);
    grid.push(landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(landWater());
    grid.push(this.tile.water);

    // row 9: elements 108-119
    grid.push(this.tile.water);
    grid.push(landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(landWater());
    grid.push(this.tile.water);

    // row 10: elements 120-131
    grid.push(this.tile.water);
    for (let i = 0; i <= 9; i++) {
      grid.push(landWater());
    }
    grid.push(this.tile.water);

    // row 11: elements 132-144
    for (let i = 0; i <= 11; i++) {
      grid.push(this.tile.water);
    }

    return map;
  }

  randomNumbersArray() {
    let map = [];
    for (let i = 0; i <= 500; i += 1) {
      map.push(Math.random());
    }
    return map;
  }

  landOrWater(number) {
    if (number < 0.5) {
      return this.landImage;
    } else {
      return this.waterImage;
    }
  }

  landForestOrMountain(number) {
    if (number < 0.33) {
      return this.landImage;
    } else if (number < 0.7) {
      return this.forestImage;
    } else {
      return this.mountainImage;
    }
  }

  forestOrMountain(number) {
    if (number < 0.5) {
      return this.forestImage;
    } else {
      return this.mountainImage;
    }
  }

  drawMap() {
    clear();
    this.gridArray();
    // 12x12 borders of water tiles
    for (let i = 0; i <= 12; i += 1) {
      strokeWeight(2);

      this.gridArray();
      this.gridArray;

      image(this.waterImage, i * 100, 0, 100, 100);
      noFill();
      rect(i * 100, 0, 100, 100);

      image(this.waterImage, 0, i * 100, 100, 100);
      noFill();
      rect(0, i * 100, 100, 100);

      image(this.waterImage, 1100, i * 100, 100, 100);
      noFill();
      rect(1100, i * 100, 100, 100);

      image(this.waterImage, i * 100, 1100, 100, 100);
      noFill();
      rect(i * 100, 1100, 100, 100);
    }

    // 10x10 borders of land/water tiles
    for (let i = 1; i <= 10; i += 1) {
      strokeWeight(2);

      image(this.landOrWater(this.randomizer[i]), i * 100, 100, 100, 100);
      noFill();
      rect(i * 100, 100, 100, 100);

      image(this.landOrWater(this.randomizer[i]), 100, i * 100, 100, 100);
      noFill();
      rect(100, i * 100, 100, 100);

      image(this.landOrWater(this.randomizer[i]), 1000, i * 100, 100, 100);
      noFill();
      rect(1000, i * 100, 100, 100);

      image(this.landOrWater(this.randomizer[i]), i * 100, 1000, 100, 100);
      noFill();
      rect(i * 100, 1000, 100, 100);
    }

    // 8x8 borders of land tiles
    for (let i = 2; i <= 9; i += 1) {
      strokeWeight(2);

      image(this.landImage, i * 100, 200, 100, 100);
      noFill();
      rect(i * 100, 200, 100, 100);

      image(this.landImage, 200, i * 100, 100, 100);
      noFill();
      rect(200, i * 100, 100, 100);

      image(this.landImage, 900, i * 100, 100, 100);
      noFill();
      rect(900, i * 100, 100, 100);

      image(this.landImage, i * 100, 900, 100, 100);
      noFill();
      rect(i * 100, 900, 100, 100);
    }

    // 6x6 borders of land tiles
    for (let i = 3; i <= 8; i += 1) {
      strokeWeight(2);

      image(this.landImage, i * 100, 300, 100, 100);
      noFill();
      rect(i * 100, 300, 100, 100);

      image(this.landImage, 300, i * 100, 100, 100);
      noFill();
      rect(300, i * 100, 100, 100);

      image(this.landImage, 800, i * 100, 100, 100);
      noFill();
      rect(800, i * 100, 100, 100);

      image(this.landImage, i * 100, 800, 100, 100);
      noFill();
      rect(i * 100, 800, 100, 100);
    }

    // 4x4 borders of land/forest/mountain tiles
    for (let i = 4; i <= 7; i += 1) {
      strokeWeight(2);

      // image(this.landOrWater(this.randomizer[i]), i * 100, 1000, 100, 100);
      image(
        this.landForestOrMountain(this.randomizer[i + 100]),
        i * 100,
        400,
        100,
        100
      );
      noFill();
      rect(i * 100, 400, 100, 100);

      image(
        this.landForestOrMountain(this.randomizer[i + 110]),
        400,
        i * 100,
        100,
        100
      );
      noFill();
      rect(400, i * 100, 100, 100);

      image(
        this.landForestOrMountain(this.randomizer[i + 120]),
        700,
        i * 100,
        100,
        100
      );
      noFill();
      rect(700, i * 100, 100, 100);

      image(
        this.landForestOrMountain(this.randomizer[i + 130]),
        i * 100,
        700,
        100,
        100
      );
      noFill();
      rect(i * 100, 700, 100, 100);
    }

    // 2x2 interior of forest/mountain tiles
    for (let i = 5; i <= 6; i += 1) {
      strokeWeight(2);

      image(
        this.forestOrMountain(this.randomizer[i + 140]),
        i * 100,
        500,
        100,
        100
      );
      noFill();
      rect(i * 100, 500, 100, 100);

      image(
        this.forestOrMountain(this.randomizer[i + 150]),
        500,
        i * 100,
        100,
        100
      );
      noFill();
      rect(500, i * 100, 100, 100);

      image(
        this.forestOrMountain(this.randomizer[i + 160]),
        600,
        i * 100,
        100,
        100
      );
      noFill();
      rect(600, i * 100, 100, 100);

      image(
        this.forestOrMountain(this.randomizer[i + 170]),
        i * 100,
        600,
        100,
        100
      );
      noFill();
      rect(i * 100, 600, 100, 100);
    }
  }
}
