let playerTurn = 1;
let player1income = 0;
let player2income = 0;

let player1FarmCount = 0;
let player2FarmCount = 0;

let player1TownCount = 0;
let player2TownCount = 0;

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

//right click functions => builds farms
document.getElementById("canvasDiv").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let el = Math.floor(mouseY / 60) * 12 + Math.floor(mouseX / 60);

  if (
    game.map[el].type === "water" ||
    game.map[el].type === "mountain" ||
    game.map[el].building === "mine" ||
    game.map[el].building === "resort" ||
    game.map[el].building === "player1farm" ||
    game.map[el].building === "player2farm"
  ) {
    return;
  }

  if (playerTurn % 2 === 1) {
    console.log("player 1 turn, miner", player1FarmCount, player1TownCount);
    game.map[el].building = "player1farm";
    player1FarmCount++;
  } else {
    game.map[el].building = "player2farm";
    player2FarmCount++;
  }

  playerTurn++;

  console.log(playerTurn);
  console.log("right click");
});

//left click functions => builds towns
function mouseClicked(event) {
  let el = Math.floor(mouseY / 60) * 12 + Math.floor(mouseX / 60);

  if (mouseX > 720 || mouseY > 720 || mouseX < 0 || mouseY < 0) {
    console.log("failed to click on canvas!", mouseX, mouseY);
    return;
  }
  console.log("player 1 farm count", player1FarmCount);
  console.log("player 1 town count", player1TownCount);
  console.log("player 2 farm count", player2FarmCount);
  console.log("player 2 town count", player2TownCount);

  if (
    game.map[el].type === "water" ||
    game.map[el].type === "mountain" ||
    game.map[el].building === "mine" ||
    game.map[el].building === "resort" ||
    game.map[el].building === "player1farm" ||
    game.map[el].building === "player2farm" ||
    player1FarmCount === 0 ||
    player2FarmCount === 0
  ) {
    return;
  }

  if (playerTurn % 2 === 1 && player1FarmCount - player1TownCount <= 0) {
    return;
  }
  if (playerTurn % 2 === 0 && player2FarmCount - player2TownCount <= 0) {
    return;
  }
  // console.log("blocked", {
  //   cond1: player1FarmCount - player1TownCount <= 0,
  //   cond2: player2FarmCount - player2TownCount <= 0,
  // });

  if (playerTurn % 2 === 1) {
    game.map[el].building = "mine";
    player1TownCount++;
  } else {
    game.map[el].building = "resort";
    player2TownCount++;
  }

  playerTurn++;

  // if (playerTurn === 1) {
  //   player1income += 1; // need to include variable for new income
  // } else {
  //   player2income += 1;
  // }

  // console.log(player1income);
  // console.log(playerTurn, "player turn");

  console.log(mouseX, mouseY);
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
