class Player {
  constructor() {
    this.color = "rgba(67,201,101,0.9)";
    this.height = 60;
    this.jumping = false;
    this.velocityX = 0;
    this.velocityY = 0;
    this.width = 60;
    this.x = 0;
    this.y = 0;
  }

  jump() {
    if (!this.jumping) {
      this.velocityY -= 70;
      this.jumping = true;
    }
  }

  moveLeft() {
    this.velocityX -= 1;
  }

  moveRight() {
    this.velocityX += 1;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

export default Player;
