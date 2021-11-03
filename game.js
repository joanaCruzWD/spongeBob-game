class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "./images/background.jpg";
        this.bob = new Bob();
        this.obstacles = [
           "./images/snail_char.png",
            "./images/star.png"
        ];
        this.obstacleArr = [new Obstacle("./images/snail_char.png", 500)];
        this.obstaclesDistance = 100;
        this.isGameOver = false;
        this.image = 0;  // 0  1
        this.score = 0;
        this.randomRange = [500, 600, 700]
    }

    gameover = () => {
        this.isGameOver = true;
        gameSound.pause();
        gameSound.currentTime = 0;
        gameOverSound.play();
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
    }

    addObstacles = () => {
        let lastIdx = this.obstacleArr.length - 1;
        let lastObstacle = this.obstacleArr[lastIdx];

        if (lastObstacle.x === this.obstaclesDistance) {
            let randomIndex = Math.floor(Math.random() * (this.randomRange.length)); // random distance
    
            let random = Math.floor(Math.random() * (this.obstacles.length)); // random enemy

            let obstaclesPosition = new Obstacle(this.obstacles[random], this.randomRange[randomIndex]);
            this.obstacleArr.push(obstaclesPosition);

        }
    }

    gameLoop = () => {

        //* 1. CLEAR CANVAS
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //* 2. MOVEMENT AND CHANGES ON ELEMENTS
        this.bob.bobDrop();
        this.obstacleArr.forEach((eachObstacle) => {
            eachObstacle.obstaclesMove();
        })
        this.addObstacles();
        this.obstacleArr.forEach((eachObstacle) => {
            if (this.bob.bobSnailSquidCollision(eachObstacle)) {
                this.gameover();
            }
        })

        //* 3. DRAWING THE ELEMENTS
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.bob.drawBob();
        this.obstacleArr.forEach((eachObstacle) => {
            eachObstacle.drawObstacles();
        })


        //* 4. ANIMATION FRAME AND GAME LOGIC CHANGES
        if (!this.isGameOver) {
            requestAnimationFrame(this.gameLoop);
        }
    }
}