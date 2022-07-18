import { Plataform, Player } from "./player";
import platform from "../img/platform.png"

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const image = new Image()
image.src = platform

const player = new Player();
const plataforms = [
  new Plataform({ x: -1, y: 470, image}),
  new Plataform({ x: image.width - 3, y: 470, image}),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white"
  c.fillRect(0, 0, canvas.width, canvas.height);
  plataforms.forEach((platform) => {
    platform.draw();
  });
  player.update();


  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += 5
      plataforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5
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
  if(scrollOffset > 2000){
    console.log("you win");
  }
  
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

export { c, canvas};
