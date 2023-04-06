let grid = [];

class Game {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
    // this.player1 = new Player1();
    // this.player2 = new Player2();
    this.tile = new Tile();
    this.map = this.gridArray();
  }

  preload() {
    this.waterImage = loadImage("assets/1water_tile.png");
    this.landImage = loadImage("assets/2land_tile.png");
    this.mountainImage = loadImage("assets/3mountain_tile.png");
    this.forestImage = loadImage("assets/4forest_tile.png");
    this.mineImage = loadImage("assets/5mine_tile.png");
    this.resortImage = loadImage("assets/6resort_tile.png");
    this.player1FarmImage = loadImage("assets/7player1_farm.png");
    this.player2FarmImage = loadImage("assets/8player2_farm.png");
  }

  landWater() {
    let r = Math.random();
    if (r < 0.5) {
      return "land";
    } else {
      return "water";
    }
  }

  mountainLandForest() {
    let r = Math.random();
    if (r < 0.4) {
      return "land";
    } else if (r < 0.8) {
      return "forest";
    } else {
      return "mountain";
    }
  }

  mountainForest() {
    let r = Math.random();
    if (r < 0.5) {
      return "mountain";
    } else {
      return "forest";
    }
  }

  gridArray() {
    // row 0: elements 0-11
    for (let i = 0; i <= 11; i++) {
      grid.push(new Tile("water", i * 60, 0));
    }

    // row 1: elements 12-23
    grid.push(new Tile("water", 60, 60));
    for (let i = 1; i <= 10; i++) {
      grid.push(new Tile(this.landWater(), i * 60, 60));
    }
    grid.push(new Tile("water", 660, 60));

    // row 2: elements 24-35
    grid.push(new Tile("water", 0, 120));
    grid.push(new Tile(this.landWater(), 60, 120));
    for (let i = 2; i <= 10; i++) {
      grid.push(new Tile("land", i * 60, 120));
    }
    grid.push(new Tile("water", 660, 120));

    // row 3: elements 36-47
    grid.push(new Tile("water", 0, 180));
    grid.push(new Tile(this.landWater(), 60, 180));
    for (let i = 2; i <= 9; i++) {
      grid.push(new Tile("land", i * 60, 180));
    }
    grid.push(new Tile(this.landWater(), 600, 180));
    grid.push(new Tile("water", 660, 180));

    // row 4: elements 48-59
    grid.push(new Tile("water", 0, 240));
    grid.push(new Tile(this.landWater(), 60, 240));
    grid.push(new Tile("land", 120, 240));
    grid.push(new Tile("land", 180, 240));
    for (let i = 4; i <= 7; i++) {
      grid.push(new Tile(this.mountainLandForest(), i * 60, 240));
    }
    grid.push(new Tile("land", 480, 240));
    grid.push(new Tile("land", 540, 240));
    grid.push(new Tile(this.landWater(), 600, 240));
    grid.push(new Tile("water", 660, 240));

    // row 5: elements 60-71
    grid.push(new Tile("water", 0, 300));
    grid.push(new Tile(this.landWater(), 60, 300));
    grid.push(new Tile("land", 120, 300));
    grid.push(new Tile("land", 180, 300));
    grid.push(new Tile(this.mountainLandForest(), 240, 300));
    grid.push(new Tile(this.mountainForest(), 300, 300));
    grid.push(new Tile(this.mountainForest(), 360, 300));
    grid.push(new Tile(this.mountainLandForest(), 420, 300));
    grid.push(new Tile("land", 480, 300));
    grid.push(new Tile("land", 540, 300));
    grid.push(new Tile(this.landWater(), 600, 300));
    grid.push(new Tile("water", 660, 300));

    // row 6: elements 72-83
    grid.push(new Tile("water", 0, 360));
    grid.push(new Tile(this.landWater(), 60, 360));
    grid.push(new Tile("land", 120, 360));
    grid.push(new Tile("land", 180, 360));
    grid.push(new Tile(this.mountainLandForest(), 240, 360));
    grid.push(new Tile(this.mountainForest(), 300, 360));
    grid.push(new Tile(this.mountainForest(), 360, 360));
    grid.push(new Tile(this.mountainLandForest(), 420, 360));
    grid.push(new Tile("land", 480, 360));
    grid.push(new Tile("land", 540, 360));
    grid.push(new Tile(this.landWater(), 600, 360));
    grid.push(new Tile("water", 660, 360));

    // row 7: elements 84-95
    grid.push(new Tile("water", 0, 420));
    grid.push(new Tile(this.landWater(), 60, 420));
    grid.push(new Tile("land", 120, 420));
    grid.push(new Tile("land", 180, 420));
    for (let i = 4; i <= 7; i++) {
      grid.push(new Tile(this.mountainLandForest(), i * 60, 420));
    }
    grid.push(new Tile("land", 480, 420));
    grid.push(new Tile("land", 540, 420));
    grid.push(new Tile(this.landWater(), 600, 420));
    grid.push(new Tile("water", 660, 420));

    // row 8: elements 96-107
    grid.push(new Tile("water", 0, 480));
    grid.push(new Tile(this.landWater(), 60, 480));
    for (let i = 2; i <= 9; i++) {
      grid.push(new Tile("land", i * 60, 480));
    }
    grid.push(new Tile(this.landWater(), 600, 480));
    grid.push(new Tile("water", 660, 480));

    // row 9: elements 108-119
    grid.push(new Tile("water", 0, 540));
    grid.push(new Tile(this.landWater(), 60, 540));
    for (let i = 2; i <= 9; i++) {
      grid.push(new Tile("land", i * 60, 540));
    }
    grid.push(new Tile(this.landWater(), 600, 540));
    grid.push(new Tile("water", 660, 540));

    // row 10: elements 120-131
    grid.push(new Tile("water", 0, 600));
    for (let i = 1; i <= 10; i++) {
      grid.push(new Tile(this.landWater(), i * 60, 600));
    }
    grid.push(new Tile("water", 660, 600));

    // row 11: elements 132-144
    for (let i = 0; i <= 11; i++) {
      grid.push(new Tile("water", i * 60 + 60, 660));
    }
    return grid;
  }

  drawMap() {
    clear();
    // row 0
    for (let i = 0; i <= 11; i++) {
      if (this.map[i].type === "water") {
        image(this.waterImage, i * 60, 0, 60, 60);
        noFill();
        rect(i * 60, 0, 60, 60);
      }
    }

    // row 1
    for (let i = 12; i <= 23; i++) {
      if (this.map[i].type === "water") {
        image(this.waterImage, (i - 12) * 60, 60, 60, 60);
        noFill();
        rect((i - 12) * 60, 60, 60, 60);
      } else {
        image(this.landImage, (i - 12) * 60, 60, 60, 60);
        noFill();
        rect((i - 12) * 60, 60, 60, 60);
      }
    }

    // row 2
    for (let i = 24; i <= 35; i++) {
      if (this.map[i].type === "water") {
        image(this.waterImage, (i - 24) * 60, 120, 60, 60);
        noFill();
        rect((i - 24) * 60, 120, 60, 60);
      } else if (this.map[i].type === "land") {
        image(this.landImage, (i - 24) * 60, 120, 60, 60);
        noFill();
        rect((i - 24) * 60, 120, 60, 60);
      }
    }

    // row 3
    for (let i = 36; i <= 47; i++) {
      if (this.map[i].type === "water") {
        image(this.waterImage, (i - 36) * 60, 180, 60, 60);
        noFill();
        rect((i - 36) * 60, 180, 60, 60);
      } else if (this.map[i].type === "land") {
        image(this.landImage, (i - 36) * 60, 180, 60, 60);
        noFill();
        rect((i - 36) * 60, 180, 60, 60);
      }
    }

    // row 4
    for (let i = 48; i <= 59; i++) {
      if (this.map[i].type === "water") {
        image(this.waterImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      } else if (this.map[i].type === "land") {
        image(this.landImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      } else if (this.map[i].type == "mountain") {
        image(this.mountainImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      } else if (this.map[i].type == "forest") {
        image(this.forestImage, (i - 48) * 60, 240, 60, 60);
        noFill();
        rect((i - 48) * 60, 240, 60, 60);
      }
    }

    // row 5
    for (let i = 60; i <= 71; i++) {
      if (this.map[i].type == "water") {
        image(this.waterImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      } else if (this.map[i].type == "land") {
        image(this.landImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      } else if (this.map[i].type == "mountain") {
        image(this.mountainImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      } else if (this.map[i].type == "forest") {
        image(this.forestImage, (i - 60) * 60, 300, 60, 60);
        noFill();
        rect((i - 60) * 60, 300, 60, 60);
      }
    }

    // row 6
    for (let i = 72; i <= 83; i++) {
      if (this.map[i].type == "water") {
        image(this.waterImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      } else if (this.map[i].type == "land") {
        image(this.landImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      } else if (this.map[i].type == "mountain") {
        image(this.mountainImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      } else if (this.map[i].type == "forest") {
        image(this.forestImage, (i - 72) * 60, 360, 60, 60);
        noFill();
        rect((i - 72) * 60, 360, 60, 60);
      }
    }

    // row 7
    for (let i = 84; i <= 95; i++) {
      if (this.map[i].type == "water") {
        image(this.waterImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      } else if (this.map[i].type == "land") {
        image(this.landImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      } else if (this.map[i].type == "mountain") {
        image(this.mountainImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      } else if (this.map[i].type == "forest") {
        image(this.forestImage, (i - 84) * 60, 420, 60, 60);
        noFill();
        rect((i - 84) * 60, 420, 60, 60);
      }
    }

    // row 8
    for (let i = 96; i <= 107; i++) {
      if (this.map[i].type == "water") {
        image(this.waterImage, (i - 96) * 60, 480, 60, 60);
        noFill();
        rect((i - 96) * 60, 480, 60, 60);
      } else if (this.map[i].type == "land") {
        image(this.landImage, (i - 96) * 60, 480, 60, 60);
        noFill();
        rect((i - 96) * 60, 480, 60, 60);
      }
    }

    // row 9
    for (let i = 108; i <= 119; i++) {
      if (this.map[i].type == "water") {
        image(this.waterImage, (i - 108) * 60, 540, 60, 60);
        noFill();
        rect((i - 108) * 60, 540, 60, 60);
      } else if (this.map[i].type == "land") {
        image(this.landImage, (i - 108) * 60, 540, 60, 60);
        noFill();
        rect((i - 108) * 60, 540, 60, 60);
      }
    }

    // row 10
    for (let i = 120; i <= 131; i++) {
      if (this.map[i].type == "water") {
        image(this.waterImage, (i - 120) * 60, 600, 60, 60);
        noFill();
        rect((i - 120) * 60, 600, 60, 60);
      } else if (this.map[i].type == "land") {
        image(this.landImage, (i - 120) * 60, 600, 60, 60);
        noFill();
        rect((i - 120) * 60, 600, 60, 60);
      }
    }

    // row 11
    for (let i = 132; i <= 143; i++) {
      image(this.waterImage, (i - 132) * 60, 660, 60, 60);
      noFill();
      rect((i - 132) * 60, 660, 60, 60);
    }
  }

  drawChanges() {
    this.map.forEach((tile, index) => {
      if (tile.building === "mine") {
        let xValue = Math.floor(index % 12) * 60;
        let yValue = Math.floor(index / 12) * 60;
        image(this.mineImage, xValue, yValue, 60, 60);
      }
      if (tile.building === "resort") {
        let xValue = Math.floor(index % 12) * 60;
        let yValue = Math.floor(index / 12) * 60;
        image(this.resortImage, xValue, yValue, 60, 60);
      }
    });

    // let el = Math.floor(mouseY / 60) * 12 + Math.floor(mouseX / 60);
    // 60, 60 => 13
    // 120, 60 => 14
    // 180, 60 => 15
    // 240, 60 => 16
    //   : 2 = 13

    // this.mineImage = loadImage("assets/5mine_tile.png");
    // this.resortImage = loadImage("assets/6resort_tile.png");
    // this.player1FarmImage = loadImage("assets/7player1_farm.png");
    // this.player2FarmImage = loadImage("assets/8player2_farm.png");
  }
}
