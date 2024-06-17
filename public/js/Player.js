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
        this.movementSpeed = 1;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.initialGravity = 1;
        this.gravity = this.initialGravity;

        this.jumpSpeed = 3;

        this.isJumping = false;
        this.jumpProgress = 0;
    };


    act() {
        this.#draw();
        this.#move();
        if(this.#checkCollision(blocks).collides == true && this.#checkCollision(blocks).at == "down") this.gravity = 0;
        else this.gravity = this.initialGravity;
    };

    #draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, -this.height); // draw upwards from y
    };

    #move() {
        this.y += this.gravity;

        if(this.moving.UP && !this.moving.DOWN) this.velocity.y = -this.movementSpeed;
        else if(this.moving.DOWN && !this.moving.UP) this.velocity.y = this.movementSpeed;
        else this.velocity.y = 0;

        if(this.moving.LEFT && !this.moving.RIGHT) this.velocity.x = -this.movementSpeed;
        else if(this.moving.RIGHT && !this.moving.LEFT) this.velocity.x = this.movementSpeed;
        else this.velocity.x = 0;

        if(this.moving.JUMPED) {
            if(this.#checkCollision(blocks).at == "down") {
                this.isJumping = true;
            } 
        }

        if(this.isJumping) {
            this.jumpProgress++;

            if(this.jumpProgress < 10 && !this.#collidesAt("up")) {
                this.y -= this.jumpSpeed;
                this.gravity = 0;
            }
            else if(this.jumpProgress > 10 && this.jumpProgress < 12) {
                this.y -= this.gravity;
            }

            if(this.jumpProgress > 12) {
                this.isJumping = false;
                this.jumpProgress = 0;
                this.gravity = 0.5;
            }
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };

    #checkCollision(blocks) {
        let collideData = {collides: false, at: null};
        for(let block of blocks) {
                if(this.y - this.height == block.y && // up collision 
                    this.x + this.width >= block.x &&
                    this.x <= block.x + block.width
                ) {this.y += this.movementSpeed; collideData = {collides: true, at: UP}};

                if(this.y == block.y - block.height && // down collision
                    this.x + this.width >= block.x &&
                    this.x <= block.x + block.width
                ) {this.gravity = 0; collideData = {collides: true, at: DOWN}};

                if(this.x == block.x + block.width && // left collision (NOT PERFECT, REMEMBER TO CHECK)
                    this.y - this.height <= block.y &&
                    this.y >= block.y - block.height
                ) {this.x += this.movementSpeed; collideData = {collides: true, at: LEFT}};

                if(this.x + this.width ==  block.x && // right collision
                    this.y - this.height <= block.y &&
                    this.y  >= block.y - block.height
                ) {this.x -= this.movementSpeed; collideData = {collides: true, at: RIGHT}};
        }
        return collideData;
    }
    #collidesAt(direction) {
        const collides = this.#checkCollision(blocks);

        if(collides.collides && collides.at == direction) return true;
        else return false;
    }
};