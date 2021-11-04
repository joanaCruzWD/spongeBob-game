class Bob {
    constructor() {
        this.bobImg = new Image();
        this.bobImg.src = "./images/sponge.gif";
        this.width = 100;
        this.height = 100;
        this.x = canvas.width / 14;
        this.y = canvas.height / 1.70;
    }

    //methods
    drawBob = () => {
        ctx.drawImage(this.bobImg, this.x, this.y, this.width, this.height);
    }

    bobJump = () => {
        let floor = canvas.height / 1.70;
        if (this.y === floor || this.y > floor) { 
            this.y -= 180;
        }
    }
  
    bobDrop = (speed) => {
        let floor = canvas.height / 1.7;
        if (this.y < floor) { // if bob is in the air
            this.y += speed
            if(this.y >= floor){
                return true // on the floor
            }
            return false // still in the air
        }
        return false 
    }

    bobSnailSquidCollision = (singleObstacle) => {
        // check if the birds collides with one pipe
        singleObstacle.x
        singleObstacle.y

        if (this.x < singleObstacle.x + singleObstacle.width &&
            this.x + this.width > singleObstacle.x &&
            this.y < singleObstacle.y + singleObstacle.height &&
            this.height + this.y > singleObstacle.y) {
            return true
            //console.log("Collision happening!");
        } else {
            return false
        }
    }
}
