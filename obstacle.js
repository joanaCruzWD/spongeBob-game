class Obstacle {
    constructor(srcImg, xPos) {
        this.image = new Image();
        this.image.src = srcImg;
        this.width = 50;
        this.height = 45;
        this.x = xPos;
        this.y = 385;
    }
    drawObstacles = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    obstaclesMove = (speed) => {
        this.x -= speed;
    }
}