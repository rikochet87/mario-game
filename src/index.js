import { Plataform, Player, GenericObjet } from "./player";
import platform from "../img/platform.png";
import hills from "../img/hills.png";
import background from "../img/background.png";
import platformSmallTall from "../img/platformSmallTall.png";

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
let platformSmallTallImage = createImage(platformSmallTall);

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
    new Plataform({
      x: plataformImage.width * 4 + 300 - 2 + plataformImage.width - platformSmallTallImage.width,
      y: 300,
      image: createImage(platformSmallTall),
    }),
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
    new Plataform({
      x: plataformImage.width * 3 + 300,
      y: 470,
      image: plataformImage,
    }),
    new Plataform({
      x: plataformImage.width * 4 + 300 - 2,
      y: 470,
      image: plataformImage,
    }),
    new Plataform({
      x: plataformImage.width * 5 + 700 - 2,
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
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += player.speed;
      plataforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjets.forEach((genericObjet) => {
        genericObjet.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= player.speed;
      plataforms.forEach((platform) => {
        platform.position.x -= -player.speed;
      });
      genericObjets.forEach((genericObjet) => {
        genericObjet.position.x += player.speed * 0.66;
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
  if (scrollOffset > plataformImage.width * 5 + 300 - 2) {
    console.log("you win");
  }
  //lose condition
  if (player.position.y > canvas.height) {
    init();
  }
}

init();
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
