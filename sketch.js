var paddle;
var ball;
var bricks = [];
var brickCol = 6;
var brickRow = 5;
var brickW = 100;
var brickH = 20;
var xOffset = brickW + 20;
var yOffset = brickH + 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
  ball = new Ball();
  brick = new Brick();

  for (i = 0; i < brickRow; i++) {
    for (j = 0; j < brickCol; j++) {
      let x = 50 + j * xOffset;
      let y = 50 + i * yOffset;
      brick = new Brick(x, y);
      bricks.push(brick);
    }
  }
}

function draw() {
  background(180);

  paddle.display();
  paddle.move(14);
  ball.show();
  
  for (var brick of bricks) {
  brick.show();
  }
}

