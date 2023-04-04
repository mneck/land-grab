class Game {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
    this.landOrWater = new landOrWater();
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

  drawMap() {
    clear();
    this.waterImage.resize(100, 100);
    this.landImage.resize(100, 100);
    this.forestImage.resize(100, 100);
    this.mountainImage.resize(100, 100);
    this.mineImage.resize(100, 100);
    this.resortImage.resize(100, 100);
    this.player1FarmImage.resize(100, 100);
    this.player2FarmImage.resize(100, 100);

    // 12x12 borders of water tiles
    for (let i = 0; i <= 1200; i += 100) {
      strokeWeight(2);

      // image(this.landOrWater.landOrWater(), i, 0);
      image(this.waterImage, i, 0);
      noFill();
      rect(i, 0, 100, 100);

      image(this.waterImage, 0, i);
      noFill();
      rect(0, i, 100, 100);

      image(this.waterImage, 1100, i);
      noFill();
      rect(1100, i, 100, 100);

      image(this.waterImage, i, 1100);
      noFill();
      rect(i, 1100, 100, 100);
    }

    // 10x10 borders of land/water tiles
    for (let i = 100; i <= 1000; i += 100) {
      strokeWeight(2);

      image(this.landImage, i, 100);
      noFill();
      rect(i, 100, 100, 100);

      image(this.landImage, 100, i);
      noFill();
      rect(100, i, 100, 100);

      image(this.landImage, 1000, i);
      noFill();
      rect(1000, i, 100, 100);

      image(this.landImage, i, 1000);
      noFill();
      rect(i, 1000, 100, 100);
    }

    // 8x8 borders of land tiles
    for (let i = 200; i <= 900; i += 100) {
      strokeWeight(2);

      image(this.landImage, i, 200);
      noFill();
      rect(i, 200, 100, 100);

      image(this.landImage, 200, i);
      noFill();
      rect(200, i, 100, 100);

      image(this.landImage, 900, i);
      noFill();
      rect(900, i, 100, 100);

      image(this.landImage, i, 900);
      noFill();
      rect(i, 900, 100, 100);
    }

    // 6x6 borders of land tiles
    for (let i = 300; i <= 800; i += 100) {
      strokeWeight(2);

      image(this.resortImage, i, 300);
      noFill();
      rect(i, 300, 100, 100);

      image(this.mineImage, 300, i);
      noFill();
      rect(300, i, 100, 100);

      image(this.player1FarmImage, 800, i);
      noFill();
      rect(800, i, 100, 100);

      image(this.player2FarmImage, i, 800);
      noFill();
      rect(i, 800, 100, 100);
    }

    // 4x4 borders of land/forest/mountain tiles
    for (let i = 400; i <= 700; i += 100) {
      strokeWeight(2);

      image(this.mountainImage, i, 400);
      noFill();
      rect(i, 400, 100, 100);

      image(this.mountainImage, 400, i);
      noFill();
      rect(400, i, 100, 100);

      image(this.mountainImage, 700, i);
      noFill();
      rect(700, i, 100, 100);

      image(this.mountainImage, i, 700);
      noFill();
      rect(i, 700, 100, 100);
    }

    // 2x2 interior of forest/mountain tiles

    for (let i = 500; i <= 600; i += 100) {
      strokeWeight(2);

      image(this.forestImage, i, 500);
      noFill();
      rect(i, 500, 100, 100);

      image(this.forestImage, 500, i);
      noFill();
      rect(500, i, 100, 100);

      image(this.forestImage, 600, i);
      noFill();
      rect(600, i, 100, 100);

      image(this.forestImage, i, 600);
      noFill();
      rect(i, 600, 100, 100);
    }

    // for (let i = 100; i <= 1000; i += 100) {
    //   for (let j = 1; j <= 10; j++) {
    //   // let fiftyPercenter = 1 + Math.floor(Math.random() +1)
    //   strokeWeight(2);
    //   this.landImage.resize(100, 100);

    //   image(this.landImage, i, j*100);
    //   noFill();
    //   rect(i, j*100, 100, 100)
    //   }
    // }
  }
}

// buildable property = true || false
// one class Tile with children => land tile, ocean tile, mountain tile,
