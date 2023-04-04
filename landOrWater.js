class landOrWater {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.image;
  }

  landOrWater() {
    if (Math.random() < 0.5) {
      console.log("land");
      this.landImage;
    } else {
      console.log("water");
      this.waterImage;
    }
  }
}
