function draw() {
    clear();
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, size, size);
    
    for (let i = 0; i < snake.length; i += 1) {
        if (i === 0 && snake[i].x === food.x && snake[i].y === food.y) {
            snake.push({});
            speed += 0.99;
            setFood();
        }
        const s = snake[i];
        ctx.fillStyle = 'white';
        ctx.fillRect(s.x, s.y, size, size);
    }
}