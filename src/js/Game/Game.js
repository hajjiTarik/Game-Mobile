import World from "./World";

class Game {
  constructor(options) {
    this.world = new World(this, options);
  }

  update = function () {
    this.world.update();
  };
}

export default Game;
