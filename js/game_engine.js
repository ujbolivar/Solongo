this.setCanvasDimensions();
this.setFood();
let grass = new Image()
grass.src = "./../images/grass red.jpg"

grass.onload = () => {
    let intervalId = setInterval(() => {
        this.clear();
    
        const canvasDOMEL = document.querySelector("#canvas");
        const ctx = canvasDOMEL.getContext("2d");
        ctx.drawImage(grass, 0, 0)
    
        this.move();
        this.draw();
    // this.setTimeout(move, speed)
    }, 100);
}

