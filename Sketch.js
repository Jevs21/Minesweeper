var game;

function setup() {
    createCanvas(600, 600);

    game = new Minesweeper(width, 20);
    game.buildEmptyBoard();
    game.fillBoardWithBombs();
    game.fillBoardWithNumbers();
}

function draw() {
    background(91);
    
    game.show();
}

function mouseClicked(){
    if(mouseButton === LEFT){
        game.click(mouseX, mouseY);
    }
    else if(mouseButton === RIGHT){
        game.flag(mouseX, mouseY);
    }
}