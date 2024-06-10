document.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "w":
           player.moving.UP = true;
           player.buttonsPressed.W = true;
            break;
        case "s":
            player.moving.DOWN = true;
            player.buttonsPressed.S = true;
            break;
        case "a":
            player.moving.LEFT = true;
            player.buttonsPressed.A = true;
            break;
        case "d":
            player.moving.RIGHT = true;
            player.buttonsPressed.D = true;
            break;
        case " ": //space
            player.moving.JUMPED = true;
            break;
    }
});

document.addEventListener("keyup", (e) => {
    switch(e.key) {
        case "w":
           player.moving.UP = false;
           player.buttonsPressed.W = false;
            break;
        case "s":
            player.moving.DOWN = false
            player.buttonsPressed.S = false;
            break;
        case "a":
            player.moving.LEFT = false;
            player.buttonsPressed.A = false;
            break;
        case "d":
            player.moving.RIGHT = false;
            player.buttonsPressed.D = false;
            break;
        case " ": //space
            player.moving.JUMPED = false;
            player.buttonsPressed.SPACE = false;
            break;
    }
});