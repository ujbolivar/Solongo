function draw() {
    ctx.beginPath();        
    ctx.font = 'bold 20p Open Sans';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 40, 40, 200)
    ctx.closePath()  
    for (let i = 0; i < snake.length; i += 1) { 
        // draws score 
        // draws food
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, size, size);
        ctx.closePath();
        // draws snake
        const s = snake[i];
        ctx.beginPath();
        if (i === 0){ctx.fillStyle = 'white';
        ctx.fillRect(s.x, s.y, size, size);} else {ctx.fillStyle = 'blue';
        ctx.fillRect(s.x, s.y, size, size);}
        ctx.closePath()
      
    }
}