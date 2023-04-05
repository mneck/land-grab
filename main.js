const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(720, 720);
  canvas.parent("canvas");
}

function draw() {
  game.drawMap();
}

function mouseClicked(event) {
  console.log(mouseX, mouseY);
}

const div = document.getElementById("myDiv");
div.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
