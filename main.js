const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(1200, 1200);
  canvas.parent("canvas");
}

function draw() {
  game.drawMap();
}