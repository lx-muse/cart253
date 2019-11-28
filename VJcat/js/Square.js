class Square extends Shape {
  constructor(x,y,size) {
    super(x,y,size);
  }

  display() {
    push();
    rectMode(CENTER);
    fill('rgba(204,204,255, 0.25)');
    noStroke();
    rect(this.x,this.y,this.size,this.size);
    pop();
  }

  hide() {
    push();
    rectMode(CENTER);
    fill('rgba(204,204,255, 0)');
    noStroke();
    rect(this.x,this.y,this.size,this.size);
    pop();
  }
}