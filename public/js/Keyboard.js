document.addEventListener("keydown", (e) => {
    switch(e.key.toLowerCase()) {
        case "w":
           player.moving.UP = true;
            break;
        // case "s":
        //     player.moving.DOWN = true
        //     break;
        case "a":
            player.moving.LEFT = true;
            break;
        case "d":
            player.moving.RIGHT = true;
            break;
        case " ": //space
            player.moving.JUMPED = true;
            break;
    }
});

document.addEventListener("keyup", (e) => {
    switch(e.key.toLowerCase()) {
        case "w":
           player.moving.UP = false;
            break;
        // case "s":
        //     player.moving.DOWN = false
        //     break;
        case "a":
            player.moving.LEFT = false;
            break;
        case "d":
            player.moving.RIGHT = false;
            break;
        case " ": //space
            player.moving.JUMPED = false;
            break;
    }
});