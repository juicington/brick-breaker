class Brick {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 20;
  }
  
  show() {
    rect(this.x, this.y, this.w, this.h);
  }
}
