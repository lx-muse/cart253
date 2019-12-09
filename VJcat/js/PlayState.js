class PlayState extends Scene {
  constructor() {
    super();
    //let variables for keys
    let squareD = new Square(270,749,25,25);
    let squareG = new Square(390,749,50,50);
  }

  draw() {
    console.log(mouseX,mouseY);

    //let variables for shapes
    let circle1 = new Circle (mouseX,mouseY,random(50,100), "#2e004f");
    let circle2 = new Circle (random(600),random(900),20, "#2e004f");

    // draw the game on the screen
    background(bgImage);
    textFont();
    textSize(15);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    fill("#2E0854");
    text("Make visuals!\n", width / 2, height / 4);

    //calling game objects functions
    keyboard.draw();

    cat.display();
    cat.move();
    cat.handleBouncing();
    // cat.handleKey();

    //calling visuals for letter D, a buch of little ellipses
    if(keyCode === 68) {
      circle2.update();
      circle2.display();
    }

    // P code
    if(keyCode === 80){
      purr.setVolume(1);
      purr.play();
    }
    //S code
    if(keyCode === 83){
      purr.stop();
    }

    //calling visuals for letter mouse click
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
    // to be continued
    // currentScene = titleScene;

    // Handle visuals and librairies with new shape classes (to-do)
    // brainstorm:
    // pixelmatrix
    // gradient
    // lines
    // mouseDragged
  }
}
