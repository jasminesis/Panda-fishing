console.log("moo");

var success = document.getElementById('nicecatch');
var triesLeft = document.getElementById('tries')
var nextButton = document.getElementById('nextButton');
var happyMusic = document.getElementById("happymusic");
var startButton = document.getElementById('startButton');
var splashSound = document.getElementById("splash");
var startscreen = document.getElementById('startscreen');
var whichLevel = document.getElementById('whichLevel');
var playMusic = document.getElementById('playmusic');
var muteMusic = document.getElementById('mutemusic')
var gameover = document.getElementById('gameover');
var failure = document.getElementById('gameover');
var canvas = document.querySelector('canvas');
var timer = document.getElementById('timer');

window.addEventListener('keypress', detectCollision);
nextButton.addEventListener('click', nextLevel);
startButton.addEventListener('click', start);
gameover.addEventListener('click', reload);
playMusic.addEventListener('click', pauseMusic);
muteMusic.addEventListener('click', pauseMusic);

var c = canvas.getContext('2d');

var mute = false;
var stop = null;
var level = 1;
canvas.width = 700;
var timeLeft = 10;
canvas.height = 400;
var clickCounter = 3;

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

startMusic();


var fishy = 370;
var dfishy = -1;
var glassy = 30;
var dglassy = 2;

function animateFish() {
    requestAnimationFrame(animateFish);
    // console.log(" bloooooooop");
    c.clearRect(82, fishy, 36, 33);
    c.drawImage(gameBody, 80, 20, 40, 390);

// draws glass
    c.fillStyle = '#55C504';
    c.fillRect(81, glassy, 38, 60);
    glassy += dglassy;

    if (glassy + 30 > 380 || glassy < 30) {
        dglassy = -dglassy;
    }
// draws fish image
    c.drawImage(fish, 81, fishy, 42, 36);
    fishy += dfishy;

    if (fishy + 20 > 390 || fishy < 23) {
        dfishy = -dfishy;
    }
}
animateFish();



function detectCollision() {
    console.log("pressed");
    clickCounter--;
    triesLeft.textContent = clickCounter;
    if ((fishy - 18 > glassy - 30) && (fishy < glassy + 30)) {
        splashSound.play();
        success.classList.replace('hidden', 'show');
        canvas.classList.replace('show', 'hidden');
        nextButton.classList.replace('hidden', 'show');
        clearInterval(stop);
    }
    else if (clickCounter === 0) {
        gameIsOver();
    }
}

function nextLevel() {
    clearInterval(stop);
    startTimer();
    level++;
    whichLevel.textContent = level;
    clickCounter = 3;
    triesLeft.textContent = clickCounter;
    success.classList.replace('show', 'hidden');
    canvas.classList.replace('hidden', 'show');
    nextButton.classList.replace('show', 'hidden');
// changing difficulty levels
// if level is greater than 4, add only 1 to velocity
    if (level >= 4) {
        if (dglassy < 0) {
            dglassy -= 1;
        } else {
            dglassy += 1;
        }
    } else {
        if (dglassy < 0) {
            dglassy -= 2;
        } else {
            dglassy += 2;
        }
    }
}


function gameIsOver() {
    canvas.classList.replace('show', 'hidden');
    failure.classList.replace('hidden', 'show')
}

function start() {
    startTimer();
    startscreen.classList.replace('show','hidden');
    canvas.classList.replace('hidden', 'show');
}

function reload() {
    location.reload();
}

function startTimer() {
    timeLeft = 10;
    stop =setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(stop);
            gameIsOver();
    }
    }, 1000)
}

function startMusic() {
    happymusic.play();
    mute = false;
}


function pauseMusic() {
    if (mute === false) {
    happymusic.pause();
    mute = true;
    muteMusic.classList.replace('hidden', 'show');
    playMusic.classList.replace('show', 'hidden');
    console.log("music paused")
} else if (mute === true) {
    console.log("music playing")
    muteMusic.classList.replace('show', 'hidden');
    playMusic.classList.replace('hidden', 'show');
    startMusic();
}
}