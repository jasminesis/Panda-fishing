console.log("moo");

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 400;

var grd = c.createLinearGradient(0, 0, 310, 400);
grd.addColorStop(0, 'white');
grd.addColorStop(0.4, '#5EB2CA');
c.fillStyle = grd;
c.fillRect(0, 0, 310, 400);

//add background image to canvas
    var background = new Image();
    background.addEventListener('load', function() {
        c.drawImage(background, 310, 0, 400, 400);
    })
    background.src = "images/panda-fishing.jpg"

    // adds fishing rod to canvas
    var fishingRod = new Image();
    fishingRod.addEventListener('load', function() {
        c.drawImage(fishingRod, 20, 20, 50, 380);
    })
    fishingRod.src = "images/game-fishing-rod.svg";

    var gameBody = new Image();
    gameBody.addEventListener('load', function() {
        c.drawImage(gameBody, 80, 20, 40, 390)
    })
    gameBody.src = "images/game-game-body-bg.svg"

    var progressBar = new Image();
    progressBar.addEventListener('load', function() {
        c.drawImage(progressBar, 120, 30, 30, 370)
    })
    progressBar.src = "images/game-progress-bar-bg.svg"

    var fish = new Image();
    fish.addEventListener('load', function() {
        c.drawImage(fish, 82, 22, 36, 33)
    })
    fish.src = "http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/tropical-fish-icon.png"

// animate fish
var x = Math.random() * 40;
var y = Math.random() * 390;
var dx = (Math.random() - 0.5)*15;
var dy = (Math.random() - 0.5)*15;


var y = 370;
var dy = -1;

function animate() {
    requestAnimationFrame(animate);
    console.log("blooop");
    c.clearRect(82, y, 36, 33);
    c.drawImage(gameBody, 80, 20, 40, 390);
    c.beginPath();
    c.drawImage(fish, 81, y, 42, 36);
    y+= dy;

    if (y + 20 > 390 || y < 23) {
        dy = -dy;
    }
}

animate();