var paddle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
}

function draw() {
  background(180);

  paddle.display();
  paddle.move(15);
}
