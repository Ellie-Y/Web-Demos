var myCanvas = document.getElementById('myCanvas');
var paint = myCanvas.getContext('2d');
var arr = [];

function init() {
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
}
init();
window.onresize = init;
window.addEventListener('mousemove', function(e) {
    arr.push( new Circle(e.clientX, e.clientY) );
})

function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = (Math.random() - 0.5) * 3;
    this.speedY = (Math.random() - 0.5) * 3;
    var r = randomNum(0, 256);
    var g = randomNum(0, 256);
    var b = randomNum(0, 256);
    this.color = 'rgb('+r+','+g+','+b+')';
    this.opacity = 1;
    this.draw();
}

Circle.prototype = {
    draw: function() {
        paint.beginPath();
        paint.fillStyle = this.color;
        paint.globalCompositeOperation = 'lighter';
        paint.globalAlpha = this.opacity;
        paint.arc(this.x, this.y, 30, 0, Math.PI*2, 0); //paint small balls
        paint.fill();
        this.move();
    },
    move: function() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity *= 0.98;
    }
}

function render() {
    paint.clearRect(0, 0, myCanvas.width, myCanvas.height);
    arr.forEach(function(ele, index) {
        ele.draw();
        if(ele.opacity < 0.1) {
            arr.splice(index, 1);
        }
    });
    requestAnimationFrame(render);
}
render();

function randomNum(min, max) {
    return Math.floor( (max - min) * Math.random() + min );
}
