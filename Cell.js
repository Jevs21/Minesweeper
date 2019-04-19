function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.dim = w;
    this.fill = 228;

    this.number = 0;

    this.is_hidden = true;
    this.is_flagged = false;
    this.state = 'empty';

    this.showHidden = function() {
        
    }

    this.show = function() {
        if(this.is_hidden){
            fill(this.fill);
            stroke(0);
            strokeWeight(1);
            rect(this.x, this.y, this.dim, this.dim);
        }
        else {
            if(this.state == 'bomb'){
                fill(255,0,0);
                stroke(0);
                strokeWeight(1);
                rect(this.x, this.y, this.dim, this.dim);
            }
            else if(this.state == 'number'){
                fill(0);
                textSize(18);
                textFont('Georgia');
                textAlign(CENTER, BASELINE);
                text(this.number, this.x, this.y, this.dim, this.dim);
            }
        }
    }

}