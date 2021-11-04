//*GLOBAL VARIABLES
let canvas = document.querySelector("#my-canvas");
let score = document.querySelector("#score");
let ctx = canvas.getContext("2d");
//Game music
let gameSound = document.createElement("audio"); //empty element
gameSound.src = "songs/gameMusic.mp3";
gameSound.type = "audio/mpeg";
document.querySelector(".container").appendChild(gameSound);
//Game over music
let gameOverSound = document.createElement("audio"); //empty element
gameOverSound.src = "songs/gameOver.mp3";
gameOverSound.type = "audio/mpeg";
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
  canvas.style.display = "inline-block";
  score.style.display = "inline";
  game = new Game();
  game.gameLoop();
  gameOverSound.pause();
  gameOverSound.currentTime = 0;
  gameSound.play();
};

const restartGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display = "inline-block";
  game = new Game();
  game.gameLoop();
  gameOverSound.pause();
  gameOverSound.currentTime = 0;
  gameSound.play();
};
//*ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    game.bob.bobJump();
  }
});
canvas.addEventListener("click", () => {
  game.bob.bobJump();
});
