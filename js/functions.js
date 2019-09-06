const canvas2DOMEl = document.getElementById('canvas');
const ctx = canvas2DOMEl.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
const size = Math.round(canvas.width / 40);
const xEdge = Math.round(canvas.width / size) * (size * 2);
const yEdge = Math.round(canvas.height / size) * (size * 2);
let cruiseControl = false;
let score = 0;
let fps = 60;
var snakeHead = new Image();

//States
const snake = [{x: Math.round(random(size, w - size) / size) * size, y: Math.round(random(size, h - size) / size) * size}];
// const snake = [{x: 330, y: 330}];
const food = [];
let direction = randomDirection();
let speed = 50;

// create the snake
// function createSnake(snake) {
//     if (snake.x >= w ) {
//         snake.x = w / 2,
//         snake.y = h / 2
//     }
// }

// the score text
function text(txt, fnt, x, y, c) {
    ctx.fillStyle = c;
    ctx.font = fnt;
    ctx.fillText(txt, x, y)
}

//sets the field
function setCanvasDimensions() {
    // x axis
    canvas2DOMEl.setAttribute("width", `${w}px`);
    // y axis
    canvas2DOMEl.setAttribute("height", `${h}px`);
}

//snake starts in random direction
function randomDirection () {
    let directionsArr = ['right', 'left', 'up', 'down'];
    let rand = Math.random();
    let randIndex = Math.floor(rand * directionsArr.length);
    let randomSingleDirection = directionsArr[randIndex];
    return randomSingleDirection;
}

//Drop the food on the grid
function setFood() {
    food.x = Math.round(random(size, w - size) / size) * size;
    food.y = Math.round(random(size, h - size) / size) * size;
}
//randomizing function
function random (min, max) {
    return Math.random() * (max - min) + min;
}
//make the snake walk
function move() {
    for (let i=snake.length-1; i>=0; i--) { 
        if (i === 0 && snake[i].x === food.x && snake[i].y === food.y) {
                snake.push({});
                speed *= 0.99;
                setFood();
                score++;
            }        
            const s = snake[i];
            if (i == 0) {
                switch(direction) {
                    case 'right':
                    if (s.x > canvas.width - (size * 2)) gameOver();
                    s.x += size;
                    break;
                    case 'down':
                    if (s.y > canvas.height - (size * 2)) gameOver();
                    s.y += size;
                    break;
                    case 'left':
                    if (s.x < 0  + size) gameOver();
                    s.x -= size;
                    break;
                    case 'up':
                    if (s.y < 0 + size) gameOver();
                    s.y -= size;
                    break;
                }
                for(let j = 1; j < snake.length; j += 1) {
                    if (snake[0].x === snake[j].x && snake[0].y === snake[j].y) {
                        gameOver();
                    }


                }
            } else {
                snake[i].x = snake[i-1].x;
                snake[i].y = snake[i-1].y;
            }
        } cruiseControl = false;
    }    
    //ends game
    function gameOver() {
        alert('GAME OVER');
        window.location.reload();
    }
    
    function setTimeId(param1,param2) {
        window.setTimeout(move, speed); 
    };
    
    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    //directions
    function onKeyDown(e) {
        if (!cruiseControl) {
            cruiseControl = true;
            const newDirection = e.key.substr(5).toLowerCase();
            
            if (direction === 'left' && newDirection !== 'right') direction = newDirection;
            if (direction === 'up' && newDirection !== 'down') direction = newDirection;
            if (direction === 'down' && newDirection !== 'up') direction = newDirection; 
            if (direction === 'right' && newDirection !== 'left') direction = newDirection;
        }
    } 
    window.addEventListener('keydown', onKeyDown);