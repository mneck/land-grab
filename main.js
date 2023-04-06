let playerTurn = 1;
let player1income = 0;
let player2income = 0;

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
  game.drawChanges();
}

document.getElementById("canvasDiv").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let el = Math.floor(mouseY / 60) * 12 + Math.floor(mouseX / 60);

  if (
    game.map[el].type === "mine" ||
    game.map[el].type === "water" ||
    game.map[el].type === "mountain" ||
    game.map[el].type === "resort" ||
    game.map[el].type === "player1farm" ||
    game.map[el].type === "player2farm"
  ) {
    return;
  }

  if (playerTurn === 1) {
    playerTurn = 2;
  } else {
    playerTurn = 1;
  }
  console.log("right click");
  game.map[el].building = "mine";
});

function mouseClicked(event) {
  let el = Math.floor(mouseY / 60) * 12 + Math.floor(mouseX / 60);

  if (
    game.map[el].type === "mine" ||
    game.map[el].type === "water" ||
    game.map[el].type === "mountain" ||
    game.map[el].type === "resort" ||
    game.map[el].type === "player1farm" ||
    game.map[el].type === "player2farm"
  ) {
    return;
  }

  game.map[el].building = "resort";

  if (playerTurn === 1) {
    player1income++;
  }

  if (playerTurn === 1) {
    playerTurn = 2;
  } else {
    playerTurn = 1;
  }

  console.log(player1income);
  console.log(playerTurn, "player turn");

  if (mouseX > 720 || mouseY > 720) return;
  // if (event) {
  //   playerTurn = true;
  // }

  // tile type changed to resort or mine

  //right click = button: 2
  //left click = button: 0
}

function toggleFunction() {
  let x = document.getElementById("myToggle");
  if ((x.innerHTML = "---")) {
    x.innerHTML = `Left click builds a farm. Right click builds a town. Players receive points at the start of each turn for their towns and adjacency bonuses. Player 1 goes first and gets extra points for towns built next to mountains and forests. Player 2 gets extra points for towns next to mountains and water, and loses points for any towns built next to Player 1's towns. A player cannot have more towns than farms on the map. The first
    player to get 100 points wins.`;
  } else {
    x.innerHTML = "---";
  }
}
