import { Plataform, Player, GenericObjet } from "./player";
import platform from "../img/platform.png";
import hills from "../img/hills.png";
import background from "../img/background.png";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

let plataformImage = createImage(platform);

let player = new Player();
let plataforms = [
  new Plataform({ x: -1, y: 470, image: plataformImage }),
  new Plataform({ x: plataformImage.width - 3, y: 470, image: plataformImage }),
  new Plataform({
    x: plataformImage.width * 2 + 100,
    y: 470,
    image: plataformImage,
  }),
];
let genericObjets = [
  new GenericObjet({
    x: -1,
    y: -1,
    image: createImage(background),
  }),
  new GenericObjet({
    x: -1,
    y: -1,
    image: createImage(hills),
  }),
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

function init() {
  plataformImage = createImage(platform);

  player = new Player();
  plataforms = [
    new Plataform({ x: -1, y: 470, image: plataformImage }),
    new Plataform({
      x: plataformImage.width - 3,
      y: 470,
      image: plataformImage,
    }),
    new Plataform({
      x: plataformImage.width * 2 + 100,
      y: 470,
      image: plataformImage,
    }),
  ];
  genericObjets = [
    new GenericObjet({
      x: -1,
      y: -1,
      image: createImage(background),
    }),
    new GenericObjet({
      x: -1,
      y: -1,
      image: createImage(hills),
    }),
  ];

  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjets.forEach((genericObjet) => {
    genericObjet.draw();
  });

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
      scrollOffset += 5;
      plataforms.forEach((platform) => {
        platform.position.x -= 5;
      });
      genericObjets.forEach((genericObjet) => {
        genericObjet.position.x -= 3;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      plataforms.forEach((platform) => {
        platform.position.x -= -5;
      });
      genericObjets.forEach((genericObjet) => {
        genericObjet.position.x += 3;
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
  //win condition
  if (scrollOffset > 2000) {
    console.log("you win");
  }
  //lose condition
  if (player.position.y > canvas.height) {
    init();
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

export { c, canvas };
