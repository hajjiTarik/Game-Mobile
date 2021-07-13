class Engine {
  constructor(timeStep, update, render) {
    this.accumulatedTime = 0; // le nombre d'accumation de temps avant la derniere actualisation.
    this.animationRequestFrame = undefined;
    this.time = undefined; // dernier temps ou la boucle c'est executer
    this.timeStep = timeStep; // frames par seconde
    this.update = update;
    this.render = render;
    this.updated = false;
  }

  /**
   * @description pour chaque iteration de la fonction run un cycle du jeu est executé.
   * @param timeStep
   */
  run(timeStep) {
    this.accumulatedTime += timeStep - this.time;
    this.time = timeStep;

    /*
        si le support d'exécution est long, les changements vont prendre plus de temps que time step
        cela pourra saturer le cpu, pour prévenir à cela on récupère le lag mémoire avant, et on fait
        en sorte que pour chaque trois frames au moins une update ait été fait.
        - cela permet au moins de ne pas crasher :/
        */
    if (this.accumulatedTime >= this.timeStep * 3) {
      this.accumulatedTime = this.timeStep;
    }

    while (this.accumulatedTime >= this.timeStep) {
      this.accumulatedTime -= this.timeStep;
      this.update(timeStep);
      this.updated = true;
    }

    // permet de redessiner seulement si la valeur updated = true:
    if (this.updated) {
      this.updated = false;
      this.render(timeStep);
    }

    this.animationRequestFrame = window.requestAnimationFrame(this.handleRun);
  }

  start() {
    this.accumulatedTime = this.timeStep;
    this.time = window.performance.now();
    this.animationRequestFrame = window.requestAnimationFrame(this.handleRun);
  }

  stop() {
    window.cancelAnimationFrame(this.animationRequestFrame);
  }

  handleRun = (timeStep) => this.run(timeStep);
}

export default Engine;
