//constraint function??

let ball;
let block;
let paddle;
let blockRows = 8;
let blockCols = 6;
let blocks = [];

let aspectRatio = 500 / 600; // Width divided by height
let canvasWidth, canvasHeight;

function setup() {
  
  //determine if device is mobile or desktop
  detectDevice();
  let maxWidth = windowWidth;
  let maxHeight = windowHeight;

  if (maxWidth / maxHeight > aspectRatio) {
    canvasHeight = maxHeight;
    canvasWidth = canvasHeight * aspectRatio;
  } else {
    canvasWidth = maxWidth;
    canvasHeight = canvasWidth / aspectRatio;
  }

  //ratios adjusted for device type
  createCanvas(canvasWidth, canvasHeight);

  ball = new Ball();
  paddle = new Paddle();

  for (let row = 0; row < blockRows; row++) {
    for (let col = 0; col < blockCols; col++) {
      
      let blockScl = canvasHeight / 20;
      let x = canvasWidth / 12 + col * (canvasWidth / blockCols); // Calculate block x position
      let y = blockScl + row * (canvasHeight / (blockRows * 2.5)); // Calculate block y position
      blocks.push(new Block(x, y));
    }
  }
}

function draw() {

    background(64, 90);

    for (let block of blocks) {
    block.show();
    }
  
    ball.show();
    ball.update();
    paddle.show();
    paddle.desktopMove(9);
    paddle.mobileMove(3);

}

//detect touch for mobile paddle movement
function touchStarted() {
  paddle.leftTouch = false;
  paddle.rightTouch = false;

  let buffer = width / 20; // Adjust as needed

  for (let touch of touches) {
    if (touch.x < width / 2 - buffer) {
      paddle.leftTouch = true;
    } else if (touch.x > width / 2 + buffer) {
      paddle.rightTouch = true;
    }
  }
  //return false; //prevent default behaviour on mobile
}

function touchEnded() {
  paddle.leftTouch = false;
  paddle.rightTouch = false;
  
}

//resize mobile window if switched to wide view
function windowResized() {
  let maxWidth = windowWidth;
  let maxHeight = windowHeight;

  if (maxWidth / maxHeight > aspectRatio) {
    canvasHeight = maxHeight;
    canvasWidth = canvasHeight * aspectRatio;
  } else {
    canvasWidth = maxWidth;
    canvasHeight = canvasWidth / aspectRatio;
  }

  resizeCanvas(canvasWidth, canvasHeight);
}
