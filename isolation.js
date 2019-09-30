console.log("honk");

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 400;

var grd = c.createLinearGradient(0, 0, 310, 400);
grd.addColorStop(0, 'white');
grd.addColorStop(0.4, '#5EB2CA');
c.fillStyle = grd;
c.fillRect(0, 0, 310, 400);

    // var gameBody = new Image();
    // gameBody.addEventListener('load', function() {
    //     c.drawImage(gameBody, 80, 20, 40, 390)
    // })
    // gameBody.src = "images/game-game-body-bg.svg";

    var fish = new Image();
    fish.addEventListener('load', function() {
        c.drawImage(fish, 82, 370, 36, 33)
    })
    fish.src = "http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/tropical-fish-icon.png";

var y = 370;
var dy = -1;

var fish = new Fish(370, -1)

function Fish(y, dy) {
    this.y = y;
    this.dy = -dy;

    this.draw = function() {
        c.clearRect(82, this.y, 36, 33);
        // c.drawImage(gameBody, 80, 20, 40, 390);
        c.drawImage(fish, 81, this.y, 42, 36);
    }
    this.update = function() {
        if (this.y + 20 > 390 || this.y < 23) {
        this.dy = -this.dy;
    }
        this.y =+ this.dy;
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    console.log("blooop");
    fish.update();

}

animate();