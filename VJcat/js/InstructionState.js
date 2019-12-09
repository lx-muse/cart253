class InstructionsState extends Scene {
  constructor() {
    super();
    let matrix = new Matrix (width/2, 0, 1);
  }
  //Added a setup() to draw the background only once
  setup(){
    background(bgImage);

  }

  draw() {
    //Ambiant background
    matrix.display();
    matrix.fall();
      // This part displays the rain effect
    for ( let i = 0; i < numDrops ; i++){
      rain[i].display();
      rain[i].fall();
    }

    // Here we draw the instructions on the screen
    console.log("Instructions")
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    push();
    fill("#2E0854");
    text("Try stuff, see what happens", width / 2, height / 2 - 100);
    pop();
    push();
    fill("#2e004f");
    textSize(30);
    //Tell the user what's up
    text("Play with keyboard\n",width / 2, height / 2 + 60);
    pop();

  }

  mousePressed() {
    currentScene = playScene;
  }
}
