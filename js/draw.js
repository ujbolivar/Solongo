function draw() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0","pink");
    gradient.addColorStop("0.5", "white");
    gradient.addColorStop("1.0", "yellow");
    ctx.beginPath();        
    ctx.font = "bold 30px Verdana";
    ctx.textAlign = 'center';
    ctx.fillStyle = gradient;
    ctx.fillText('Score: ' + score, 90, 40);
    ctx.closePath();
    
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
        if (i === 0){ctx.fillStyle = 'yellow';
        ctx.fillRect(s.x, s.y, size, size);} else if (i % 2 === 0) {ctx.fillStyle = 'blue';
        ctx.fillRect(s.x, s.y, size, size);} else{ctx.fillStyle = 'white';
        ctx.fillRect(s.x, s.y, size, size);}
        ctx.closePath()
        
    }
}