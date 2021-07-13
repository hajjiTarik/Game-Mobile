import "@/styles/index.scss";
import Engine from "./js/Engine";
import Display from "./js/Display";
import Game from "./js/Game/Game";
import Controller from "./js/Controller";

const InitGame = () => {
  const game = new Game();
  const display = new Display(
    document.querySelector("canvas"),
    game.world.width,
    game.world.height
  );
  const controller = new Controller();

  const keyDownUp = function (event) {
    controller.keyDownUp(event.type, event.keyCode);
  };

  const render = () => {
    display.fill(game.world.backgroundColor);
    display.drawRectangle(
      game.world.player.x,
      game.world.player.y,
      game.world.player.width,
      game.world.player.height,
      game.world.player.color
    );
    display.render();
  };

  const update = () => {
    if (controller.left.active) {
      game.world.player.moveLeft();
    }
    if (controller.right.active) {
      game.world.player.moveRight();
    }
    if (controller.up.active) {
      game.world.player.jump();
      controller.up.active = false;
    }

    game.update();
  };

  const engine = new Engine(1000 / 30, update, render);

  window.addEventListener("keydown", keyDownUp);
  window.addEventListener("keyup", keyDownUp);

  engine.start();
};

InitGame();
