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
    gameBody.src = "images/game-game-body-bg.svg";

    var progressBar = new Image();
    progressBar.addEventListener('load', function() {
        c.drawImage(progressBar, 120, 30, 30, 370)
    })
    progressBar.src = "images/game-progress-bar-bg.svg";

    var progressGradient = new Image();
    progressGradient.addEventListener('load', function() {
        c.drawImage(progressGradient, 120, 30, 30, 370)
    })
    progressGradient.src = "images/game-progress-gradient.svg";

    var fish = new Image();
    fish.addEventListener('load', function() {
        c.drawImage(fish, 82, 370, 36, 33)
    })
    fish.src = "http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/tropical-fish-icon.png";


// var y = 370;
// var dy = -1;

// var fish = new Fish(370, -1)

// function Fish(y, dy) {
//     this.y = y;
//     this.dy = -dy;

//     this.draw = function() {
//         c.clearRect(82, this.y, 36, 33);
//         c.drawImage(gameBody, 80, 20, 40, 390);
//         c.beginPath();
//         c.drawImage(fish, 81, this.y, 42, 36);
//     }
//     this.update = function() {
//         if (this.y + 20 > 390 || this.y < 23) {
//         this.dy = -this.dy;
//     }
//         this.y =+ this.dy;
//         this.draw();
//     }
// }



// function animate() {
//     requestAnimationFrame(animate);
//     console.log("blooop");
//     fish.update();

// }

// animate();


var topBound = 20;
var lowerBound = 400;
var fishy = 370;
var dfishy = -1;
var glassy = 200;
var dglassy = 2;

function animateFish() {
    requestAnimationFrame(animateFish);
    console.log("bloooooooop");
    c.clearRect(82, fishy, 36, 33);
    c.drawImage(gameBody, 80, 20, 40, 390);

    c.fillStyle = '#3cc724';
    c.fillRect(81, glassy, 38, 60);
    glassy += dglassy;
    console.log("cubular")

    if (glassy + 30 > 380 || glassy < 30) {
        dglassy = -dglassy;
    }

    c.drawImage(fish, 81, fishy, 42, 36);

    fishy += dfishy;

    if (fishy + 20 > 390 || fishy < 23) {
        dfishy = -dfishy;
    }
}
animateFish();



function animateGlass() {
    requestAnimationFrame(animateGlass);
    console.log('brr');
    c.clear
}