const canvas2DOMEl = document.getElementById("canvas");
const ctx = canvas2DOMEl.getContext("2d");
const size = 30;
const totalGameWidthTiles = 35
const totalGameHeightTiles = 16

const w = size * totalGameWidthTiles
const h = size * totalGameHeightTiles

canvas2DOMEl.setAttribute("width", `${w}px`);
canvas2DOMEl.setAttribute("height", `${h}px`);

let cruiseControl = false;
let score = 0;
let fps = 60;

// debugger

//States
let snake = [
  {
    x: randomInt(1, totalGameWidthTiles - 1) * size ,
    y: randomInt(1, totalGameHeightTiles - 1) * size ,
  }
];
//let snake = [];
const food = [];
let direction = randomDirection();
let speed = 200;

function text(txt, fnt, x, y, c) {
  ctx.fillStyle = c;
  ctx.font = fnt;
  ctx.fillText(txt, x, y);
}

//sets the field
function setCanvasDimensions() {
//   // x axis
//   canvas2DOMEl.setAttribute("width", `${w * 0.58}px`);
//   // y axis
//   canvas2DOMEl.setAttribute("height", `${h * 0.81}px`);
}

//snake starts in random direction
function randomDirection() {
  let directionsArr = ["right", "left", "up", "down"];
  let rand = Math.random();
  let randIndex = Math.floor(rand * directionsArr.length);
  let randomSingleDirection = directionsArr[randIndex];
  return randomSingleDirection;
}

//Drop the food on the grid
function setFood() {
  food.x = randomInt(1, totalGameWidthTiles - 1) * size
  food.y = randomInt(1, totalGameHeightTiles - 1) * size
}
//randomizing function
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// by dani :)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//make the snake walk
function move() {
  for (let i = snake.length - 1; i >= 0; i--) {
    if (i === 0 && snake[i].x === food.x && snake[i].y === food.y) {
      snake.push({});
      speed *= 0.80;
      setFood();
      score++;
    }
    const s = snake[i];
    if (i == 0) {
      switch (direction) {
        case "right":
          if (s.x > canvas.width - size * 1.7) gameOver();
          s.x += size;
          break;
        case "down":
          if (s.y > canvas.height - size * 1.7) gameOver();
          s.y += size;
          break;
        case "left":
          if (s.x < 0 + size) gameOver();
          s.x -= size;
          break;
        case "up":
          if (s.y < 0 + size) gameOver();
          s.y -= size;
          break;
        default:
          return;
      }
      for (let j = 1; j < snake.length; j += 1) {
        if (snake[0].x === snake[j].x && snake[0].y === snake[j].y) {
          gameOver();
        }
      }
    } else {
      snake[i].x = snake[i - 1].x;
      snake[i].y = snake[i - 1].y;
    }
  }
  cruiseControl = false;
}
//ends game
function gameOver() {
  console.log("GAME OVER");
  window.location.reload();
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setTimeId(param1, param2) {
  window.setTimeout(move, speed);
}

//directions
function onKeyDown(e) {
  if (!cruiseControl) {
    cruiseControl = true;
    const newDirection = e.key.substr(5).toLowerCase();

    if (newDirection !== "right" && newDirection !== "up" && newDirection !== "down" && newDirection !== "left")   return

    if (direction === "left" && newDirection !== "right")
      direction = newDirection;
    if (direction === "up" && newDirection !== "down") direction = newDirection;
    if (direction === "down" && newDirection !== "up") direction = newDirection;
    if (direction === "right" && newDirection !== "left")
      direction = newDirection;
  }
}
window.addEventListener("keydown", onKeyDown);
