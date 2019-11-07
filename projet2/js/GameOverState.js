class GameOverState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the game over on the screen
    text("GAME OVER!",0,0);
  }

  mousePressed() {
    // Nothing, because the game is over
  }
}
