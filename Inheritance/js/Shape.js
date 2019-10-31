class Shape {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x += random(-1,1);
    this.y += random(-1,1);
  }
  display() {
    // A generic shape cannot be displayed
    // Must add display() in every children
    // But it makes sense to tell anyone extending this class to include one!
    console.log("Error! Generic shape cannt be display!")
  }
}
