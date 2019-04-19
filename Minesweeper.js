function Minesweeper(w, bombs) {
    this.board    = [];
    this.dim      = w;
    this.rows     = 20;
    this.cell_dim = w / this.rows;

    this.bomb_amt = bombs;


    this.buildEmptyBoard = function(){
        for(let i = 0; i < this.rows; i++){
            let temp = [];
            for(let j = 0; j < this.rows; j++){
                temp.push(new Cell((j*this.cell_dim), (i*this.cell_dim), this.cell_dim));
            }
            this.board.push(temp);
        }
    }

    this.fillBoardWithBombs = function(){
        let bomb_locs = [];
        
        for(let i = 0; i < this.bomb_amt; i++){
            let randx = Math.floor(random() * this.dim);
            let randy = Math.floor(random() * this.dim);

            let randj = Math.floor(randx / this.cell_dim);
            let randi = Math.floor(randy / this.cell_dim);

            this.board[randi][randj].state = 'bomb';
        }
    }
    
    this.fillBoardWithNumbers = function() {
        
        // Check inside cells
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.rows; j++){

                if(this.board[i][j].state != 'bomb'){
                    let num_adjascent = 0;
                    // Check above
                    if(j < this.rows - 1){
                        if(this.board[i][j+1].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(j > 0){
                        if(this.board[i][j-1].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(i < this.rows - 1){
                        if(this.board[i+1][j].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(i > 0){
                        if(this.board[i-1][j].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(i > 0 && j > 0){
                        if(this.board[i-1][j-1].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(i < this.rows - 1 && j < this.rows - 1){
                        if(this.board[i+1][j+1].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(i > 0 && j < this.rows - 1){
                        if(this.board[i-1][j+1].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }
                    if(i < this.rows - 1 && j > 0){
                        if(this.board[i+1][j-1].state == 'bomb'){
                            num_adjascent += 1;
                        }
                    }

                    if(num_adjascent > 0){
                        this.board[i][j].number = num_adjascent;
                        this.board[i][j].state  = 'number';
                    }

                }
            }
        }
    }

    this.show = function(){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.rows; j++){
                this.board[i][j].show();
            }
        }
    }

    this.click = function(x, y){
        j = Math.floor(x / this.cell_dim);
        i = Math.floor(y / this.cell_dim);

        this.revealOpenSpace(i, j);
    }

    this.revealOpenSpace = function(y, x){
        if(this.board[y][x].is_hidden){
            this.board[y][x].is_hidden = false;

            if(this.board[y][x].state == 'empty'){
                
                // Check downwards from clicked tile
                for(let i = 1; y+i < this.rows; i++){
                    if(this.board[y+i][x].is_hidden && this.board[y+i][x].state !== 'bomb'){
                        this.board[y+i][x].is_hidden = false;
                        // Check right from next tile
                        for(let j = 1; x+j < this.rows; j++){
                            if(this.board[y+i][x+j].is_hidden && this.board[y+i][x+j].state !== 'bomb'){
                                this.board[y+i][x+j].is_hidden = false;
                            }
                            else {
                                break;
                            }
                        }

                        // Check left from next tile
                        for(let j = 1; x-j >= 0; j++){
                            if(this.board[y+i][x-j].is_hidden && this.board[y+i][x-j].state !== 'bomb'){
                                this.board[y+i][x-j].is_hidden = false;
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }

                // Check up from clicked tile
                for(let i = 1; y - i >= 0; i++){
                    if(this.board[y-i][x].is_hidden && this.board[y-i][x].state !== 'bomb'){
                        this.board[y-i][x].is_hidden = false;

                        // Check right from next tile
                        for(let j = 1; x+j < this.rows; j++){
                            if(this.board[y-i][x+j].is_hidden && this.board[y-i][x+j].state !== 'bomb'){
                                this.board[y-i][x+j].is_hidden = false;
                            }
                            else {
                                break;
                            }
                        }

                        // Check left from next tile
                        for(let j = 1; x-j >= 0; j++){
                            if(this.board[y-i][x-j].is_hidden && this.board[y-i][x-j].state !== 'bomb'){
                                this.board[y-i][x-j].is_hidden = false;
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            
        }

    }

}