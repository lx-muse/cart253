class PlayState extends Scene {
  constructor() {
    super();
    //let variables for keys
    let squareD = new Square(270,749,25,25);
  }

  draw() {
    console.log(mouseX,mouseY);

    //let variables for shapes
    let circle1 = new Circle (mouseX,mouseY,random(50,100), "#2e004f");

    // draw the game on the screen and insert stuff
    background(bgImage);
    textFont();
    textSize(15);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    fill("#2E0854");
    text("Click and hold to make visuals!\n" +"to be continued...", width / 2, height / 4);

    //calling game objects
    keyboard.draw();

    cat.display();
    cat.move();
    cat.handleBouncing();


    //calling visuals (to-do)

    if(mouseIsPressed){
      //lavender
      circle1.update();
      circle1.display();

    }
  }


  keyPressed(){
    keyboard.keyPressed();
  }


  mousePressed() {
    //find another place to reset game (to-do)
    // currentScene = titleScene;

    // Handle visuals and librairies with new shape classes (to-do)
    // brainstorm:
    // pixelmatrix
    // gradient
    // lines
    // mouseDragged
  }
}
