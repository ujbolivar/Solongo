function draw() {
    for (let i = 0; i < snake.length; i += 1) { 
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, size, size);
        ctx.closePath();
        const s = snake[i];
        ctx.beginPath();
        if (i === 0){ctx.fillStyle = 'white';
        ctx.fillRect(s.x, s.y, size, size);} else {ctx.fillStyle = 'blue';
        ctx.fillRect(s.x, s.y, size, size);}
        ctx.closePath()
    }
}