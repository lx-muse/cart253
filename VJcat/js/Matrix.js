//adapted from purple rain challenge from The Coding Train https://youtu.be/KkyIDI6rQJI
class Matrix {
  //rain drops
  constructor(rainX, rainY, rainSpeed) {
    this.rainX = random(0,1100);
    this.rainY = random(100,200);
    this.rainSpeed = 0.00001;
  }

  fall() {
    this.rainY += this.rainY + this.rainSpeed;
      console.log("matrix fall")
  }
  display() {
    //purple rose. 20px long
    stroke("#5E2D79");
    line(this.rainX, this.rainY, this.rainX, this.rainY +20);
    console.log("matrix display")
  }
}
