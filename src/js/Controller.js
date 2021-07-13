class Controller {
  constructor() {
    this.left = new ButtonInput();
    this.right = new ButtonInput();
    this.up = new ButtonInput();
  }

  keyDownUp(type, key_code) {
    const down = type === "keydown";

    switch (key_code) {
      case 37:
        this.left.getInput(down, "left");
        break;
      case 38:
        this.up.getInput(down, "up");
        break;
      case 39:
        this.right.getInput(down, "right");
        break;
    }
  }
}

class ButtonInput {
  constructor() {
    this.active = false;
    this.down = false;
  }

  getInput(down) {
    if (this.down !== down) this.active = down;
    this.down = down;
  }
}

export default Controller;
