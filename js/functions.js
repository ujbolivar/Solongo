const myCanvasDOMEl = document.getElementById('canvas');
const ctx = myCanvasDOMEl.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
const size = Math.round(canvas.width / 50);
const xEdge = Math.round(canvas.width / size) * (size * 2);
const yEdge = Math.round(canvas.height / size) * (size * 2);
let cruiseControl = false;

//States
const snake = [{x: Math.round(random(size, w - size) / size) * size, y: Math.round(random(size, h - size) / size) * size}];
const food = [];
let direction = 'right';
let speed = 200;

function setCanvasDimensions() {
    // x axis
    myCanvasDOMEl.setAttribute("width", `${w}px`);
    // y axis
    myCanvasDOMEl.setAttribute("height", `${h}px`);
}

// function direction () {

// }

function setFood() {
    food.x = Math.round(random(size, w - size) / size) * size;
    food.y = Math.round(random(size, h - size) / size) * size;
}

function random (min, max) {
    return Math.random() * (max - min) + min;
}

function move() {
    for (let i=snake.length-1; i>=0; i--) { 
        if (i === 0 && snake[i].x === food.x && snake[i].y === food.y) {
                snake.push({});
                speed *= 0.99;
                setFood();
            }        
            const s = snake[i];
            if (i == 0) {
                switch(direction) {
                    case 'right':
                    if (s.x > canvas.width) gameOver();
                    s.x += size;
                    break;
                    case 'down':
                    if (s.y > canvas.height) gameOver();
                    s.y += size;
                    break;
                    case 'left':
                    if (s.x < 0) gameOver();
                    s.x -= size;
                    break;
                    case 'up':
                    if (s.y < 0) gameOver();
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