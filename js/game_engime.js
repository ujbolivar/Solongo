this.setCanvasDimensions();
this.setFood();

let intervalId = setInterval(() => {
    this.clear();
    this.move();
    this.draw();
    //this.setTimeout(move, speed)
}, 1000/(fps / 3));