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
    // this.tileType = new Tiles();
    // this.players = new Players();
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

  createImagesArray() {
    return [
      this.landImage,
      this.waterImage,
      this.forestImage,
      this.mountainImage,
      this.mineImage,
      this.resortImage,
      this.player1FarmImage,
      this.player2FarmImage,
    ];
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

    // 12x12 borders of water tiles
    for (let i = 0; i <= 12; i += 1) {
      strokeWeight(2);

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
