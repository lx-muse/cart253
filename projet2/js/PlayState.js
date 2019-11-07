class PlayState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the game on the screen
    text("THE GAME IS ON!",0,0);
    text("IF YOU CLICK THE GAME IS OVER!",0,0);
  }

  mousePressed() {
    state = gameOverScene;
  }
}
