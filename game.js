class Game {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
    this.landOrWaterImage = "";
  }

  preload() {
    this.waterImage = loadImage("./assets/1water_tile.png");
    this.landImage = loadImage("./assets/2land_tile.png");
  }

  drawMap() {
    clear();

    // 12x12 borders of water tiles
    for (let i = 0; i <= 1200; i += 100) {
      strokeWeight(2);
      this.waterImage.resize(100, 100);
      this.landImage.resize(100, 100);

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
