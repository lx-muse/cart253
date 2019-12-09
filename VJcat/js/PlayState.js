class PlayState extends Scene {
  constructor() {
    super();

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
    // text("Make visuals!\n", width / 2, height / 4);

    //calling game objects functions
    keyboard.draw();

    cat.display();
    cat.move();
    cat.handleBouncing();
    // cat.handleKey();

    //calling visuals for letter B, a buch of little balls
    if(keyCode === 66) {
      circle2.update();
      circle2.display();
    }
    //D code draws a tree
    if(keyCode === 68) {
      strokeWeight(3);
      stroke("#28098d ");
      //root of tree
      translate(450,600);
      branch(200);

      //a fucntion for the tree key
      function branch(len){
        line(0, 0, 0, 0 - len);
        translate(0,-len);
        if (len > 4) {
          push();
          rotate(PI/3);
          branch(len*0.67);
          pop();
          push();
          rotate(-PI/3);
          branch(len*0.67);
          pop();
        }
      }
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
    //R code
    if(keyCode === 82){
      for ( let i = 0; i < numDrops ; i++){
        rain[i].display();
        rain[i].fall();
      }
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
