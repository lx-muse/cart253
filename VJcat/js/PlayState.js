class PlayState extends Scene {
  constructor() {
    super();
  }

  draw() {
    let fillColor = "#2e004f";
    let circleX = mouseX;
    let circleY = mouseY;
    let circleSize = random(100,150);
<<<<<<< Updated upstream
    // Here we draw the game on the screen and insert librairies
=======

    // draw the game on the screen and insert stuff
>>>>>>> Stashed changes
    background(bgImage);
    console.log("Play");
    textFont();
    textSize(15);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    fill("#2E0854");
<<<<<<< Updated upstream
    text("Click and hold to make visuals!\n" +"to be continued...", windowWidth / 2, windowHeight / 4);
=======
    text("Click and hold to make visuals!\n" +"to be continued...", width / 2, height / 4);

    //calling game objects
    keyboard.draw();
    // keyboard.handleInput();

    console.log("cat playState");
    cat.display();
    // cat.move();


    //calling visuals (to-do)

>>>>>>> Stashed changes

    if(mouseIsPressed){
      //lavender
      fill(179,102,255,random(0,100));
      ellipse(mouseX,mouseY,circleSize, circleSize);
      circleSize+=random(0,100);

    }


    //Here is where the game starts (to-do)
    // Handle input for the player
    // player.handleInput();

    // Move the player + add cat
    // player.move();


    // Display the player + add cat
    // player.display();

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
    //




  }
}
