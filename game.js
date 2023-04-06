let grid = [];

class Game {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
    this.player1 = new Player1();
    // this.player2 = new Player2();
    this.tile = tiles;
    this.map = this.gridArray();
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

  // updateTileImages() {
  //   this.tile.water.image = this.waterImage.resize(60,60);
  //   this.tile.land.image = this.landImage.resize(60,60);
  //   this.tile.mountain.image = this.mountainImage.resize(60,60);
  //   this.tile.forest.image = this.forestImage.resize(60,60);
  //   this.tile.mine.image = this.mineImage.resize(60,60);
  //   this.tile.resort.image = this.resortImage.resize(60,60);
  //   this.tile.player1Farm.image = this.player1FarmImage.resize(60,60);
  //   this.tile.player2Farm.image = this.player2FarmImage.resize(60,60);
  // }

  landWater() {
    let r = Math.random();
    if (r < 0.5) {
      return this.tile.water;
    } else {
      return this.tile.land;
    }
  }

  mountainLandForest() {
    let r = Math.random();
    if (r < 0.3) {
      return this.tile.land;
    } else if (r < 0.8) {
      return this.tile.forest;
    } else {
      return this.tile.mountain;
    }
  }

  mountainForest() {
    let r = Math.random();
    if (r < 0.6) {
      return this.tile.mountain;
    } else {
      return this.tile.forest;
    }
  }

