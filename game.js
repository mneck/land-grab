class Game {
  constructor() {
    this.tiles = new Tiles();
    this.tileImages;
    // this.tiles = new Players();
  }

  preload() {
    this.tileImages = [
      { src: loadImage("../assets/kenney_pixel-shmup/Tiles/0land_tile.png"), x: 0 },
      { src: loadImage("./assets/background/plx-2.png"), x: 0 },
      { src: loadImage("./assets/background/plx-3.png"), x: 0 },
      { src: loadImage("./assets/background/plx-4.png"), x: 0 },
      { src: loadImage("./assets/background/plx-5.png"), x: 0 },
    ]
  }

  setup() {
    createCanvas(600, 600); // Set the size of the canvas
    background(255); // Set the background color to white
    translate(-100, -100);
    stroke(0); // Set the stroke color to black
    texture(img);
  }

  drawMap() {
    clear();
    let mapArr = [];
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        rect(i * 50, j * 50, 50, 50); // Draw a rectangle at position (i*50, j*50) with a width and height of 50
      }
    }
  }
}

// buildable property = true || false
// one class Tile with children => land tile, ocean tile, mountain tile,
