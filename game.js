class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/background.jpg";
    this.bob = new Bob();
    this.obstacles = [
      "./images/snail_char.png",
      "./images/star.png",
      "./images/crab.png",
      "./images/squid.png",
      "./images/plankton.png",
      "./images/MrsPuff.png",
    ];
    this.obstacleArr = [new Obstacle("./images/snail_char.png", 875)];
    this.obstaclesDistance = 85;
    this.isGameOver = false;
    this.obstacleSpeed = 3;
    this.bobDropSpeed = 2;
    this.randomRange = [850, 900, 950];
    this.score = 0;
    this.scoreTag = document.querySelector("span");
    this.scoreTag.innerHTML = this.score;
  }
  gameover = () => {
    this.isGameOver = true;
    gameSound.pause();
    gameSound.currentTime = 0;
    gameOverSound.play();
    canvas.style.display = "none";
    gameOverScreen.style.display = "inline-block";
  };
  addObstacles = () => {
    let lastIdx = this.obstacleArr.length - 1;
    let lastObstacle = this.obstacleArr[lastIdx];

    if (lastObstacle.x <= this.obstaclesDistance) {
      let randomIndex = Math.floor(Math.random() * this.randomRange.length); // random distance
      let random = Math.floor(Math.random() * this.obstacles.length); // random enemy
      let obstaclesPosition = new Obstacle(
        this.obstacles[random],
        this.randomRange[randomIndex]
      );
      this.obstacleArr.push(obstaclesPosition);
    }
  };
  scoreOfGame = () => {
    return (this.scoreTag.innerHTML = this.score);
  };

  gameLoop = () => {
    //* 1. CLEAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //* 2. MOVEMENT AND CHANGES ON ELEMENTS
    if (this.bob.bobDrop(this.bobDropSpeed)) {
      if (this.obstacleArr.length % 3 === 0) {
        this.obstacleSpeed++;
        this.bobDropSpeed += 0.5;
      }
      this.score += 10;
      this.scoreOfGame();
    }
    this.obstacleArr.forEach((eachObstacle) => {
      eachObstacle.obstaclesMove(this.obstacleSpeed);
    });
    this.addObstacles();
    this.obstacleArr.forEach((eachObstacle) => {
      if (this.bob.bobSnailSquidCollision(eachObstacle)) {
        this.gameover();
      }
    });

    //* 3. DRAWING THE ELEMENTS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.bob.drawBob();
    this.obstacleArr.forEach((eachObstacle) => {
      eachObstacle.drawObstacles();
    });

    //* 4. ANIMATION FRAME AND GAME LOGIC CHANGES
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
