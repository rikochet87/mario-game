import { Plataform, Player } from "./player";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player();
const plataforms = [
  new Plataform({ x: 200, y: 100 }),
  new Plataform({ x: 500, y: 200 }),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  plataforms.forEach((platform) => {
    platform.draw();
  });

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      plataforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      plataforms.forEach((platform) => {
        platform.position.x -= -5;
      });
    }
  }

  // plataform conllision detection
  plataforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });
}
animate();

(function () {
  addEventListener("keydown", ({ keyCode }) => {
    switch (keyCode) {
      case 65:
        console.log("left");
        keys.left.pressed = true;
        break;

      case 83:
        console.log("down");
        break;

      case 68:
        console.log("right");
        keys.right.pressed = true;
        break;

      case 87:
        console.log("up");
        player.velocity.y -= 20;
        break;
    }
  });
})();

(function () {
  addEventListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
      case 65:
        console.log("left");
        keys.left.pressed = false;
        break;

      case 83:
        console.log("down");
        break;

      case 68:
        console.log("right");
        keys.right.pressed = false;
        break;

      case 87:
        console.log("up");
        player.velocity.y = 0;
        break;
    }
  });
})();

export { c, canvas };
