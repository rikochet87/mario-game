import { canvas, c } from "./index";

const gravity = 0.7;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 30;
    this.height = 30;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
  }
}

class Plataform {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    (this.image = image),
      (this.width = image.width),
      (this.height = image.height);
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObjet {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    (this.image = image),
      (this.width = image.width),
      (this.height = image.height);
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

export { Player, Plataform, GenericObjet };
