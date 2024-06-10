const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let then = Date.now();
const fps = 1000/120;

let spriteDefaultSize = 10;
const player = new Player(20, 20, spriteDefaultSize, spriteDefaultSize);

const blocks = [
    //test wall
    leftWall = new Block(100, 100, 100, 10)

    //base walls (here pls)
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












