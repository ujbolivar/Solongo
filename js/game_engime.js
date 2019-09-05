this.setCanvasDimensions();
this.setFood();

setInterval(() => {
    this.clear(),
    this.draw();
    this.move();
    this.setTimeId(move, speed);
}, 90);