var game;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('container');

    game = new Minesweeper(width, 20);
    game.buildEmptyBoard();
    game.fillBoardWithBombs();
    game.fillBoardWithNumbers();
}

function draw() {    
    game.show();
}

function mouseClicked(){
    document.oncontextmenu = function(e) { 
        e.preventDefault(); 
        game.flag(mouseX, mouseY);
    }

    if(mouseButton === LEFT){
        game.click(mouseX, mouseY, false);
    }
}



 