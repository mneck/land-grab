class Game {
  constructor() {
    // this.tiles = new Tiles();
    // this.tiles = new Players();
  }

  preload() {
    img = loadImage("../assets/kenney_pixel-shmup/Tiles/0land_tile.png");
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
