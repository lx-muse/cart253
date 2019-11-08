class GameOverState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the game over on the screen
    console.log("Game Over")
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //cloud blue
    fill("#D8EDF2");
    text("GAME OVER!",windowWidth / 2, windowHeight / 2 - 20);
    textSize(30);
    text("Click to play again",windowWidth / 2, windowHeight / 2 + 60);
  }

  mousePressed() {
    // We might want to play again
    currentScene = titleScene;
  }
}
