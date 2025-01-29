class Block {
    constructor(x, y) {
      this.width = canvasWidth / 7; // Adjust relative to canvas width
      this.height = canvasHeight / 30; // Adjust relative to canvas height
      this.x = x;
      this.y = y;
    }
  
    show() {
   
    strokeWeight(2);
    fill(155, 20, 150);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    }
  }
