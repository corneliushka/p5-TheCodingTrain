this.y = 50
this.x = 130
this.gravity = 1
this.velocitY = 0
this.velocitX = -1
this.size = 40
this.state = false
this.height = 560
this.lift = -20

function setup() {
    createCanvas(600, 600);
    background(220);
}

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


function draw() {
    if(this.y >= this.height - this.size / 2 && this.velocitY == 0){
            console.log('test')
    }else{
        this.x = this.x - this.velocitX
        if(this.state){
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
    }
    background(220)
    ellipse(this.x,this.y,this.size,this.size);
}