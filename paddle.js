class Paddle {
  constructor(w, h, pos, display){
    this.w = 160;
    this.h = 20;
    this.pos = createVector(width / 2, height - 40);
  }

  display() {
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  move(step) {
    if (this.pos.x < 0) {
      this.pos.x = 0;
    } 
    else if (this.pos.x + this.w > width) {
      this.pos.x = width - this.w;
    }
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.pos.x += step * -1;
    } else if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      this.pos.x += step;
    }
  }
}
