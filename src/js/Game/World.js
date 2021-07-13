import Player from "./Player";

class World {
  constructor(GameInstance, options = {}) {
    this.backgroundColor = options.backgroundColor ?? "rgb(0,159,252)";
    this.friction = options.friction ?? 0.8;
    this.gravity = options.gravity ?? 3;
    this.player = new Player(0, 0);
    this.height = options.height ?? 400;
    this.width = options.width ?? 800;
  }

  collideObject(object) {
    if (object.x < 0) {
      object.x = 0;
      object.velocityX = 0;
    } else if (object.x + object.width > this.width) {
      object.x = this.width - object.width;
    }

    if (object.y < 0) {
      object.y = 0;
      object.velocityY = 0;
    } else if (object.y + object.height > this.height) {
      object.jumping = false;
      object.y = this.height - object.height;
    }
  }

  update() {
    this.player.velocityY += this.gravity;
    this.player.update();

    this.player.velocityX *= this.friction;
    this.player.velocityY *= this.friction;

    this.collideObject(this.player);
  }
}

export default World;
