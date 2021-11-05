class Bob {
    constructor() {
        this.bobImg = new Image();
        this.bobImg.src = "./images/sponge.png";
        this.width = 120;
        this.height = 120;
        this.x = canvas.width / 14;
        this.y = canvas.height / 1.8;
    }
    //methods
    drawBob = () => {
        ctx.drawImage(this.bobImg, this.x, this.y, this.width, this.height);
    }
    bobJump = () => {
        let floor = canvas.height / 1.8;
        if (this.y === floor || this.y > floor) {
            this.y -= 210;
        }
    }
    bobDrop = (speed) => {
        let floor = canvas.height / 1.8;
        if (this.y < floor) {
            this.y += speed
            if (this.y >= floor) {
                return true
            }
            return false
        }
        return false
    }
    bobSnailSquidCollision = (singleObstacle) => {
        singleObstacle.x
        singleObstacle.y
        if (this.x < singleObstacle.x + singleObstacle.width &&
            this.x + this.width > singleObstacle.x &&
            this.y < singleObstacle.y + singleObstacle.height &&
            this.height + this.y > singleObstacle.y) {
            return true
        } else {
            return false
        }
    }
}
