class PlayState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we draw the game on the screen
    background(bgImage);
    console.log("Play");
    textFont();
    textSize(15);
    textAlign(CENTER,LEFT);
    noStroke();
    //Indigo monochromatic : #2e004f
    fill("#2E0854");
    text("Click to make visuals!", windowWidth -200, 40);

    //Here is where the game starts (to-do)
    // Handle input for the player
    // player.handleInput();

    // Move the player + add cat
    // player.move();


    // Display the player + add cat
    // player.display();

  }

  mousePressed() {
    // must find another place to reset game
    // currentScene = titleScene;

    // Handle visuals and librairies
    // brainstorm:
    // pixelmatrix
    // gradient
    // lines
}
