class Paddle {
    constructor(){
    //adjust width and height to be proportional to windowsize 
      this.width = width / 6;
      this.height = height / 40;
      this.pos = createVector(width / 2, height - 40);
      
    //track touch states
      this.leftTouch = false;
      this.rightTouch = false;
    }
  
    show() {
      fill('white');
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, this.width, this.height);
    }
  
    desktopMove(step) {
      //prevents paddle extending past the window
      //left edge
      if (this.pos.x - this.width / 2 < 0) {
        this.pos.x = this.width / 2 + 1;
      }
      //right edge 
      else if (this.pos.x + this.width / 2 > width) {
        this.pos.x = width - this.width / 2;
      }
      
      
      if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
        this.pos.x += step * -1;
        console.log('left key or A has been pressed');
        
      } 
      if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
        this.pos.x += step;
        console.log('right key or D has been pressed');
      }
      
      //mobile: touch detected, move left
      if (this.leftTouch === true) {
        this.pos.x += step * -1;
      }
      //mobile: touch detected, move right
      if (this.rightTouch === true) {
        this.pos.x += step;
      }
    }
  
    mobileMove(step) {
      //prevents paddle extending past the window
      //left edge
      if (this.pos.x - this.width / 2 < 0) {
        this.pos.x = this.width / 2 + 1;
      }
      //right edge 
      else if (this.pos.x + this.width / 2 > width) {
        this.pos.x = width - this.width / 2;
      }
      
      //mobile: touch detected, move left
      if (this.leftTouch === true) {
        this.pos.x += step * -1;
      }
      //mobile: touch detected, move right
      if (this.rightTouch === true) {
        this.pos.x += step;
      }
    }
  }
