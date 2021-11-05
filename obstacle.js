class Obstacle {
    constructor(srcImg, xPos) {
        this.image = new Image();
        this.image.src = srcImg;
        this.width = 55;
        this.height = 55;
        this.x = xPos;
        this.y = 375;
    }
    drawObstacles = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    obstaclesMove = (speed) => {
        this.x -= speed;
    }
}