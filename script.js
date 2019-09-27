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
background.src = "panda-fishing.jpg"

// adds fishing rod to canvas
var fishingRod = new Image();
fishingRod.addEventListener('load', function() {
    c.drawImage(fishingRod, 20, 20, 50, 380);
})
fishingRod.src = "game-fishing-rod.svg";

var gameBody = new Image();
gameBody.addEventListener('load', function() {
    c.drawImage(gameBody, 80, 20, 40, 390)
})
gameBody.src = "game-game-body-bg.svg"

var progressBar = new Image();
progressBar.addEventListener('load', function() {
    c.drawImage(progressBar, 120, 30, 30, 380)
})
progressBar.src = "game-progress-bar-bg.svg"

var fish = new Image();
fish.addEventListener('load', function() {
    c.drawImage(fish, 82, 22, 36, 33)
})
fish.src = "favicon.ico"

// makes rectangle
// c.fillStyle = 'rgba(0,255,0,1)';
// c.fillRect(80,20,40,200);