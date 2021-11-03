//*GLOBAL VARIABLES

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let gameSound = document.createElement("audio"); //empty element
gameSound.src = 'songs/gameMusic.mp3';
gameSound.type = 'audio/mpeg';
document.querySelector(".container").appendChild(gameSound);

let gameOverSound = document.createElement("audio"); //empty element
gameOverSound.src = 'songs/gameOver.mp3';
gameOverSound.type = 'audio/mpeg';
document.querySelector(".container").appendChild(gameOverSound);



//TODO DOM elements- buttons and fullscreen
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let initialScreen = document.querySelector("#initial-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let game;

//*FUNCTIONS
const startGame = () => {
    initialScreen.style.display = "none";
    canvas.style.display = "flex";
    game = new Game();
    game.gameLoop();
    gameOverSound.pause();
    gameOverSound.currentTime = 0;
    gameSound.play();
   
}

const restartGame = () => {
    gameOverScreen.style.display = "none";
    canvas.style.display = "flex";
    game = new Game();
    game.gameLoop();
    gameOverSound.pause();
    gameOverSound.currentTime = 0;
    gameSound.play()
}
//*Score
// var start = new Date().getTime(),
//     score = '0.1';
// var interval = window.setInterval(function () {
//     var time = new Date().getTime() - start;
//     score = Math.floor(time / 1000);

//     if (score === 1000) {
//         window.clearInterval(interval);
//         if (!alert("You win!\nPress 'OK' to play again")) {
//             window.location.reload();
//         }
//     }

//     document.getElementById('displayScore').innerHTML = score += + '.00 ';
// });

//*ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
window.addEventListener("keydown", () => {
    game.bob.bobJump();
}
)
