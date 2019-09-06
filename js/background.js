document.addEventListener('DOMContentLoaded',domloaded, false);
function domloaded(){
    // your code here.
    // const w = window.innerWidth;
    // const h = window.innerHeight;
    const w2 = w / 2;
    const h2 = h / 2;
}
window.onload = window.onresize = function() {
    document.querySelector("#canvas1").setAttribute           ("width", `${window.innerWidth}px`);
    document.querySelector("#canvas1").setAttribute           ("height", `${window.innerHeight}px`);
    
    document.querySelector("#canvas").setAttribute           ("width", `${w}px`);
    document.querySelector("#canvas").setAttribute          ("height", `${h}px`);
    
    const canvas1DOMEL = document.querySelector                  ("#canvas1");
    const ctx = canvas1DOMEL.getContext("2d");
    
    let jungle = new Image();
    jungle.src = "./../images/jungle background red.jpg";
    jungle.onload = function() {
        ctx.drawImage(jungle, 0, 0, window.innerWidth, window.innerHeight);
    }
    
    // This sets some variables for demonstration purposes
    var x = 50;
    var y = 50;
    var width = 10;
    var height = 10;
    
    // This draws a square with the parameters from the variables set above
    ctx.fillRect(x, y, width, height);
}

