class Player1 {
  constructor() {
    this.col = 100;
    this.row = 100;
    this.image;
  }
  //draws Player1 Farms & Settlements
  mouseClicked() {
    if (mouseButton === LEFT) {
      leftPressed = true;
      //background should be farm
      if (leftPressed) {
        leftPressed = false;
        //do something
      }

      if (mouseButton === RIGHT) {
        rightPressed = true;
        //background should be town
        if (rightPressed) {
          rightPressed = false;
          //do something
        }

        // background(0);
      }
    }
  }
}

// builds resort settlements & farms
// resort settlements get +1 income from
// adjacent water & mountain tiles
class Player2 {
  constructor() {
    this.col = 100;
    this.row = 100;
    this.image;
  }
  //draws Player2 Farms & Settlements
  mouseClicked() {
    if (mouseButton === LEFT) {
      leftPressed = true;
      //background should be farm
      background(255);
    }
    if (mouseButton === RIGHT) {
      rightPressed = true;
      //background should be town
      background(0);
    }
  }
}
