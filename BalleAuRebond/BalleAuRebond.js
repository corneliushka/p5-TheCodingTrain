this.y = 50 
this.x = 130
this.gravity = 5  
this.velocitY = 10
this.velocitX = -1
this.size = 40 // taille de la balle
this.state = false
this.height = 560
this.lift = -20

function setup() {
    createCanvas(600, 600);
    background(220);
}


function draw() {
    if(this.y >= (this.height - this.size / 2) && this.velocitY == 0){ // 
            console.log('test')
    }else{
        this.x = this.x - this.velocitX
        if(this.state){ // la balle rebondit 
            this.velocitY = this.velocitY - this.gravity
            this.y = this.y - this.velocitY
            if(this.velocitY == 0){ // la balle s'arrete 
                this.state = false
            }
        }else{
            this.velocitY = this.velocitY + this.gravity // la balle tombe sous la gravite 
            this.y = this.y + this.velocitY
            if(this.y > this.height - this.size / 2){
                this.state = true
            }
        }
    }   

    if (this)



    background(220)
    ellipse(this.x,this.y,this.size,this.size);
}



/* 
function keyPressed(){
    if(this.state){
        if(this.velocitY = this.velocitY - this.lifts.state){
            this.velocitY = this.velocitY - this.gravity
            this.y = this.y - this.velocitY
            if(this.velocitY == 0){
                this.state = false
            }
        }else{
            this.velocitY = this.velocitY + this.gravity
            this.y = this.y + this.velocitY
            if(this.y > this.height - this.size / 2){
                this.state = true
            }
        }
    }else{
        this.velocitY = this.velocitY + this.lift
    }
}
 */



    /* if(this.x >= this.width - this.size / 4 && this.velocitX == 0){
        console.log('test')
    }else{
        this.x = this.y - this.velocitX
        if(this.state){
            this.velocitX = this.velocitX - this.gravity
            this.x = this.x - this.velocitX
            if(this.velocitX == 0){
                this.state = false
            }
        }else{
            this.velocitX = this.velocitX + this.gravity
            this.x = this.x + this.velocitX
            if(this.x > this.width - this.size / 2){
                this.state = true
            }
        }
    }  */

