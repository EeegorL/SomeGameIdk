const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let then = Date.now();
const fps = 1000/120;
const {UP, DOWN, LEFT, RIGHT} = Directions;

let spriteDefaultSize = 10;
const player = new Player(20, 20, spriteDefaultSize, spriteDefaultSize);

const blocks = [
    //test blocks
    new Block(0, 100, canvas.width, 1),
    new Block(30, 75, 80, 2),
    new Block(50, 100, 40, 40),
    new Block(100, 100, 40, 40),
    new Block(200, 50, 40, 20),


    //default 4 walls
    // -1 in some of these so they appear just outside the screen and aren't visible to the naked mortal eye
    new Block(0, 0, canvas.width, 1), // top
    new Block(0, canvas.height + 1, canvas.width, 1), // bottom
    new Block(-1, canvas.height, 1, canvas.height), // left
    new Block(canvas.width, canvas.height, 1, canvas.height) // right
];

    const run = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";

    player.act();
    blocks.forEach(wall => {
        wall.draw();
    })
};

const engine = () => {
    requestAnimationFrame(engine);
    let now = Date.now();
    if((now - then) > fps) {
        then = now
        run();
    }
}
requestAnimationFrame(engine);












