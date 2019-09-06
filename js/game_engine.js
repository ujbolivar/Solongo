this.setCanvasDimensions();
this.setFood();
let intervalId = setInterval(() => {
    this.clear();
    this.move();
    this.draw();
//    this.setTimeout(move, speed)
}, 10   0);