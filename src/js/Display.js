class Display {
  constructor(canvas, width, height) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");
    this.canvas = canvas;
    this.context.canvas.width = width;
    this.context.canvas.height = height;
    this.buffer.canvas.height = height;
    this.buffer.canvas.width = width;
  }

  drawRectangle(x, y, width, height, color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  }

  fill(color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height
    );
  }

  render() {
    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height
    );
  }
}

export default Display;
