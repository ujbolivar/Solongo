function draw() {
    for (let i = 0; i < snake.length; i += 1) { 
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, size, size);
        const s = snake[i];
        ctx.fillStyle = 'white';
        ctx.fillRect(s.x, s.y, size, size);
    }
}