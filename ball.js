class Ball {
    constructor() {
      this.pos = createVector(width / 5, height / 2);
      this.incrementX = 7; //refactor increment into vector quantity?
      this.incrementY = 8;
      this.rad = width /35; //viewport proportional
    }
    
    show() {
      // draw the circle and colour it
      // colour changes based on ball's position
      let colR = map(this.pos.y, 0, height, 80, 255);
      let colG = map(this.pos.x, 0, height, 80, 200);
      let colB = (random(100, 200));
   
      strokeWeight(2);
      fill(colR, colG, colB);
      ellipse(this.pos.x, this.pos.y, this.rad * 2);
    }
    
    update() {
      //update ball's position and check collisions
      this.pos.x += this.incrementX;
      this.pos.y += this.incrementY;
      this.checkBlocks(blocks);
      this.checkEdges();
      this.checkPaddle();
    }
    
    checkEdges() {
      if (this.pos.x > width - this.rad || this.pos.x < this.rad) {
        this.incrementX *= -1;
      }
      if (this.pos.y < this.rad || this.pos.y + this.rad > height) {
        this.incrementY *= -1;
      }

      //GAME OVER 
      // if (this.pos.y + this.rad > height) {
      //   //game over state if ball goes past paddle
      //   console.log("GAME OVER")
      //   noLoop();
      // }
    }
    
    checkPaddle() {
      // Corner positions of the paddle
      const corners = [
        createVector(paddle.pos.x - paddle.width / 2, paddle.pos.y - paddle.height / 2), // top-left
        createVector(paddle.pos.x + paddle.width / 2, paddle.pos.y - paddle.height / 2), // top-right
        createVector(paddle.pos.x - paddle.width / 2, paddle.pos.y + paddle.height / 2), // bottom-left
        createVector(paddle.pos.x + paddle.width / 2, paddle.pos.y + paddle.height / 2)  // bottom-right
      ];
      
      // Check corner collisions
      for (let corner of corners) {
        let d = dist(this.pos.x, this.pos.y, corner.x, corner.y);
        if (d <= this.rad) {
          //console.log(' paddle corner collision detected!');
          this.incrementX *= -1;
          this.incrementY *= -1;
          return; // Exit after detecting a corner collision
        }
      }
      
      // Top side
      if (this.pos.y + this.rad >= paddle.pos.y - paddle.height / 2 &&
          this.pos.y < paddle.pos.y &&
          this.pos.x > paddle.pos.x - paddle.width / 2 &&
          this.pos.x < paddle.pos.x + paddle.width / 2
      ) {
        this.incrementY *= -1;
        return;
      }
    
      // Bottom side
      else if (this.pos.y - this.rad <= paddle.pos.y + paddle.height / 2 &&
               this.pos.y > paddle.pos.y &&
               this.pos.x > paddle.pos.x - paddle.width / 2 &&
               this.pos.x < paddle.pos.x + paddle.width / 2
      ) {
        this.incrementY *= -1;
        return;
      }
    
      // Right side
      else if (this.pos.x - this.rad <= paddle.pos.x + paddle.width / 2 &&
               this.pos.x > paddle.pos.x &&
               this.pos.y > paddle.pos.y - paddle.height / 2 &&
               this.pos.y < paddle.pos.y + paddle.height / 2
      ) {
        this.incrementX *= -1;
        return;
      }
    
      // Left side
      else if (this.pos.x + this.rad >= paddle.pos.x - paddle.width / 2 &&
               this.pos.x < paddle.pos.x &&
               this.pos.y > paddle.pos.y - paddle.height / 2 &&
               this.pos.y < paddle.pos.y + paddle.height / 2
      ) {
        this.incrementX *= -1;
        return;
        }
      }

    checkBlocks(blocks) {
      
    for (let block of blocks) {
      // Corner positions of the block
      const corners = [
        createVector(block.x - block.width / 2, block.y - block.height / 2), // top-left
        createVector(block.x + block.width / 2, block.y - block.height / 2), // top-right
        createVector(block.x - block.width / 2, block.y + block.height / 2), // bottom-left
        createVector(block.x + block.width / 2, block.y + block.height / 2)  // bottom-right
      ];
      
      // Check corner collisions
      for (let corner of corners) {
        let d = dist(this.pos.x, this.pos.y, corner.x, corner.y);
        if (d <= this.rad) {
          //console.log('corner collision detected!');
          this.incrementX *= -1;
          this.incrementY *= -1;
          blocks.splice(blocks.indexOf(block), 1);
          return; // Exit after detecting a corner collision
        }
      }
      
      // Top side
      if (this.pos.y + this.rad >= block.y - block.height / 2 &&
          this.pos.y < block.y &&
          this.pos.x > block.x - block.width / 2 &&
          this.pos.x < block.x + block.width / 2
      ) {
        //console.log('top side collision detected!');
        this.incrementY *= -1;
        blocks.splice(blocks.indexOf(block), 1);
        return;
      }
  
      // Bottom side
      else if (this.pos.y - this.rad <= block.y + block.height / 2 &&
               this.pos.y > block.y &&
               this.pos.x > block.x - block.width / 2 &&
               this.pos.x < block.x + block.width / 2
      ) {
        //console.log('bottom side collision detected!');
        this.incrementY *= -1;
        blocks.splice(blocks.indexOf(block), 1);
        return;
      }
    
      // Right side
      else if (this.pos.x - this.rad <= block.x + block.width / 2 &&
               this.pos.x > block.x &&
               this.pos.y > block.y - block.height / 2 &&
               this.pos.y < block.y + block.height / 2
      ) {
        //console.log('right side collision detected!');
        this.incrementX *= -1;
        blocks.splice(blocks.indexOf(block), 1);
        return;
      }
  
      // Left side
      else if (this.pos.x + this.rad >= block.x - block.width / 2 &&
               this.pos.x < block.x &&
               this.pos.y > block.y - block.height / 2 &&
               this.pos.y < block.y + block.height / 2
      ) {
        //console.log('left side collision detected!');
        this.incrementX *= -1;
        blocks.splice(blocks.indexOf(block), 1);
        return;
        }
      }
    }
  }
