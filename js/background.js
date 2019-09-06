document.addEventListener('DOMContentLoaded',domloaded, false);
function domloaded(){
    // your code here.
    const w = window.innerWidth;
    const h = window.innerHeight;
    const w2 = w / 2;
    const h2 = h / 2;
    const size = Math.round(canvas.width / 30);
    
    window.onload = window.onresize = function() {
        document.querySelector("#canvas1").setAttribute           ("width", `${w}px`);
        document.querySelector("#canvas1").setAttribute           ("height", `${h}px`);
        
        document.querySelector("#canvas").setAttribute           ("width", `${w * .58}px`);
        document.querySelector("#canvas").setAttribute          ("height", `${h * .81}px`);
        
        const canvas1DOMEL = document.querySelector                  ("#canvas1");
        const ctx = canvas1DOMEL.getContext("2d");

        let jungle = new Image();
        jungle.src = "./../images/jungle background and grass.jpg";
        jungle.onload = function() {
            ctx.drawImage(jungle, 0, 0);
        }
        
        // This sets some variables for demonstration purposes
        var x = 50;
        var y = 50;
        var width = 10;
        var height = 10;
        
        // This draws a square with the parameters from the variables set above
        ctx.fillRect(x, y, width, height);
    }
}

