console.log("obstacles connected");

class Obstacle{
    constructor(srcImg, xPos) {
        this.image = new Image();
        this.image.src = srcImg;
        this.width = 45;
        this.height = 50;
        this.x = xPos;
        this.y = 260;
    }
    drawObstacles = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    obstaclesMove = (speed) => {
        this.x -= speed;
    }
}