let playerTurn = 1;
let player1Income = 0;
let player2Income = 0;

let player1Score = 0;
let player2Score = 0;

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
    game.map[el].building = "player1farm";
    player1FarmCount++;
  } else {
    game.map[el].building = "player2farm";
    player2FarmCount++;
  }

  playerTurn++;
});

//left click functions => builds towns
function mouseClicked(event) {
  let el = Math.floor(mouseY / 60) * 12 + Math.floor(mouseX / 60);

  if (mouseX > 720 || mouseY > 720 || mouseX < 0 || mouseY < 0) {
    console.log("failed to click on canvas!", mouseX, mouseY);
    return;
  }

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

  if (playerTurn % 2 === 1) {
    game.map[el].building = "mine";
    player1TownCount++;
    player1Income++;

    if (
      game.map[el + 1].type === "mountain" ||
      game.map[el + 1].type === "forest"
    ) {
      player1Income++;
    }
    if (
      game.map[el - 1].type === "mountain" ||
      game.map[el - 1].type === "forest"
    ) {
      player1Income++;
    }
    if (
      game.map[el + 12].type === "mountain" ||
      game.map[el + 12].type === "forest"
    ) {
      player1Income++;
    }
    if (
      game.map[el - 12].type === "mountain" ||
      game.map[el - 12].type === "forest"
    ) {
      player1Income++;
    }

    player1Score += player1Income;
    playerTurn++;
  } else {
    game.map[el].building = "resort";
    player2TownCount++;
    player2Income++;

    if (
      game.map[el + 1].type === "mountain" ||
      game.map[el + 1].type === "water"
    ) {
      player2Income++;
    }
    if (
      game.map[el - 1].type === "water" ||
      game.map[el - 1].type === "mountain"
    ) {
      player2Income++;
    }
    if (
      game.map[el + 12].type === "mountain" ||
      game.map[el + 12].type === "water"
    ) {
      player2Income++;
    }
    if (
      game.map[el - 12].type === "mountain" ||
      game.map[el - 12].type === "water"
    ) {
      player2Income++;
    }

    player2Score += player2Income;
    playerTurn++;
  }
  console.log(
    "Player 1 score: ",
    player1Score,
    " | Player 1 income:",
    player1Income
  );
  console.log(
    "Player 2 score: ",
    player2Score,
    " | Player 2 income:",
    player2Income
  );
  if (player1Score >= 100) {
    console.log("Player 1 wins!");
  }
  if (player2Score >= 100) {
    console.log("Player 2 wins!");
  }
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
