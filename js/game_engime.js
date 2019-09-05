this.setCanvasDimensions();

setInterval(() => {
    this.clear();
    this.draw();
    this.move();
    this.setTimeId(move, speed);
}, 90);