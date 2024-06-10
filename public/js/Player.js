class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.directionLeft = false;
        this.directionUp = false;
        this.moving = {
            UP: false,
            DOWN: false,
            LEFT: false,
            RIGHT: false,
            JUMPED: false
        };
        this.buttonsPressed = {
            W: false,
            A: false,
            S: false,
            D: false,
            SPACE: false
        }
        this.movementSpeed = 1;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.gravity = 0.5;
    };


    act() {
        this.#draw();
        this.#move();
        this.#checkCollision(blocks);
    };

    #draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, -this.height);
    };

    #move() {
        if(this.moving.UP && !this.buttonsPressed.S) this.velocity.y = -1;
        else if(this.moving.DOWN && !this.buttonsPressed.W) this.velocity.y = 1;
        else this.velocity.y = 0;

        if(this.moving.LEFT && !this.buttonsPressed.D) this.velocity.x = -1;
        else if(this.moving.RIGHT && !this.buttonsPressed.A) this.velocity.x = 1;
        else this.velocity.x = 0;

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };


    #checkCollision(blocks) {
        for(let block of blocks) {
            if(this.moving.UP) {
                if(this.y - this.height == block.y &&
                    this.x + this.width >= block.x &&
                    this.x <= block.x + block.width
                ) this.y += this.movementSpeed;
            } 
            if(this.moving.DOWN) {
                if(this.y == block.y - block.height &&
                    this.x + this.width >= block.x &&
                    this.x <= block.x + block.width
                ) this.y -= this.movementSpeed;
            } 
            if(this.moving.LEFT) {
                if(this.x == block.x + block.width &&
                    this.y - this.height <= block.y &&
                    this.y  >= block.y - block.height
                ) this.x += this.movementSpeed;
            }
            if(this.moving.RIGHT) {
                if(this.x + this.width ==  block.x &&
                    this.y - this.height <= block.y &&
                    this.y  >= block.y - block.height
                ) this.x -= this.movementSpeed;
            }
        }
    }
};
