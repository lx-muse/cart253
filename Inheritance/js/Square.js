class Square extends Shape {
  constructor(x,y,size) {
    super(x,y,size);
  }
  display() {
    push();
    rectMode(CENTER);
    fill(255,0,0);
    noStroke();
    rect(this.x,this.y,this.size,this.size);
    pop();
  }
}

// If we dont define a method ex: update() it will use it's parent's
