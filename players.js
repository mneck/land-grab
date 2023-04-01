class Players {
  constructor(number) {
    this.number = 0;
  }

  Player1() {
    this.number = 1;

    // builds mining settlements & farms
    // mining settlements get +1 income from adjacent mountain & forest tiles
    return this.number;
  }

  Player2() {
    this.number = 2;

    // builds resort settlements & farms
    // resort settlements get +1 income from adjacent water tiles
    return this.number;
  }
}
