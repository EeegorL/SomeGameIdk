class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.directionLeft = false;
        this.directionUp = false;
        this.movementSpeed = 1;
        this.moving = {
            UP: false,
            DOWN: false,
            LEFT: false,
            RIGHT: false
        };
    };

    act() {
        this.#draw();
        this.#move();
    }

    #draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, spriteDefaultSize, -spriteDefaultSize);
   
    }

    #move() {
        if(this.moving.UP) {
            if(this.y - this.height > 0) {
                this.y -= this.movementSpeed;
            }
        } 
        if(this.moving.DOWN) {
            if(this.y < canvas.height) {
                this.y += this.movementSpeed;
            }
        } 
        if(this.moving.LEFT) {
            if(this.x > 0) {
                this.x -= this.movementSpeed;
            }
        }
        if(this.moving.RIGHT) {
            if(this.x + this.width < canvas.width) {
                this.x += this.movementSpeed;
            }
        }
    }

}