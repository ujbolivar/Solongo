this.setCanvasDimensions();
this.setFood();

setInterval(() => {
    this.clear();
    this.move();
    this.draw();
}, 40);