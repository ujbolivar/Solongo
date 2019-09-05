const myCanvasDOMEl = document.getElementById('canvas');
const ctx = myCanvasDOMEl.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
const size = Math.round(canvas.width / 50);
const snake = [{x: 0, y: 0}];
let direction = 'right';
let speed = 200;
const food = {};

function setCanvasDimensions() {
    // x axis
    myCanvasDOMEl.setAttribute("width", `${w}px`);
    // y axis
    myCanvasDOMEl.setAttribute("height", `${h}px`);
}

function setFood() {
    food.x = Math.round(random(size, w - size) / size) * size;
    food.y = Math.round(random(size, h - size) /size) * size;
}

function random (min, max) {
    return Math.random() * (max - min) + min;
}

function move() {
    for (let i = snake.length - 1; i >= 0; i--) {
        // if (i === 0 && snake[i].x === food.x && snake[i].y === food.y) {
        //     snake.push({});
        //     speed += 0.99;
        //     setFood();
        // }
        
        const s = snake[i];
        
        if (i == 1) {
            switch(direction) {
                case 'right':
                snake[i].x += size;
                break;
                case 'down':
                snake[i].y += size;
                break;
                case 'left':
                snake[i].x -= size;
                break;
                case 'up':
                snake[i].y -= size;
                break;
            }
        } else {
            snake[i].x = snake[i-1].x;
            snake[i].y = snake[i-1].y;
        }
    } 
}    


function setTimeId(param1,param2) {
    window.setTimeout(move, speed); 
};

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function onKeyDown(e) {
    const newDirection = e.key.substr(5).toLowerCase();
    direction = newDirection;
}

window.addEventListener('keydown', onKeyDown);
/*var Game = {
    canvas: undefined,
    // myCanvasDOMEl: document.getElementById('canvas'),
    // ctx: myCanvasDOMEl.getContext("2d"),
    w: window.innerWidth,
    h: window.innerHeight,
    size: Math.round(canvas.width / 50),
    snake: [{x: 0, y: 0}],
    food: {},
    direction: 'right',
    speed: 200,
    
    init: function(canvasID) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        function setCanvasDimensions() {
            // x axis
            myCanvasDOMEl.setAttribute("width", `${w}px`);
            // y axis
            myCanvasDOMEl.setAttribute("height", `${h}px`);
        }
        
        
        
        function random (min, max) {
            return Math.random() * (max - min) + min;
        }
        
        function draw() {
            for (let i = 0; i < snake.length; i += 1) {
                const s = snake[i];
                ctx.fillStyle = 'red';
                ctx.fillRect(s.x, s.y, size, size);
            }
        }
        
        function tick() {
            for (let i=snake.length-1; i>=0; i--) {
                const s = snake[i];
                if (i == 0) {
                    snake[i].x += size;
                    snake[i].y += size;
                } else {
                    snake[i].x += snake[i-1].x;
                    snake[i].y += snake[i-1].y ;
                } 
            } 
        }    
        
        function setTimeId(param1,param2) {
            window.setTimeout(tick, speed); 
        };
        
        function clear() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}
}*/