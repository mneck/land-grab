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

const div = document.getElementById("canvasDiv");
div.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

function toggleFunction() {
  let x = document.getElementById("myToggle");
  if ((x.innerHTML = "---")) {
    x.innerHTML = `Left click builds a farm. Right click builds a town. Players receive points at the start of each turn for their towns and adjacency bonuses. Player 1 goes first and gets extra points for towns built next to mountains and forests. Player 2 gets extra points for towns next to mountains and water, and loses points for any towns built next to Player 1's towns. A player cannot have more towns than farms on the map. The first
    player to get 100 points wins.`;
  } else {
    x.innerHTML = "---";
  }
}
