/******************************************************************************
Where's Sausage Dog?
Marie-Christine Lariviere

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
Sound preview from:
https://www.proudmusiclibrary.com/en/tag/playtime
******************************************************************************/

// Position and image of the flamingo we're searching for
var targetX;
var targetY;
var targetImage;

// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;

// UI
let myFont
let clueImage
let winningStar
let song

// preload()
//
// Loads the target, decoy and clue images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");
  clueImage = loadImage("assets/images/animals-target-clue.png")
  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
  //personnalisation
  myFont = loadFont("assets/fonts/montserratMedium.otf");
  winningStar = loadImage("assets/images/star.png");
  winningSong = loadSound("assets/sounds/bjorn_lynne_-_winterland_fun.mp3");
}



// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the clue and the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#00334d");
  // #004d4d dark green background
  imageMode(CENTER);

  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability
    var r = random();
    //Generate width and height for difficulty levels, base 128 X 128
    var w = 150
    var h = 150
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    if (r < 0.1) {
      image(decoyImage1,x,y,w,h);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y,w,h);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y,w,h);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y,w,h);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y,w,h);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y,w,h);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y,w,h);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y,w,h);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y,w,h);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y,w,h);
    }
  }

  image(clueImage,windowWidth - (windowWidth / 9 ), 1 / windowHeight + 80, width / 4, height / 4)
  // Once we've displayed all decoys, we choose a location for the target
  targetX = random(0,width);
  targetY = random(0,height);
  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY,w,h);
}

function draw() {
  if (gameOver) {
    // Prepare our typography
    textFont("myFont");
    textSize(100);
    textAlign(CENTER,CENTER);
    noStroke();
    fill("#b30047");
    // Tell them they won!
    text("AWESOME!",width/2,height/2);
    textSize(30);
    text("Refresh page to play again!", width / 2, height / 2 + 60)

    noFill();
    stroke("#b30047");
    strokeWeight(10);
    ellipse(targetX,targetY,targetImage.width,targetImage.height);

    //Make winning more exciting by randomly repeating the target-image
      var x = random(0,width);
      var y = random(0,height);
      imageMode(CENTER);
      image(winningStar,x,y, width/6, height/6);
      image(targetImage,x,y);

  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
      winningSong.setVolume(1,5000,0);
      winningSong.play();
    }
  }
}
