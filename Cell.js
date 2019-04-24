function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.dim = w;

    this.number = 0;

    this.is_hidden = true;
    this.is_flagged = false;
    this.state = 'empty';

    this.colour = {
        'tile' : '#bdbdbd',
        'light_edge': '#ffffff',
        'dark_edge' : '#7b7b7b',
        'bomb'      : '#EA2B1F',
        'flag'      : '#9BE564',
        //              Red        Green      Blue       Yellow     Dark Blue  Purple     Lime       Cyan
        'numbers'   : ['#EA2B1F', '#3AB795', '#69DDFF', '#F8FA90', '#313B72', '#E2A0FF', '#9BE564', '#23FCF8']
    }

    this.image = {
        'tile': loadImage('Assets/tile.png'),
        'bomb': loadImage('Assets/bomb.png'),
        'flag': loadImage('Assets/flag.png')
    }


    this.show = function() {

        if(this.is_hidden){

            if(this.is_flagged){
                image(this.image['flag'], this.x, this.y, this.dim, this.dim);
            }
            else {
                image(this.image['tile'],this.x, this.y, this.dim, this.dim);
            }
            
        }
        else {
            if(this.state == 'bomb'){
                image(this.image['bomb'],this.x, this.y, this.dim, this.dim);
            }
            else if(this.state == 'number'){
                fill(this.colour['numbers'][this.number-1]);
                textSize(20);
                textFont('Arial');
                textAlign(CENTER, BOTTOM);
                text(this.number, this.x, this.y, this.dim, this.dim);
            }
        }
    }

}