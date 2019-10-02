console.log("moo");

var nicecatchscr = document.getElementById("nicecatch");
var startButton = document.getElementById('startButton');
var splashSound = document.getElementById("splash");
var startscreen = document.getElementById('startscreen');
var nextButton = document.getElementById('nextButton');
var whichLevel = document.getElementById('whichLevel');
var happyMusic = document.getElementById("happymusic");
var wrongBuzz = document.getElementById("clickwrong")
var triesLeft = document.getElementById('tries')
var playMusic = document.getElementById('playmusic');
var muteMusic = document.getElementById('mutemusic')
var gameover = document.getElementById('gameover');
var failure = document.getElementById('gameover');
var success = document.getElementById('nicecatch');
var canvas = document.querySelector('canvas');
var timer = document.getElementById('timer');
var levelID = document.getElementById('level');
var endingLevel = document.querySelector('p');

nextButton.addEventListener('click', nextLevel);
startButton.addEventListener('click', start);
gameover.addEventListener('click', reload);
playMusic.addEventListener('click', pauseMusic);
muteMusic.addEventListener('click', pauseMusic);
nicecatchscr.addEventListener('click', nextLevel);

window.addEventListener('keypress', function(event) {
    if (event.code === 'Space') {
    detectCollision()
}});
window.addEventListener('keypress', function(event) {
    if (proceed === true && event.code === 'Enter') {
        nextLevel();
        proceed = false;
    }
})

var c = canvas.getContext('2d');

var proceed = false;
var ingame = false;
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
    fish.src = "images/fish.png";



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
    if (ingame === true) {
    console.log("pressed");
    console.log(ingame);

        if ((fishy - 18 > glassy - 30) && (fishy < glassy + 30)) {
            splashSound.play();
            ingame = false;
            proceed = true;
            success.classList.replace('hidden', 'show');
            canvas.classList.replace('show', 'hidden');
            nextButton.classList.replace('hidden', 'show');
            clearInterval(stop);
        } else if (clickCounter === 1) {
            wrongBuzz.play();
            clickCounter--;
            triesLeft.textContent = clickCounter;
            triesLeft.style.color = 'red';
            gameIsOver();
        } else {
            wrongBuzz.play();
            clickCounter--;
            triesLeft.textContent = clickCounter;
            triesLeft.style.color = 'red';
        }
}
}

function nextLevel() {
    ingame = true;
    clearInterval(stop);
    startTimer();
    level++;
    whichLevel.textContent = level;
    triesLeft.style.color = 'black';
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
    ingame = false;
    canvas.classList.replace('show', 'hidden');
    failure.classList.replace('hidden', 'show')
    pauseMusic();
    clearInterval(stop);
    endingLevel.classList.replace('hidden', 'show');
    levelID.classList.replace('hidden', 'show');
    levelID.textContent = level + ' ! Congratulations!';

}

function start() {
    startTimer();
    ingame = true;
    startscreen.classList.replace('show','hidden');
    canvas.classList.replace('hidden', 'show');
    startMusic();
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
    happyMusic.play();
    mute = false;
}


function pauseMusic() {
    if (mute === false) {
    happyMusic.pause();
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