  gridArray() {
    // row 0: elements 0-11
    for (let i = 0; i <= 11; i++) {
      let tile = new Tile("land", 0, 0);
      tile.x = grid.push(this.tile.water);
      this.tile.x = i * 60;
      this.tile.y = 0;
    }

    // row 1: elements 12-23
    grid.push(this.tile.water);
    for (let i = 0; i <= 9; i++) {
      grid.push(this.landWater());
    }
    grid.push(this.tile.water);

    // row 2: elements 24-35
    grid.push(this.tile.water);
    grid.push(this.landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 3: elements 36-47
    grid.push(this.tile.water);
    grid.push(this.landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 4: elements 48-59
    grid.push(this.tile.water);
    grid.push(this.landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    for (let i = 0; i <= 3; i++) {
      grid.push(this.mountainLandForest());
    }
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 5: elements 60-71
    grid.push(this.tile.water);
    grid.push(this.landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(this.mountainLandForest());
    grid.push(this.mountainForest());
    grid.push(this.mountainForest());
    grid.push(this.mountainLandForest());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 6: elements 72-83
    grid.push(this.tile.water);
    grid.push(this.landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(this.mountainLandForest());
    grid.push(this.mountainForest());
    grid.push(this.mountainForest());
    grid.push(this.mountainLandForest());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 7: elements 84-95
    grid.push(this.tile.water);
    grid.push(this.landWater());
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    for (let i = 0; i <= 3; i++) {
      grid.push(this.mountainLandForest());
    }
    grid.push(this.tile.land);
    grid.push(this.tile.land);
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 8: elements 96-107
    grid.push(this.tile.water);
    grid.push(this.landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 9: elements 108-119
    grid.push(this.tile.water);
    grid.push(this.landWater());
    for (let i = 0; i <= 7; i++) {
      grid.push(this.tile.land);
    }
    grid.push(this.landWater());
    grid.push(this.tile.water);

    // row 10: elements 120-131
    grid.push(this.tile.water);
    for (let i = 0; i <= 9; i++) {
      grid.push(this.landWater());
    }
    grid.push(this.tile.water);

    // row 11: elements 132-144
    for (let i = 0; i <= 11; i++) {
      grid.push(this.tile.water);
    }
    console.log(grid);
    return grid;
  }

  drawMap() {
    clear();
    // row 0
    for (let i = 0; i <= 11; i++) {
      this.map[i].x = i * 60;
      this.map[i].y = 0;
      image(this.waterImage, i * 60, 0, 60, 60);
      noFill();
      rect(i * 60, 0, 60, 60);
    }

    // row 1
    for (let i = 12; i <= 23; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 12) * 60;
        this.map[i].y = 60;
        image(this.waterImage, (i - 12) * 60, 60, 60, 60);
        noFill();
        rect((i - 12) * 60, 60, 60, 60);
      } else {
        this.map[i].x = (i - 12) * 60;
        this.map[i].y = 60;
        image(this.landImage, (i - 12) * 60, 60, 60, 60);
        noFill();
        rect((i - 12) * 60, 60, 60, 60);
      }
    }

    // row 2
    for (let i = 24; i <= 35; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 24) * 60;
        this.map[i].y = 120;
        image(this.waterImage, (i - 24) * 60, 120, 60, 60);
        noFill();
        rect((i - 24) * 60, 120, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 24) * 60;
        this.map[i].y = 120;
        image(this.landImage, (i - 24) * 60, 120, 60, 60);
        noFill();
        rect((i - 24) * 60, 120, 60, 60);
      }
    }

    // row 3
    for (let i = 36; i <= 47; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 36) * 60;
        this.map[i].y = 180;
        image(this.waterImage, (i - 36) * 60, 180, 60, 60);
        noFill();
        rect((i - 36) * 60, 180, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 36) * 60;
        this.map[i].y = 180;
        image(this.landImage, (i - 36) * 60, 180, 60, 60);
        noFill();
        rect((i - 36) * 60, 180, 60, 60);
      }
    }

    // row 4
    for (let i = 48; i <= 59; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 48) * 60;
        this.map[i].y = 240;
        image(this.waterImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 48) * 60;
        this.map[i].y = 240;
        image(this.landImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      } else if (this.map[i].type == "mountain") {
        this.map[i].x = (i - 48) * 60;
        this.map[i].y = 240;
        image(this.mountainImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      } else if (this.map[i].type == "forest") {
        this.map[i].x = (i - 48) * 60;
        this.map[i].y = 240;
        image(this.forestImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      }
    }

    // row 5
    for (let i = 60; i <= 71; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 60) * 60;
        this.map[i].y = 300;
        image(this.waterImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 60) * 60;
        this.map[i].y = 300;
        image(this.landImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      } else if (this.map[i].type == "mountain") {
        this.map[i].x = (i - 60) * 60;
        this.map[i].y = 300;
        image(this.mountainImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      } else if (this.map[i].type == "forest") {
        this.map[i].x = (i - 60) * 60;
        this.map[i].y = 300;
        image(this.forestImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      }
    }

    // row 6
    for (let i = 72; i <= 83; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 72) * 60;
        this.map[i].y = 360;
        image(this.waterImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 72) * 60;
        this.map[i].y = 360;
        image(this.landImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      } else if (this.map[i].type == "mountain") {
        this.map[i].x = (i - 72) * 60;
        this.map[i].y = 360;
        image(this.mountainImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      } else if (this.map[i].type == "forest") {
        this.map[i].x = (i - 72) * 60;
        this.map[i].y = 360;
        image(this.forestImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      }
    }

    // row 7
    for (let i = 84; i <= 95; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 84) * 60;
        this.map[i].y = 420;
        image(this.waterImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 84) * 60;
        this.map[i].y = 420;
        image(this.landImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      } else if (this.map[i].type == "mountain") {
        this.map[i].x = (i - 84) * 60;
        this.map[i].y = 420;
        image(this.mountainImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      } else if (this.map[i].type == "forest") {
        this.map[i].x = (i - 84) * 60;
        this.map[i].y = 420;
        image(this.forestImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      }
    }

    // row 8
    for (let i = 96; i <= 107; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 96) * 60;
        this.map[i].y = 480;
        image(this.waterImage, (i - 96) * 60, 480, 60, 60);
        noFill();
        rect((i - 96) * 60, 480, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 96) * 60;
        this.map[i].y = 480;
        image(this.landImage, (i - 96) * 60, 480, 60, 60);
        noFill();
        rect((i - 96) * 60, 480, 60, 60);
      }
    }

    // row 9
    for (let i = 108; i <= 119; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 108) * 60;
        this.map[i].y = 540;
        image(this.waterImage, (i - 108) * 60, 540, 60, 60);
        noFill();
        rect((i - 108) * 60, 540, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 108) * 60;
        this.map[i].y = 540;
        image(this.landImage, (i - 108) * 60, 540, 60, 60);
        noFill();
        rect((i - 108) * 60, 540, 60, 60);
      }
    }

    // row 10
    for (let i = 120; i <= 131; i++) {
      if (this.map[i].type == "water") {
        this.map[i].x = (i - 120) * 60;
        this.map[i].y = 600;
        image(this.waterImage, (i - 120) * 60, 600, 60, 60);
        noFill();
        rect((i - 120) * 60, 600, 60, 60);
      } else if (this.map[i].type == "land") {
        this.map[i].x = (i - 120) * 60;
        this.map[i].y = 600;
        image(this.landImage, (i - 120) * 60, 600, 60, 60);
        noFill();
        rect((i - 120) * 60, 600, 60, 60);
      }
    }

    // row 11
    // for (let i = 132; i <= 143; i++) {
    //   this.map[i].x = (i - 132) * 60;
    //   this.map[i].y = 660;
    //   image(this.waterImage, (i - 132) * 60, 660, 60, 60);
    //   noFill();
    //   rect((i - 132) * 60, 660, 60, 60);
    // }
  }
}
